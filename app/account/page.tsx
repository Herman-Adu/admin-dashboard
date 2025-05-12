//import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Settings
          </h1>
          <div className="grid gap-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="account">
                <AccordionTrigger className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                      Account
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Manage your account settings
                    </p>
                  </div>
                  <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        defaultValue="********"
                      />
                    </div>
                    <Button>Save Changes</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="notifications">
                <AccordionTrigger className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                      Notifications
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Manage your notification settings
                    </p>
                  </div>
                  <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-4">
                      <Switch id="email-notifications" defaultChecked />
                      <Label htmlFor="email-notifications">
                        Email Notifications
                      </Label>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch id="push-notifications" />
                      <Label htmlFor="push-notifications">
                        Push Notifications
                      </Label>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch id="sms-notifications" />
                      <Label htmlFor="sms-notifications">
                        SMS Notifications
                      </Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="privacy">
                <AccordionTrigger className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                      Privacy
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Manage your privacy settings
                    </p>
                  </div>
                  <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-4">
                      <Switch id="public-profile" />
                      <Label htmlFor="public-profile">Public Profile</Label>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch id="share-data" />
                      <Label htmlFor="share-data">Share Data</Label>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch id="hide-online-status" />
                      <Label htmlFor="hide-online-status">
                        Hide Online Status
                      </Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="appearance">
                <AccordionTrigger className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                      Appearance
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Manage your appearance settings
                    </p>
                  </div>
                  <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-4">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-4">
                      <Checkbox id="show-avatars" defaultChecked />
                      <Label htmlFor="show-avatars">Show Avatars</Label>
                    </div>
                    <div className="flex items-center gap-4">
                      <Checkbox id="show-labels" />
                      <Label htmlFor="show-labels">Show Labels</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
} */
