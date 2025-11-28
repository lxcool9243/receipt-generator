import type { Receipt } from "../types/receipt";
import { ReceiptHeader } from "./ReceiptHeader";
import { ReceiptTable } from "./ReceiptTable";
import { ReceiptFooter } from "./ReceiptFooter";
import { type ForwardedRef, forwardRef } from "react";

interface ReceiptPreviewProps {
  receipt: Receipt;
  subtotal: number;
  taxAmounts: number[];
  total: number;
  formatNumber: (value: number) => string;
}

export const ReceiptPreview = forwardRef(
  (
    { receipt, subtotal, taxAmounts, total, formatNumber }: ReceiptPreviewProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className="bg-white shadow font-mono text-xs min-w-[320px] w-[330px] py-10 px-6"
        style={{
          minHeight: "590px",
          maxWidth: "330px",
          fontFamily: "monospace",
        }}
      >
        <ReceiptHeader
          restaurant={receipt.restaurant}
          locality={receipt.locality}
          address={receipt.address}
          orderNo={receipt.orderNo}
          dineType={receipt.dineType}
          host={receipt.host}
          date={receipt.date}
          time={receipt.time}
        />
        <ReceiptTable items={receipt.items} formatNumber={formatNumber} />
        <ReceiptFooter
          subtotal={subtotal}
          taxes={receipt.taxes}
          taxAmounts={taxAmounts}
          total={total}
          paymentType={receipt.paymentType}
          customerCopy={receipt.customerCopy}
          formatNumber={formatNumber}
        />
      </div>
    );
  },
);
