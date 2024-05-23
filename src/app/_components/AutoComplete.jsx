"use client"
import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import { animals } from "./Animals";
import { MdOutlinePets } from "react-icons/md";
import { HiOutlineSelector } from "react-icons/hi";

export default function AutoComplete() {

    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Auto complete Dropdown</h2>

            <div className="flex w-full flex-wrap gap-4">
                <Autocomplete label="Select an animal" className="max-w-xs" >
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete allowsCustomValue placeholder="Allow custom value" label="Select an animal" className="max-w-xs" >
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="Select an animal" placeholder="Search an animal"
                    className="max-w-xs" defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="With disabled keys" placeholder="Search an animal"
                    className="max-w-xs" disabledKeys={["lion", "elephant", "crocodile"]} defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="required" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
            </div >
            <h4 className="border-2 my-4">size</h4>
            <div className="flex flex-wrap gap-4">
                <Autocomplete label="sm" size="sm" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>

                <Autocomplete label="md" size="md" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="lg" size="lg" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
            </div>
            <h4 className="border-2 my-4">colors</h4>
            <div className="flex flex-wrap gap-4">
                <Autocomplete label="default" color="default" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="primary" color="primary" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="secondary" color="secondary" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="success" color="success" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="warning" color="warning" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="danger" color="danger" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
            </div>
            <h4 className="border-2 my-4">Varient</h4>
            <div className="flex flex-wrap gap-4">
                <Autocomplete label="bordered" variant="bordered" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="faded" variant="faded" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="flat" variant="flat" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="underlined" variant="underlined" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>

            </div>
            <h4 className="border-2 my-4">label placement</h4>
            <div className="flex flex-wrap gap-4">
                <Autocomplete label="inside" labelPlacement="inside" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="outside" labelPlacement="outside" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="outside-left" labelPlacement="outside-left" placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
            </div>
            <h4 className="border-2 my-4">Start & end content</h4>
            <div className="flex flex-wrap gap-4">
                <Autocomplete label="start content" startContent={<MdOutlinePets />} placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete label="end content" endContent={<MdOutlinePets />} placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>
                <Autocomplete selectorIcon={<HiOutlineSelector />} label="custom selector icon" endContent={<MdOutlinePets />} placeholder="Search an animal"
                    className="max-w-xs" defaultSelectedKey={["lion"]} isRequired defaultItems={animals}>
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
                        </AutocompleteItem>
                    ))}

                </Autocomplete>

                <Autocomplete className="max-w-xs" label="Select country" >
                    <AutocompleteItem key="argentina" startContent={<Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/ar.svg" />} >
                        Argentina
                    </AutocompleteItem>
                    <AutocompleteItem key="venezuela" startContent={<Avatar alt="Venezuela" className="w-6 h-6" src="https://flagcdn.com/ve.svg" />} >
                        Venezuela
                    </AutocompleteItem>
                    <AutocompleteItem key="brazil" startContent={<Avatar alt="Brazil" className="w-6 h-6" src="https://flagcdn.com/br.svg" />} >
                        Brazil
                    </AutocompleteItem>
                    <AutocompleteItem key="switzerland" startContent={<Avatar alt="Switzerland" className="w-6 h-6" src="https://flagcdn.com/ch.svg" />} >
                        Switzerland
                    </AutocompleteItem>
                    <AutocompleteItem key="germany" startContent={<Avatar alt="Germany" className="w-6 h-6" src="https://flagcdn.com/de.svg" />} >
                        Germany
                    </AutocompleteItem>
                </Autocomplete>

            </div>

        </>
    );
}
