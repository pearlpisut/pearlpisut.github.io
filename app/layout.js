import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pearl Phutanate Pisutsin",
  description: "what does he do?",
  icons: {
    icon: '/pictures/newicon.png', // /public path
  },
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
