import type { Receipt } from "../types/receipt";

export const initialReceipt: Receipt = {
  orderNo: "493",
  dineType: "Dine In",
  host: "DHARAMRAJ",
  date: "2025-09-25",
  time: "02:30:21 PM",
  restaurant: "PUNJABI TADKA & GRILL",
  locality: "SANT NAGAR, BURARI",
  address: "DELHI - 110084",
  items: [],
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
