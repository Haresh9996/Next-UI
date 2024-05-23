"use client"

import { DateInput, TimeInput } from "@nextui-org/react";
import { CalendarDate, Time, getLocalTimeZone, parseDate, today } from "@internationalized/date";
import { FaCalendarAlt } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { useState } from "react";

export default function DateInputes() {
    // const [value, setValue] = useState(parseDate("2024-04-04"))
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Date & Time Input</h2>
            <h3 className="border-black">Date Input</h3>
            <div className="my-4">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <DateInput
                        label="Pick date"
                        placeholderValue={new CalendarDate(1997, 8, 9)}
                        className="max-w-full"
                    />
                    <DateInput
                        isDisabled
                        label="Disabled"
                        defaultValue={parseDate("2024-05-21")}
                        className="max-w-full"
                    />
                    <DateInput
                        isReadOnly
                        label="Read only"
                        defaultValue={parseDate("2024-05-21")}
                        className="max-w-full"
                    />
                    <DateInput
                        isReadOnly
                        label="Required"
                        // defaultValue={parseDate("2024-05-21")}
                        className="max-w-full"
                    />
                </div>
                <div>
                    <h4 className="my-3 border-2">Varient</h4>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <DateInput label="bordered" variant="bordered" placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                        <DateInput label="faded" variant="faded" placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                        <DateInput label="flat" variant="flat" placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                        <DateInput label="underlined" variant="underlined" placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                    </div>
                </div>
                <div>
                    <h4 className="my-3 border-2">Label Placement</h4>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <DateInput label="inside" labelPlacement="inside" variant="faded" placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                        <DateInput label="outside" labelPlacement="outside" variant="flat" placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                        <DateInput label="outside-left" labelPlacement="outside-left" variant="underlined" placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                    </div>
                </div>
                <div>
                    <h4 className="my-3 border-2">Start & End content & description</h4>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <DateInput label="Start Content" startContent={<FaCalendarAlt />} variant="flat" placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                        <DateInput label="End Content" endContent={<FaCalendarAlt />} variant="underlined" placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                        <DateInput label="End Content with Description" endContent={<FaCalendarAlt />} description="this is my birth date!" variant="underlined" placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                    </div>
                </div>
                <div>
                    <h4 className="my-3 border-2">invalid & controlled</h4>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <DateInput label="Start Content" isInvalid placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                        {/* <DateInput label="End Content" value={value} onChange={setValue} placeholderValue={new CalendarDate(1997, 8, 9)} className="max-w-full" />
                        <p>Date is {value}</p> */}

                    </div>
                </div>
                <h4 className="my-3 border-2">Min & Max Date</h4>
                <div className="w-full max-w-xl flex flex-row gap-4">
                    <div className="w-full flex flex-col gap-1">
                        <h3>Min date</h3>
                        <DateInput label="Date and time" minValue={today(getLocalTimeZone())} defaultValue={today(getLocalTimeZone()).subtract({ days: 1 })} />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <h3>Max date</h3>
                        <DateInput label="Date and time" maxValue={today(getLocalTimeZone())} defaultValue={today(getLocalTimeZone()).add({ days: 1 })} />
                    </div>
                </div>
            </div>
            <h3 className="border-black">Time Input</h3>
            <div className="my-4">
                <div className="flex flex-wrap gap-4">
                    <TimeInput label="Event Time" className="max-w-md" />
                    <TimeInput label="Event Time" className="max-w-md" defaultValue={new Time(8, 45)} />
                    <TimeInput label="required" isRequired className="max-w-md" />
                    <TimeInput label="disabled" isDisabled className="max-w-md" />
                    <TimeInput label="with description" description="please enter time" className="max-w-md" />
                </div>
                <h4 className="my-3 border-2">label placement & start & End content</h4>
                <div className="flex flex-wrap gap-4">
                    <TimeInput label="inside" labelPlacement="inside" className="max-w-lg" />
                    <TimeInput label="outside" labelPlacement="outside" className="max-w-lg" defaultValue={new Time(8, 45)} />
                    <TimeInput label="outside-left" labelPlacement="outside-left" className="max-w-lg" />
                    <TimeInput label="start content" startContent={<CiTimer/>} className="max-w-lg" />
                    <TimeInput label="end content" endContent={<CiTimer/>} className="max-w-lg" />
                </div>
                <h4 className="my-3 border-2">Min & Max time</h4>
                <div className="flex flex-wrap gap-4">
                    <TimeInput label="inside" defaultValue={new Time(8)} minValue={new Time(9)} className="max-w-lg" />
                    <TimeInput label="inside" defaultValue={new Time(10)} maxValue={new Time(9)} className="max-w-lg" />
                   

                </div>
            </div>
        </>
    );
};
