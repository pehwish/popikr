import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "POPIKR",
  description: "POPIKR",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main id="main" className="mx-auto max-w-screen-sm">
          {children}
        </main>
        {modal}
      </body>
    </html>
  );
}
