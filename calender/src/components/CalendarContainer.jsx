"use client";

import Image from "next/image";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "./NotesPanel";
import useCalendar from "./useCalendar";
import { useState, useEffect } from "react";

const monthImages = [
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200&h=400",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200&h=400",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1200&h=400",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200&h=400",
    "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200&h=400",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=1200&h=400",
    "https://wallpaper-house.com/data/out/7/wallpaper2you_174147.jpg",
    "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&q=80&w=1200&h=400",
    "https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-1d1c246/www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-3-scaled.jpg",
    "https://imagedelivery.net/y9EHf1toWJTBqJVsQzJU4g/www.indianholiday.com/2025/06/manali-picnic-spot.jpg/w=750,h=500",
    "https://holidify.com/images/bgImages/VIETNAM.jpg",
    "https://blog.getsholidays.com/wp-content/uploads/2025/10/15-Best-Places-to-Visit-in-India-in-December.webp"
];

export default function CalendarContainer() {
    const {
        currentMonth,
        startDate,
        endDate,
        handleDateClick,
        isInRange,
        nextMonth,
        prevMonth,
    } = useCalendar();

    const [mounted, setMounted] = useState(false);
    const [realTime, setRealTime] = useState(new Date());

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setRealTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Generate some fake spiral binder holes
    const spirals = Array.from({ length: 32 }).map((_, i) => i);

    return (
        <div className="flex-1 w-full flex items-center justify-center p-4 py-12 md:py-16">
            <div className="w-full max-w-[800px] relative animate-fade-in-up">

                {/* The Wall Calendar Physical Body */}
                <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-20 flex flex-col hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-shadow duration-700">

                    {/* Spiral binder visuals */}
                    <div className="absolute top-0 inset-x-0 -mt-3 flex justify-between px-6 z-30 pointer-events-none">
                        {spirals.map(i => (
                            <div key={i} className="relative w-2 h-6">
                                <div className="absolute left-1/2 -mt-1 w-1.5 h-8 bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800 rounded-full shadow-sm transform -translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-1/2 w-2.5 h-2.5 bg-gray-900 rounded-full transform -translate-x-1/2 shadow-inner"></div>
                            </div>
                        ))}
                        {/* Center hanger */}
                        <div className="absolute left-1/2 -top-5 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-gray-600 border-b-transparent"></div>
                    </div>

                    {/* Hero Image & SVG Overlay */}
                    <div className="h-[350px] md:h-[450px] relative rounded-t-xl overflow-hidden bg-black group cursor-pointer">
                        <Image
                            src={monthImages[currentMonth ? currentMonth.getMonth() : 0]}
                            alt="Mountain scenery"
                            priority
                            unoptimized
                            fill
                            className="object-cover object-center transition-transform duration-[3000ms] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        />

                        {/* Left Prev Arrow (Hidden -> Slide in) */}
                        <button 
                            onClick={prevMonth} 
                            className="absolute left-4 md:left-8 top-[40%] md:top-[45%] -translate-y-1/2 -translate-x-6 opacity-0 z-30 p-1 md:p-2 text-white/80 bg-transparent transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0 hover:!text-white hover:!scale-[1.3] drop-shadow-md hidden sm:block"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                        </button>

                        {/* Right Next Arrow (Hidden -> Slide in) */}
                        <button 
                            onClick={nextMonth} 
                            className="absolute right-4 md:right-8 top-[40%] md:top-[45%] -translate-y-1/2 translate-x-6 opacity-0 z-30 p-1 md:p-2 text-white/80 bg-transparent transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0 hover:!text-white hover:!scale-[1.3] drop-shadow-md hidden sm:block"
                            style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                            <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                        </button>

                        {/* Blue Shape SVG */}
                        <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[150px] md:h-[200px] z-10 text-[#128FD2] fill-current">
                            <path d="M0,100 L450,180 L1000,0 L1000,200 L0,200 Z" />
                        </svg>

                        {/* White Shape SVG Overlay */}
                        <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[100px] md:h-[130px] z-20 text-white fill-current">
                            <path d="M0,150 L200,90 L450,170 L750,110 L1000,160 L1000,200 L0,200 Z" />
                        </svg>

                        {/* Title and Controls over the Blue Area */}
                        <div className="absolute bottom-[30%] md:bottom-[25%] right-8 z-30 flex items-end gap-6 text-right cursor-default">
                            {mounted && (
                                <div className="flex flex-col items-end">
                                    <div className="text-lg md:text-xl text-white/80 font-medium tracking-wide mb-1 font-mono">
                                        {realTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                    </div>
                                    <div className="text-2xl md:text-3xl text-white font-medium tracking-wide">
                                        {realTime.toLocaleDateString('default', { weekday: 'long' })}, {realTime.getDate()} {realTime.getFullYear()}
                                    </div>
                                    <div className="text-4xl md:text-5xl text-white font-bold leading-none tracking-wider mt-1">
                                        {currentMonth ? currentMonth.toLocaleString('default', { month: 'long' }).toUpperCase() : "JANUARY"}
                                    </div>
                                </div>
                            )}
                            {!mounted && (
                                <div className="flex flex-col items-end">
                                    <div className="text-lg md:text-xl text-transparent font-medium tracking-wide mb-1 font-mono">
                                        00:00:00
                                    </div>
                                    <div className="text-2xl md:text-3xl text-white font-medium tracking-wide">
                                        {currentMonth ? currentMonth.getFullYear() : "2022"}
                                    </div>
                                    <div className="text-4xl md:text-5xl text-white font-bold leading-none tracking-wider mt-1">
                                        {currentMonth ? currentMonth.toLocaleString('default', { month: 'long' }).toUpperCase() : "JANUARY"}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Lower Section */}
                    <div className="flex flex-col md:flex-row bg-white rounded-b-xl pb-8">
                        {/* Notes Section - Left on desktop */}
                        <div className="md:w-[35%] px-8 pt-4 md:pt-8 bg-white">
                            <NotesPanel
                                startDate={startDate}
                                endDate={endDate}
                            />
                        </div>

                        {/* Calendar Section - Right on desktop */}
                        <div className="md:w-[65%] px-8 pt-4 md:pt-8 flex flex-col relative w-full">
                            {/* Mobile arrow controls fallback inside the grid container for extra small screens */}
                            <div className="sm:hidden absolute top-0 -mt-14 right-2 flex gap-2 z-50">
                                <button onClick={prevMonth} className="p-2 text-white/90 bg-black/30 hover:bg-black/60 rounded-full backdrop-blur-md"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg></button>
                                <button onClick={nextMonth} className="p-2 text-white/90 bg-black/30 hover:bg-black/60 rounded-full backdrop-blur-md"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg></button>
                            </div>

                            {/* Animated Grid Container for month changes */}
                            <div key={currentMonth ? currentMonth.toISOString() : 'default'} className="animate-grid-pop h-full w-full">
                                <CalendarGrid
                                    currentMonth={currentMonth}
                                    startDate={startDate}
                                    endDate={endDate}
                                    handleDateClick={handleDateClick}
                                    isInRange={isInRange}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}