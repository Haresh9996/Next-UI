"use client"
import { getLocalTimeZone, now, today } from "@internationalized/date";
import { DatePicker, DateRangePicker } from "@nextui-org/react";
import { useState } from "react";

export default function Datepeackers() {
    const [value, setValue] = useState(now(getLocalTimeZone()))
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">date picker</h2>
            <div className="space-x-3 flex flex-wrap gap-4 my-3 items-center">
                <div>
                    <h4>date picker</h4>
                    <DatePicker label="choose date" className="max-w-[200px]" />
                </div>
                <div>
                    <h4>read only</h4>
                    <DatePicker label="read only" isReadOnly className="max-w-[200px]" />
                </div>
                <div>
                    <h4>required</h4>
                    <DatePicker label="required" isRequired className="max-w-[200px]" />
                </div>
                <div>
                    <h4>month and year picker</h4>
                    <DatePicker label="month and year picker" showMonthAndYearPickers className="max-w-[200px]" />
                </div>
                <div>
                    <h4>time field</h4>
                    <DatePicker label="time field" defaultValue={now(getLocalTimeZone())} showMonthAndYearPickers className="max-w-[300px]" />
                </div>
                <div>
                    <h4>Varient</h4>
                    <div className="flex flex-wrap gap-4">
                        <DatePicker label="bordered" variant="bordered" className="max-w-[300px]" />

                        <DatePicker label="faded" variant="faded" className="max-w-[300px]" />

                        <DatePicker label="flat" variant="flat" className="max-w-[300px]" />

                        <DatePicker label="underlined" variant="underlined" className="max-w-[300px]" />
                    </div>
                </div>
                <div>
                    <h4>label placement</h4>
                    <div className="flex flex-wrap gap-4">
                        <DatePicker label="inside" labelPlacement="inside" className="max-w-[300px]" />

                        <DatePicker label="outside" labelPlacement="outside" className="max-w-[300px]" />

                        <DatePicker label="outside-left" labelPlacement="outside-left" className="max-w-[300px]" />
                    </div>
                </div>
                <div>
                    <DatePicker label="controlled" value={value} onChange={setValue} className="max-w-[300px]" />
                </div>
            </div>

            <h4 className="border-2 my-4">Date RangePicker</h4>
            <div className="flex flex-wrap gap-4">
                <DateRangePicker label="select Date" className="max-w-[350px]" />
                <DateRangePicker label="disabled" isDisabled className="max-w-[350px]" />
                <DateRangePicker label="required" isRequired className="max-w-[350px]" />
                <DateRangePicker label="visible months" visibleMonths={3} className="max-w-[350px]" />

            </div>
        </>
    )
};
