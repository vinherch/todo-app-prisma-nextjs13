import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset you password",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
