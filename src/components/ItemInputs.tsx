import type { Item } from "../types/receipt";

interface ItemInputsProps {
  items: Item[];
  onSetItem: (idx: number, key: keyof Item, val: Item[keyof Item]) => void;
  onAddItem: () => void;
  onDeleteItem: (idx: number) => void;
}

export const ItemInputs = ({
  items,
  onSetItem,
  onAddItem,
  onDeleteItem,
}: ItemInputsProps) => {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1 bg-gray-300 rounded">
        <div className="px-1 text-xs font-semibold w-10">Qty.</div>
        <div className="px-1 text-xs font-semibold flex-1">Item Name</div>
        <div className="px-1 text-xs font-semibold w-16">Amount</div>
        <div>&emsp;</div>
      </div>
      {items.map((it, i) => (
        <div className="flex items-center gap-1 mb-1" key={i}>
          <input
            type="number"
            className="border px-2 py-1 w-10 text-xs rounded text-right bg-gray-50"
            value={it.qty}
            min="1"
            onChange={(e) => onSetItem(i, "qty", Number(e.target.value))}
          />
          <input
            className="border px-2 py-1 flex-1 text-xs rounded"
            value={it.name}
            onChange={(e) => onSetItem(i, "name", e.target.value)}
          />
          <input
            type="number"
            className="border px-2 py-1 w-16 text-xs rounded text-right"
            value={it.price}
            onChange={(e) => onSetItem(i, "price", Number(e.target.value))}
          />
          <button
            type="button"
            onClick={() => onDeleteItem(i)}
            className="px-1 cursor-pointer"
          >
            🗑️
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={onAddItem}
        className="bg-blue-500 text-white text-xs px-2 py-1 rounded cursor-pointer"
      >
        + Add Item
      </button>
    </div>
  );
};
