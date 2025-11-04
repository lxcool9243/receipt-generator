import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import type { Receipt, Item, Tax } from "./types/receipt";
import { ReceiptForm } from "./components/ReceiptForm";
import { ReceiptPreview } from "./components/ReceiptPreview";
import {
  formatNumber,
  calculateSubtotal,
  calculateTaxes,
  calculateTotal,
} from "./utils/calculations";

const initialReceipt: Receipt = {
  orderNo: "493",
  dineType: "Dine In",
  host: "DHARAMRAJ",
  date: "2025-09-25",
  time: "02:30:21 PM",
  restaurant: "PUNJABI TADKA & GRILL",
  locality: "SANT NAGAR, BURARI",
  address: "DELHI - 110084",
  items: [
    { qty: 2, name: "Tandoor Platter Veg", price: 985 },
    { qty: 1, name: "Non Veg Tex Mex Platter", price: 985 },
    { qty: 2, name: "Mineral Water", price: 99 },
  ],
  taxes: [
    { label: "CGST", value: 2.5 },
    { label: "SGST", value: 2.5 },
    { label: "S.CHARGE", value: 10 },
  ],
  paymentType: "CASH",
  customerCopy: `Customer Copy

Thanks for visiting

PUNJABI TADKA & GRILL`,
  showBarcode: false,
  thankDisplay: false,
};

const App = () => {
  const [receipt, setReceipt] = useState<Receipt>(initialReceipt);

  const [commaSep, setCommaSep] = useState(false);
  const receiptRef = useRef<HTMLDivElement>(null);

  // Calculations
  const subtotal = calculateSubtotal(receipt.items);
  const taxAmts = calculateTaxes(subtotal, receipt.taxes);
  const total = calculateTotal(subtotal, taxAmts);

  // Item Handlers
  const setItem = <K extends keyof Item>(idx: number, key: K, val: Item[K]) =>
    setReceipt((r) => ({
      ...r,
      items: r.items.map((it, i) => (i === idx ? { ...it, [key]: val } : it)),
    }));
  const addItem = () =>
    setReceipt((r) => ({
      ...r,
      items: [...r.items, { qty: 1, name: "", price: 0 }],
    }));
  const delItem = (idx: number) =>
    setReceipt((r) => ({ ...r, items: r.items.filter((_, i) => i !== idx) }));

  // Dynamic Tax Handlers
  const setTax = (idx: number, key: keyof Tax, val: unknown) =>
    setReceipt((r) => ({
      ...r,
      taxes: r.taxes.map((t, i) => (i === idx ? { ...t, [key]: val } : t)),
    }));
  const addTax = () =>
    setReceipt((r) => ({ ...r, taxes: [...r.taxes, { label: "", value: 0 }] }));
  const delTax = (idx: number) =>
    setReceipt((r) => ({ ...r, taxes: r.taxes.filter((_, i) => i !== idx) }));

  // Top-level change handler
  const handleInput = <K extends keyof Receipt>(field: K, val: Receipt[K]) =>
    setReceipt((r) => ({ ...r, [field]: val }));

  // PDF Download
  const downloadPDF = () => {
    if (!receiptRef.current) return;
    html2canvas(receiptRef.current).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [340, canvas.height * (340 / canvas.width)],
      });
      pdf.addImage(img, "PNG", 0, 0, 340, canvas.height * (340 / canvas.width));
      pdf.save("receipt.pdf");
    });
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <div className="flex gap-8 py-5 w-full max-w-5xl">
        <ReceiptForm
          receipt={receipt}
          onReceiptChange={handleInput}
          onSetItem={setItem}
          onAddItem={addItem}
          onDeleteItem={delItem}
          onSetTax={setTax}
          onAddTax={addTax}
          onDeleteTax={delTax}
          onCommaSepChange={setCommaSep}
          commaSep={commaSep}
          onDownloadPDF={downloadPDF}
        />
        <div className="flex-1 flex flex-col items-center justify-start py-8">
          <ReceiptPreview
            ref={receiptRef}
            receipt={receipt}
            subtotal={subtotal}
            taxAmounts={taxAmts}
            total={total}
            formatNumber={(v) => formatNumber(v, commaSep)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
