import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import "@/styles/globals.css";

const kumbhSans = Kumbh_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filmes Populares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={kumbhSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
