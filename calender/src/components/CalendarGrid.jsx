"use client";
import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isToday,
    format,
} from "date-fns";
import DayCell from "./DayCell";

export default function CalendarGrid({
    currentMonth,
    startDate,
    endDate,
    handleDateClick,
    isInRange,
}) {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);

    // Get start and end of the weeks containing the month's start/end
    // Week starts on Monday (weekStartsOn: 1)
    const startDateToRender = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDateToRender = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const days = eachDayOfInterval({
        start: startDateToRender,
        end: endDateToRender,
    });

    const weekDays = [
        { name: "MON", weekend: false },
        { name: "TUE", weekend: false },
        { name: "WED", weekend: false },
        { name: "THU", weekend: false },
        { name: "FRI", weekend: false },
        { name: "SAT", weekend: true },
        { name: "SUN", weekend: true }
    ];

    return (
        <div className="w-full">
            {/* Day of Week Headers */}
            <div className="grid grid-cols-7 gap-y-4 gap-x-0 md:gap-x-2">
                {weekDays.map((day) => (
                    <div
                        key={day.name}
                        className={`text-center text-xs md:text-sm font-bold uppercase tracking-wider mb-2 ${day.weekend ? 'text-[#128FD2]' : 'text-slate-800'}`}
                    >
                        {day.name}
                    </div>
                ))}

                {/* Calendar Days */}
                {days.map((day, index) => {
                    const isCurrentMonthDay = isSameMonth(day, monthStart);
                    const isStart = startDate && day.toDateString() === startDate.toDateString();
                    const isEnd = endDate && day.toDateString() === endDate.toDateString();
                    const inRange = isInRange(day);
                    const isTodayDate = isToday(day);

                    // Determine if it's a weekend (0 is Sunday, 6 is Saturday)
                    const dayOfWeek = day.getDay();
                    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

                    return (
                        <div key={day.toISOString()} className="flex justify-center items-center">
                            <DayCell
                                date={day}
                                onClick={handleDateClick}
                                isStart={isStart}
                                isEnd={isEnd}
                                isInRange={inRange}
                                isCurrentMonthDay={isCurrentMonthDay}
                                isToday={isTodayDate}
                                isWeekend={isWeekend}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}