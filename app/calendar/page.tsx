"use client";

import Calendar from "@/components/Calendar";
import { Separator } from "@radix-ui/react-separator";

const CalendarPage = () => {
  return (
    <div className="w-full px-10 justify-start items-start gap-8">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Event Calendar</h2>
        <p className="text-muted-foreground">
          Book meeting with clients and keep upto date with business events.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 w-full">
        <Calendar />
      </div>
    </div>
  );
};

export default CalendarPage;
