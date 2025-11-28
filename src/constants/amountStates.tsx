import { initialReceipt } from "./initialReceipt";

export const amountStates = [
  {
    label: "₹ 5000",
    state: {
      ...initialReceipt,
      items: [
        { qty: 1, name: "Tandoori Veg Platter", price: 895 },
        { qty: 1, name: "Non Veg Kebab Platter", price: 1095 },
        { qty: 1, name: "Pasta Alfredo Veg", price: 645 },
        { qty: 1, name: "Classic Margherita Pizza", price: 625 },
        { qty: 4, name: "Mocktail Signature", price: 375 },
        { qty: 2, name: "Mineral Water 1L", price: 95 },
      ],
    },
  },
  {
    label: "₹ 10000",
    state: {
      ...initialReceipt,
      items: [
        { qty: 2, name: "Tandoori Non Veg Platter", price: 1195 },
        { qty: 2, name: "Veg Mezze Platter", price: 795 },
        { qty: 2, name: "Peri Peri Cottage Cheese Pizza", price: 745 },
        { qty: 2, name: "Chicken Biryani", price: 725 },
        { qty: 4, name: "IMFL Cocktail", price: 475 },
        { qty: 2, name: "Soft Drink", price: 195 },
      ],
    },
  },
  {
    label: "₹ 15000",
    state: {
      ...initialReceipt,
      items: [
        { qty: 2, name: "Veg Mezze & Hummus Platter", price: 825 },
        { qty: 2, name: "Mixed Non Veg Grill Platter", price: 1295 },
        { qty: 3, name: "Signature Wood Fired Pizza", price: 825 },
        { qty: 2, name: "Dal Makhani", price: 595 },
        { qty: 8, name: "Butter Naan", price: 145 },
        { qty: 8, name: "Cocktail / LIIT", price: 525 },
        { qty: 4, name: "Mineral Water 1L", price: 110 },
      ],
    },
  },
  {
    label: "₹ 20000",
    state: {
      ...initialReceipt,
      items: [
        { qty: 4, name: "Vegetarian Starters Platter", price: 895 },
        { qty: 4, name: "Non Vegetarian Starters Platter", price: 1395 },
        { qty: 4, name: "Signature Pizza (Non Veg)", price: 875 },
        { qty: 2, name: "Chicken Biryani Handi", price: 775 },
        { qty: 2, name: "Paneer Lababdar", price: 625 },
        { qty: 4, name: "IMFL Cocktails", price: 525 },
        { qty: 2, name: "Soft Drinks", price: 195 },
      ],
    },
  },
  {
    label: "₹ 25000",
    state: {
      ...initialReceipt,
      items: [
        { qty: 5, name: "Veg Tandoori Platter", price: 925 },
        { qty: 5, name: "Non Veg Tandoori Platter", price: 1395 },
        { qty: 6, name: "Assorted Wood Fired Pizzas", price: 875 },
        { qty: 6, name: "Veg / Chicken Pasta Mix", price: 745 },
        { qty: 6, name: "Dal Makhani", price: 615 },
        { qty: 10, name: "Cocktails & LIIT", price: 575 },
        { qty: 8, name: "Mocktails", price: 375 },
        { qty: 6, name: "Mineral Water 1L", price: 110 },
      ],
    },
  },
  {
    label: "₹ 30000",
    state: {
      ...initialReceipt,
      items: [
        { qty: 6, name: "Veg Mezze Platter", price: 825 },
        { qty: 6, name: "Non Veg Kebab Assorted Platter", price: 1450 },
        { qty: 8, name: "Signature Pizza Combo", price: 895 },
        { qty: 8, name: "Paneer / Chicken Main Course", price: 725 },
        { qty: 10, name: "Dal Makhani", price: 625 },
        { qty: 14, name: "Cocktails / IMFL", price: 575 },
        { qty: 10, name: "Soft Drink / Soda", price: 195 },
        { qty: 8, name: "Mineral Water 1L", price: 110 },
      ],
    },
  },
  {
    label: "₹ 35000",
    state: {
      ...initialReceipt,
      items: [
        { qty: 8, name: "Veg Tandoori & Mezze Platters", price: 895 },
        { qty: 8, name: "Non Veg Tandoori Platters", price: 1495 },
        { qty: 10, name: "Signature Pizza & Pasta Mix", price: 875 },
        { qty: 10, name: "Biryani (Veg & Chicken)", price: 775 },
        { qty: 10, name: "North Indian Mains (Paneer / Chicken)", price: 745 },
        { qty: 16, name: "Cocktails / LIIT / IMFL", price: 595 },
        { qty: 12, name: "Mocktails", price: 395 },
        { qty: 10, name: "Mineral Water 1L", price: 110 },
      ],
    },
  },
  {
    label: "₹ 40000",
    state: {
      ...initialReceipt,
      items: [
        { qty: 10, name: "Veg & Lebanese Platters", price: 895 },
        { qty: 10, name: "Non Veg Grill Platters", price: 1495 },
        { qty: 12, name: "Assorted Pizzas & Pastas", price: 895 },
        { qty: 12, name: "North Indian Main Course", price: 775 },
        { qty: 12, name: "Biryani Handi (Mix)", price: 795 },
        { qty: 20, name: "Cocktails / IMFL", price: 595 },
        { qty: 15, name: "Mocktails & Soft Drinks", price: 395 },
        { qty: 12, name: "Mineral Water 1L", price: 110 },
      ],
    },
  },
  {
    label: "₹ 45000",
    state: {
      ...initialReceipt,
      items: [
        { qty: 12, name: "Veg Platters & Mezze", price: 925 },
        { qty: 12, name: "Non Veg Tandoori Platters", price: 1550 },
        { qty: 14, name: "Pizzas / Pastas Assorted", price: 895 },
        { qty: 14, name: "Premium North Indian Mains", price: 825 },
        { qty: 14, name: "Biryani (Veg / Non Veg)", price: 825 },
        { qty: 24, name: "Cocktails / LIIT / IMFL", price: 615 },
        { qty: 18, name: "Mocktails & Soft Beverages", price: 415 },
        { qty: 14, name: "Mineral Water 1L", price: 110 },
      ],
    },
  },
];
