
import { useState, useEffect } from "react";
import { addMonths, subMonths } from "date-fns";

export default function useCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  // Automatically update the calendar date if left open passing midnight
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentMonth(prev => {
        // Only update currentMonth if the real world month/year drifted AND the user was looking at the current month
        if (
          prev.getMonth() === new Date(now.getTime() - 60000).getMonth() && 
          prev.getMonth() !== now.getMonth()
        ) {
          // If the real world month just ticked over, and we were on that month, tick it over too
          return now;
        }
        return prev;
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      // If clicking before start date, make it the new start date
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const isInRange = (date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return {
    currentMonth,
    startDate,
    endDate,
    handleDateClick,
    isInRange,
    nextMonth,
    prevMonth
  };
}