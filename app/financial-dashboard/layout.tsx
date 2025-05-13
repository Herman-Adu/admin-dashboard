import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Payments Dashboard Page",
  description:
    "A visual representation of all payment activity and transaction made by user",
};

interface FinancialDashboardLayoutProps {
  children: React.ReactNode;
}

export default function FinancialDashboardLayout({
  children,
}: FinancialDashboardLayoutProps) {
  return (
    <>
      {/* <div className="hidden space-y-6  pb-16 md:block "> */}
      <div className="w-full px-10 justify-start items-start gap-8">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">
            Financial Dashboard
          </h2>
          <p className="text-muted-foreground">
            A dashboard providing a wide range of analytics and finacancial
            information!
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 w-full">
          {children}
        </div>
      </div>
    </>
  );
}
