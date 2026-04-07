
import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarHeader({ currentMonth, nextMonth, prevMonth }) {
    return (
        <div className="flex justify-between items-center py-4 px-2">
            <button
                onClick={prevMonth}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Previous Month"
            >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>

            <h2 className="text-xl font-bold uppercase tracking-wider text-slate-800">
                {format(currentMonth, "MMMM yyyy")}
            </h2>

            <button
                onClick={nextMonth}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Next Month"
            >
                <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
        </div>
    );
}