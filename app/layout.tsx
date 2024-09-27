import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./provider";
import {Nunito} from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";

const MyAppFont=Nunito({subsets:['latin']});

export const metadata: Metadata = {
  title: "Kids Stories",
  description: "Create New Stories",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={MyAppFont.className}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
