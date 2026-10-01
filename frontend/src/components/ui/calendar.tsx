import * as React from "react";
import { DayPicker } from "react-day-picker";
import { vi } from "date-fns/locale";
import "react-day-picker/style.css";
import { cn } from "../../lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <div className="champa-calendar">
      <DayPicker
        locale={vi}
        showOutsideDays={showOutsideDays}
        className={cn("p-1 select-none", className)}
        {...props}
      />
    </div>
  );
}
