import type { Tax } from "../types/receipt";

interface ReceiptFooterProps {
  subtotal: number;
  taxes: Tax[];
  taxAmounts: number[];
  total: number;
  paymentType: string;
  customerCopy: string;
  formatNumber: (value: number) => string;
}

export const ReceiptFooter = ({
  subtotal,
  taxes,
  taxAmounts,
  total,
  customerCopy,
  formatNumber,
}: ReceiptFooterProps) => {
  return (
    <>
      <div className="flex justify-between mt-8 mb-6">
        <span>CASH</span> <span>SALE</span>
      </div>
      <div className="flex justify-between mb-1">
        <span>SUBTOTAL</span> <span>{formatNumber(subtotal)}</span>
      </div>
      {taxes.map((tax, idx) => (
        <div className="flex justify-between mb-1" key={idx}>
          <span>{tax.label || "TAX"}</span>
          <span>{formatNumber(taxAmounts[idx])}</span>
        </div>
      ))}
      <div className="flex justify-between mb-3">
        <span>TOTAL</span> <span>{formatNumber(total)}</span>
      </div>
      <div className="text-xs mb-1 flex justify-between w-full">
        <span>TRANSACTION TYPE:</span>
        <span>SALE</span>
      </div>
      <div className="text-xs mb-1 flex justify-between w-full">
        <span>AUTHORIZATION:</span>
        <span>APPROVED</span>
      </div>
      <div className="text-xs mb-1 flex justify-between w-full">
        <span>PAYMENT CODE:</span>
        <span></span>
      </div>
      <div className="text-xs mb-1 flex justify-between w-full">
        <span>PAYMENT ID:</span>
        <span></span>
      </div>
      <div className="text-xs mb-1 flex justify-between w-full">
        <span>CARD READER:</span>
        <span></span>
      </div>
      <pre className="mt-1 mb-1 text-center">{customerCopy}</pre>
    </>
  );
};
