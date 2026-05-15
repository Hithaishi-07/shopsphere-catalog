import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopSphere - Premium Products",
  description: "Modern E-commerce Product Catalog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}