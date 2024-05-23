"use client"
import { Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function TextAreas() {
    const [value, setValue] = useState("")
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">TextArea </h2>
            <div className="flex flex-wrap gap-4">
                <div className="min-w-[300px]">
                    <Textarea label="Description" placeholder="Enter your description" className="max-w-md" />
                </div>
                <div className="min-w-[300px]">
                    <Textarea isReadOnly variant="bordered" labelPlacement="outside" defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit." label="Description" placeholder="Read Only" className="max-w-md" />
                </div>
                <div className="min-w-[300px]">
                    <Textarea isRequired variant="flat" labelPlacement="outside" label="required" placeholder="Read Only" className="max-w-md" />
                </div>
                <div>
                    <h4>Auto Size</h4>
                    <div className="flex gap-3 flex-wrap">
                        <Textarea label="Description" placeholder="Enter your description (Default autosize)" />
                        <Textarea minRows={2} label="Description" placeholder="Enter your description (Min rows 2)" />
                        <Textarea maxRows={3} label="Description" placeholder="Enter your description (Max rows 3)" />
                    </div>
                </div>
                <div className="min-w-[300px]">
                    <h4>controlled</h4>
                    <Textarea color="success" variant="underlined" label="Description" labelPlacement="outside"
                        placeholder="Enter your description" value={value} onValueChange={setValue} />
                    <p className="text-default-500 text-small">Textarea value: {value}</p>

                </div>
            </div>
        </>
    )
};
