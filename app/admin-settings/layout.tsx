import { Metadata } from "next";
//import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import { SidebarNav } from "@/app/user-settings/components/sidebar-nav";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "General",
    href: "/admin-settings",
  },
  {
    title: "Domains",
    href: "/admin-settings/domains",
  },
  {
    title: "Webhooks",
    href: "/admin-settings/webhooks",
  },
  {
    title: "Notifications",
    href: "/admin-settings/notifications",
  },
];

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
      <div className="w-full px-10 justify-start items-start gap-8">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Admin Settings</h2>
          <p className="text-muted-foreground">
            Advance account and application settings.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 w-full">
          <aside className="-mx-4 w-3/12">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="w-full">{children}</div>
          <Toaster />
        </div>
      </div>
    </>
  );
}
