import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Transactions List Page",
  description:
    "A visual representation of all payment activity and transaction made by user",
};

interface TransactionsLayoutProps {
  children: React.ReactNode;
}

export default function TransactionsLayout({
  children,
}: TransactionsLayoutProps) {
  return (
    <>
      <div className="flex flex-col  lg:flex-row lg:space-x-12 lg:space-y-0 w-full">
        {children}
      </div>
    </>
  );
}
