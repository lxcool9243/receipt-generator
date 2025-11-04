interface ReceiptHeaderProps {
  restaurant: string;
  locality: string;
  address: string;
  orderNo: string;
  dineType: string;
  host: string;
  date: string;
  time: string;
}

export const ReceiptHeader = ({
  restaurant,
  locality,
  address,
  orderNo,
  dineType,
  host,
  date,
  time,
}: ReceiptHeaderProps) => {
  return (
    <div className="font-mono pb-8 border-b border-dashed">
      <div className="flex flex-col gap-y-1 text-xs text-center mb-1">
        <div>{restaurant}</div>
        <div>{locality}</div>
        <div>{address}</div>
      </div>
      <div className="text-center text-2xl my-8">
        <div>ORDER: {orderNo}</div>
        <div>{dineType.toUpperCase()}</div>
      </div>
      <div>HOST: {host}</div>
      <div className="flex justify-between mb-1">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};
