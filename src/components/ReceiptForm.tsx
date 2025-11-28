import type { Receipt, Item, Tax } from "../types/receipt";
import { ItemInputs } from "./ItemInputs";
import { TaxInputs } from "./TaxInputs";

interface ReceiptFormProps {
  receipt: Receipt;
  onReceiptChange: (
    field: keyof Receipt,
    value: Receipt[keyof Receipt]
  ) => void;
  onSetItem: (idx: number, key: keyof Item, val: Item[keyof Item]) => void;
  onAddItem: () => void;
  onDeleteItem: (idx: number) => void;
  onSetTax: (idx: number, key: keyof Tax, val: unknown) => void;
  onAddTax: () => void;
  onDeleteTax: (idx: number) => void;
  onCommaSepChange: (value: boolean) => void;
  commaSep: boolean;
  onDownloadPDF: () => void;
}

export const ReceiptForm = ({
  receipt,
  onReceiptChange,
  onSetItem,
  onAddItem,
  onDeleteItem,
  onSetTax,
  onAddTax,
  onDeleteTax,
  onCommaSepChange,
  commaSep,
  onDownloadPDF,
}: ReceiptFormProps) => {
  return (
    <form className="flex flex-col max-w-[400px] w-full bg-white shadow rounded px-6 py-7 space-y-2">
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-xs font-semibold">Order Type:</label>
          <select
            className="w-full border px-2 py-1 text-xs rounded"
            value={receipt.dineType}
            onChange={(e) => onReceiptChange("dineType", e.target.value)}
          >
            <option>Dine In</option>
            <option>Take Away</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="text-xs font-semibold">Receipt No: </label>
          <input
            className="w-full border px-2 py-1 text-xs rounded"
            value={receipt.orderNo}
            onChange={(e) => onReceiptChange("orderNo", e.target.value)}
            placeholder="Order #"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <label className="text-xs font-semibold">Host</label>
        <input
          className="w-full border px-2 py-1 text-xs rounded"
          value={receipt.host}
          onChange={(e) => onReceiptChange("host", e.target.value)}
          placeholder="Host"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-xs font-semibold">Billing Date</label>
          <input
            className="w-full border px-2 py-1 text-xs rounded"
            type="date"
            value={receipt.date}
            onChange={(e) => onReceiptChange("date", e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="text-xs font-semibold">Billing Time</label>
          <input
            className="w-full border px-2 py-1 text-xs rounded"
            value={receipt.time}
            onChange={(e) => onReceiptChange("time", e.target.value)}
            placeholder="Time"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <label className="text-xs font-semibold">Restaurant Name</label>
        <input
          className="border px-2 py-1 text-xs rounded"
          value={receipt.restaurant}
          onChange={(e) => onReceiptChange("restaurant", e.target.value)}
          placeholder="Restaurant"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label className="text-xs font-semibold">Restaurant Locality</label>
        <input
          className="w-full border px-2 py-1 text-xs rounded"
          value={receipt.locality}
          onChange={(e) => onReceiptChange("locality", e.target.value)}
          placeholder="Locality"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label className="text-xs font-semibold">Restaurant Address</label>
        <input
          className="w-full border px-2 py-1 text-xs rounded"
          value={receipt.address}
          onChange={(e) => onReceiptChange("address", e.target.value)}
          placeholder="Address"
        />
      </div>

      <TaxInputs
        taxes={receipt.taxes}
        onSetTax={onSetTax}
        onAddTax={onAddTax}
        onDeleteTax={onDeleteTax}
      />

      <ItemInputs
        items={receipt.items}
        onSetItem={onSetItem}
        onAddItem={onAddItem}
        onDeleteItem={onDeleteItem}
      />

      <div className="flex items-center gap-2 text-xs">
        <label className="inline-flex gap-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={commaSep}
            onChange={(e) => onCommaSepChange(e.target.checked)}
          />
          Use COMMA decimal separator (Ex: 40,509)
        </label>
      </div>
      <div className="flex flex-col gap-y-1">
        <label className="text-xs font-semibold">Footer</label>
        <textarea
          className="border w-full rounded p-1 text-xs"
          rows={6}
          value={receipt.customerCopy}
          onChange={(e) => onReceiptChange("customerCopy", e.target.value)}
        />
      </div>
      <button
        type="button"
        className="w-full bg-blue-700 hover:bg-blue-500 text-white px-4 py-2 rounded text-xs font-bold cursor-pointer transition duration-500 ease-in-out"
        onClick={onDownloadPDF}
      >
        DOWNLOAD RECEIPT
      </button>
    </form>
  );
};
