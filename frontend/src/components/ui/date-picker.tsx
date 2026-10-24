import * as React from "react";
import { format, parseISO, isValid } from "date-fns";
import { vi } from "date-fns/locale";
import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar } from "./calendar";
import { cn } from "../../lib/utils";

interface DatePickerProps {
  value?: string; // Format: YYYY-MM-DD
  onChange?: (dateStr: string) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export function DatePicker({
  value,
  onChange,
  className,
  placeholder = "Chọn ngày",
  disabled = false,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const selectedDate = React.useMemo(() => {
    if (!value) return undefined;
    const parsed = parseISO(value);
    return isValid(parsed) ? parsed : undefined;
  }, [value]);

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      const dateStr = format(date, "yyyy-MM-dd");
      onChange?.(dateStr);
      setOpen(false);
    }
  };

  const displayText = React.useMemo(() => {
    if (!selectedDate) return placeholder;
    return format(selectedDate, "dd/MM/yyyy", { locale: vi });
  }, [selectedDate, placeholder]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <button
          type="button"
          className={cn(
            "flex items-center justify-between gap-2 w-full text-left font-semibold text-base sm:text-sm xl:text-[15px] text-on-surface focus:outline-none cursor-pointer mt-1 group",
            className
          )}
        >
          <span className="truncate">{displayText}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-on-surface-variant transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3" align="start">
        <div className="flex flex-col gap-2">
          {/* Quick preset chips */}
          <div className="flex items-center gap-1.5 pb-2 border-b border-outline-variant/30 overflow-x-auto text-[11px] font-semibold text-on-surface-variant">
            <button
              type="button"
              onClick={() => {
                const today = new Date();
                handleSelect(today);
              }}
              className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors cursor-pointer"
            >
              Hôm nay
            </button>
            <button
              type="button"
              onClick={() => {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                handleSelect(tomorrow);
              }}
              className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors cursor-pointer"
            >
              Ngày mai
            </button>
            <button
              type="button"
              onClick={() => {
                const nextWeek = new Date();
                nextWeek.setDate(nextWeek.getDate() + 7);
                handleSelect(nextWeek);
              }}
              className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors cursor-pointer"
            >
              Tuần tới
            </button>
          </div>

          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            defaultMonth={selectedDate || new Date()}
            disabled={{ before: new Date(new Date().setHours(0, 0, 0, 0)) }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
