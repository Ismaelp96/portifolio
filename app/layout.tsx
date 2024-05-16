import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ismael Portfolio",
  description:
    "Um pouco mais sobre minha viagem pelo universo da programação! 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  overflow-y-auto overflow-x-hidden bg-[#030014]`}
      >
        {children}
      </body>
    </html>
  );
}
