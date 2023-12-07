import { Inter } from "next/font/google";
import "./globals.css";
import MainBar from "@/components/Header/MainBar";
import MainFooter from "@/components/Footer/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mitramedia Advertising",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainBar/>
        {children}
        <MainFooter/>
      </body>
    </html>
  );
}
