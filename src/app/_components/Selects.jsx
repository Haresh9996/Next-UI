"use client"
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./Animals";

export default function Selects() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">select </h2>
            <div className="flex flex-wrap gap-4">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select label="Select an animal" className="max-w-xs" >
                        {animals.map((animal) => (
                            <SelectItem key={animal.value} value={animal.value}>
                                {animal.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select label="Favorite Animal" placeholder="Select an animal" className="max-w-xs" >
                        {animals.map((animal) => (
                            <SelectItem key={animal.value} value={animal.value}>
                                {animal.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select label="Favorite Animal select multiple" selectionMode="multiple" placeholder="Select an animal" className="max-w-xs" >
                        {animals.map((animal) => (
                            <SelectItem key={animal.value} value={animal.value}>
                                {animal.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select label="Favorite Animal select multiple required" isRequired selectionMode="multiple" placeholder="Select an animal" className="max-w-xs" >
                        {animals.map((animal) => (
                            <SelectItem key={animal.value} value={animal.value}>
                                {animal.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
            </div>
        </>
    )
};
