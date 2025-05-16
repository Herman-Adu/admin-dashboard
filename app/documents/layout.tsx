import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      {/*  <div className="md:hidden">
        <Image
          src="/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div> */}
      {/* <div className="hidden space-y-6  pb-16 md:block "> */}
      <div className="w-full justify-start items-start gap-8">
        <div className="px-2">
          <h2 className="text-2xl font-bold tracking-tight">Documents</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col  lg:flex-row lg:space-x-12 lg:space-y-0">
          {children}
        </div>
      </div>
    </>
  );
}
