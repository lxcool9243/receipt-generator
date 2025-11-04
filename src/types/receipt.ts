export interface Item {
  qty: number;
  name: string;
  price: number;
}

export interface Tax {
  label: string;
  value: number;
}

export interface Receipt {
  orderNo: string;
  dineType: string;
  host: string;
  date: string;
  time: string;
  restaurant: string;
  locality: string;
  address: string;
  items: Item[];
  taxes: Tax[];
  paymentType: string;
  customerCopy: string;
  showBarcode: boolean;
  thankDisplay: boolean;
}
