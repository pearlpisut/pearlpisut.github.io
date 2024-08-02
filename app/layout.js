import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pearl Phutanate Pisutsin",
  description: "my personal site - what I want to tell you beyond the resume.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="top-bar" className="text-2xl dark:bg-black bg-white shadow dark:shadow-[0_3px_5px_0_rgba(256,256,256,0.1)]">
          <Link href='/' className="dark:text-white text-black" style={{
            cursor: "poniter",
            // color: "black"
          }}>pearl</Link>
        </div>
        <div style={{height: "70px"}}></div>
        {children}
        <footer id="page-footer" className="mb-16 mt-16">© 2024 Phutanate Pisutsin</footer>
      </body>
    </html>
  );
}
