// src/app/checkout/layout.js
import CheckoutLayout from "./layout.client";

export const metadata = {
  title: "Checkout - Kronos",
  description: "Checkout page for the Kronos e-commerce project",
};

// This will prevent the root layout from applying to the checkout page
export default function CheckoutServerLayout({ children }) {
  return <CheckoutLayout>{children}</CheckoutLayout>;
}
