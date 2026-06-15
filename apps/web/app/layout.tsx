import type { Metadata } from "next";

import { AuthProvider } from "../lib/authContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "omni-stellar-omni-stellar-sidewalk",
  description: "omni-stellar-omni-stellar-sidewalk authentication"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <main className="page">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
