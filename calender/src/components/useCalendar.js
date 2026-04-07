
import { useState } from "react";
import { addMonths, subMonths } from "date-fns";

export default function useCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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