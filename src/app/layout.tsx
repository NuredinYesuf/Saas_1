import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TechNova - Join Our Engineering Team",
  description: "Build the future of technology with TechNova",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-indigo-700 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              TechNova
            </Link>
            <div>
              <Link href="/" className="text-white mr-4">
                Home
              </Link>
              <Link href="/about" className="text-white mr-4">
                About Us
              </Link>
              <Link href="/jobs" className="text-white mr-4">
                Open Positions
              </Link>
              <Link href="/contact" className="text-white">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 TechNova. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

