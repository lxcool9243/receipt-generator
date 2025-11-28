import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { ReceiptForm } from "./components/ReceiptForm";
import { ReceiptPreview } from "./components/ReceiptPreview";
import { amountStates } from "./constants/amountStates";
import type { Item, Receipt, Tax } from "./types/receipt";
import {
  calculateSubtotal,
  calculateTaxes,
  calculateTotal,
  formatNumber,
} from "./utils/calculations";

const App = () => {
  const [activeLabel, setActiveLabel] = useState<string>(
    amountStates?.[0]?.label
  );
  const [receipt, setReceipt] = useState<Receipt>(amountStates?.[0]?.state);
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
    <div className="flex justify-center items-start min-h-screen">
      <div className="py-5 w-full max-w-5xl">
        <div className="w-full overflow-scroll flex flex-row gap-x-5 py-5 px-3 md:px-0 mb-5">
          {amountStates.map((a) => (
            <div
              onClick={() => {
                setActiveLabel(a.label);
                setReceipt(a.state);
              }}
              className={`min-w-28 text-center p-3 bg-white rounded cursor-pointer transition duration-700 ease-in-out select-none ${
                a.label === activeLabel ? "shadow-lg font-semibold" : "shadow"
              }`}
            >
              {a.label}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8 px-3 md:px-0">
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
          <div className="flex-1 flex flex-col items-end justify-start">
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
    </div>
  );
};

export default App;
