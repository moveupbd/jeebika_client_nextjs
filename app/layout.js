import { Inter } from "next/font/google";
import "./globals.css";
import GlobalNavBar from "./custom_components/GlobalNavBar";
import NavbarPrimary from "./custom_components/NavbarPrimary";

import StoreProvider from "./redux/StoreProvider";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/providers/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeebika",
  description: "Developed by Moveup Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <GlobalNavBar />
          <StoreProvider>
            <NavbarPrimary />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
              }}
            />
            {children}
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
