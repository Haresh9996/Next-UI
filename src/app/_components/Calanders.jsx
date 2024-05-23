"use client"
import { getLocalTimeZone, isWeekend, parseDate, today } from "@internationalized/date";
import { Calendar, RangeCalendar } from "@nextui-org/react";
import { useState } from "react";
import { useLocale } from "react-aria";

export default function Calanders() {
    const [value, setValue] = useState(parseDate("1997-08-09"));

    let [rangeValue, setRangeValue] = useState({
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ weeks: 1 }),
    });

    let [date, setDate] = useState(today(getLocalTimeZone()));
    let { locale } = useLocale();
    let isInvalid = isWeekend(date, locale);

    const handleChange = (newDate) => {
        setValue(newDate);
    };

    const unavailableDates = [
        parseDate("2024-05-16"),
        parseDate("2024-05-19"),
        parseDate("2024-05-20"),
        parseDate("2024-05-24"),
        parseDate("2024-05-25"),
    ];

    const isDateUnavailable = (date) => {
        return unavailableDates.some(unavailableDate =>
            unavailableDate.toString() === date.toString()
        );
    };

    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Calendars</h2>
            <div className="space-x-3 flex flex-wrap gap-4 my-3 items-center">
                <div>
                    <h4>calendar</h4>
                    <Calendar aria-label="calendar" />
                </div>
                <div>
                    <h4>default value</h4>
                    <Calendar defaultValue={parseDate("1997-08-09")} />
                </div>
                <div>
                    <h4>disabled</h4>
                    <Calendar isDisabled defaultValue={parseDate("1997-08-09")} aria-label="disabled" />
                </div>
                <div>
                    <h4>read only</h4>
                    <Calendar isReadOnly value={today(getLocalTimeZone())} />
                </div>
                <div>
                    <h4>controlled</h4>
                    <Calendar value={value} onChange={(e) => handleChange(e.value)} />
                </div>
                <div>
                    <h4>min & max</h4>
                    <Calendar defaultValue={parseDate("2024-05-22")} minValue={parseDate("2024-05-20")} maxValue={parseDate("2024-05-26")} />
                </div>
                <div>
                    <h4>unavailableDate</h4>
                    <Calendar aria-label="Date (Unavailable)" isDateUnavailable={isDateUnavailable} />
                </div>
                <div>
                    <h4>weekends Invalid</h4>
                    <Calendar aria-label="Date (Invalid on weekends)" errorMessage={isInvalid ? "We are closed on weekends" : undefined} isInvalid={isInvalid} value={date} onChange={setDate} />
                </div>
                <div>
                    <h4>month and year</h4>
                    <Calendar aria-label="Date (show months and years)" showMonthAndYearPickers />
                </div>
                <div>
                    <h4>visible months</h4>
                    <Calendar aria-label="Date (visible months)" visibleMonths={4} />
                </div>
            </div>
            <h3>Range Calendar</h3>
            <div className="flex flex-wrap gap-4">
                <div>
                <h4>Uncontrolled</h4>
                    <RangeCalendar
                        aria-label="Date (Uncontrolled)"
                        defaultValue={{
                            start: today(getLocalTimeZone()),
                            end: today(getLocalTimeZone()).add({ weeks: 1 }),
                        }}
                    />
                </div>
                <div>
                <h4>controlled</h4>
                    <RangeCalendar aria-label="Date (Controlled)" value={rangeValue} onChange={setRangeValue} />
                </div>
                <div>
                <h4>visible months</h4>
                    <RangeCalendar aria-label="Date (Controlled)" visibleMonths={3} value={rangeValue} onChange={setRangeValue} />
                </div>

            </div>
        </>
    )
};
