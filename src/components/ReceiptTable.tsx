import type { Item } from "../types/receipt";

interface ReceiptTableProps {
  items: Item[];
  formatNumber: (value: number) => string;
}

export const ReceiptTable = ({ items, formatNumber }: ReceiptTableProps) => {
  return (
    <>
      <table className="w-full text-xs mt-3">
        <thead>
          <tr>
            <td className="font-mono">QTY</td>
            <td className="font-mono">&emsp;&emsp;ITEM</td>
            <td className="font-mono text-right">PRICE</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </thead>
        <tbody>
          {items.map((it, i) => (
            <tr key={i}>
              <td className="text-center w-6">{it.qty}</td>
              <td>{it.name}</td>
              <td className="text-right">{formatNumber(it.price * it.qty)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <span className="block pb-3 border-b border-dashed"></span>
    </>
  );
};
