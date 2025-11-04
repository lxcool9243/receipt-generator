import type { Tax } from "../types/receipt";

interface TaxInputsProps {
  taxes: Tax[];
  onSetTax: (idx: number, key: keyof Tax, val: unknown) => void;
  onAddTax: () => void;
  onDeleteTax: (idx: number) => void;
}

export const TaxInputs = ({
  taxes,
  onSetTax,
  onAddTax,
  onDeleteTax,
}: TaxInputsProps) => {
  return (
    <div className="mb-3">
      <div className="w-full inline-flex gap-x-1 items-center mb-1 bg-gray-300 rounded">
        <div className="flex-1 px-1 text-xs font-semibold">Tax Name</div>
        <div className="flex-1 px-1 text-xs font-semibold">Percent</div>
        <div>&emsp;</div>
        <div>&emsp;</div>
      </div>
      {taxes.map((tax, idx) => (
        <div className="w-full inline-flex gap-x-1 items-center mb-1" key={idx}>
          <input
            className="border px-2 py-1 rounded text-xs"
            value={tax.label}
            onChange={(e) => onSetTax(idx, "label", e.target.value)}
            placeholder="Tax label"
          />
          <input
            className="border px-2 py-1 rounded text-xs text-right"
            type="number"
            value={tax.value}
            step={0.01}
            onChange={(e) =>
              onSetTax(idx, "value", parseFloat(e.target.value) || 0)
            }
            placeholder="%"
          />
          <span className="text-xs">%</span>
          <button
            type="button"
            onClick={() => onDeleteTax(idx)}
            className="px-1 cursor-pointer"
          >
            🗑️
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={onAddTax}
        className="bg-blue-500 text-white text-xs px-2 py-1 rounded cursor-pointer"
      >
        + Add Tax
      </button>
    </div>
  );
};
