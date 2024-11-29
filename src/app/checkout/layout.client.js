// src/app/checkout/layout.client.js
"use client"; // Enabling client-side rendering

export default function CheckoutLayout({ children }) {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <header style={{ padding: "20px", textAlign: "center" }}>
        <h1>Checkout</h1>
      </header>
      <main>{children}</main>
      <footer style={{ padding: "20px", textAlign: "center" }}>
        &copy; 2024 Kronos
      </footer>
    </div>
  );
}
