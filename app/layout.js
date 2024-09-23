import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "June's learning NextJS 13",
  description: "A site to learn NextJS 13 with DaisyUI",
  keywords:
    "Next, NextJS, NextJS 13, Next 13, React, ReactJS, DaisyUI, Developer, Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="navbar bg-base-300 shadow-xl rounded-box mt-2 mb-6">
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost text-xl">
                June's Next13
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/about/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/githubusers">GitHub Users</Link>
                </li>
              </ul>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
