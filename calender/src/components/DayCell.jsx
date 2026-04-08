import clsx from "clsx";

export default function DayCell({
    date,
    onClick,
    isStart,
    isEnd,
    isInRange,
    isCurrentMonthDay,
    isToday,
    isWeekend,
}) {
    const isMiddleRange = isInRange && !isStart && !isEnd;

    return (
        <div className="relative flex justify-center items-center h-10 w-full group">
            {/* Background container for range connectivity */}
            <div
                className={clsx(
                    "absolute inset-y-0 w-full transition-all duration-200",
                    isInRange ? "bg-[var(--color-selection-bg)]" : "bg-transparent",
                    isStart && "rounded-l-full",
                    isEnd && "rounded-r-full"
                )}
            />

            {/* The actual clickable day circle */}
            <button
                onClick={() => onClick(date)}
                className={clsx(
                    "relative z-10 w-8 md:w-10 h-8 md:h-10 flex items-center justify-center text-sm md:text-[15px] font-bold transition-all duration-200 rounded-full",
                    // Not current month -> faded text
                    !isCurrentMonthDay && "text-slate-200",

                    // Current month -> specific colors
                    isCurrentMonthDay && !isWeekend && "text-slate-800 hover:bg-slate-100",
                    isCurrentMonthDay && isWeekend && "text-[#128FD2] hover:bg-[#f0f9ff]",

                    // Range selection styles overlay gracefully
                    isStart && "bg-[#128FD2] text-white font-bold shadow-md transform scale-105",
                    isEnd && "bg-[#128FD2] text-white font-bold shadow-md transform scale-105",
                    isMiddleRange && "bg-[#f0f9ff]", // Text color remains inherited for middle range

                    // Current day marker
                    isCurrentMonthDay && isToday && !isStart && !isEnd && "ring-2 ring-[#128FD2] ring-inset"
                )}
            >
                {date.getDate()}
            </button>
        </div>
    );
}