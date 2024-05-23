"use client"
import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Checkboxes() {
    const [selected, setSelected] = useState([])
    const [isInvalid, setIsInvalid] = useState(true);
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">CheckBox</h2>
            <div className="flex gap-4 flex-wrap">
                <Checkbox defaultSelected lineThrough>Option</Checkbox>
                <Checkbox isSelected>Option</Checkbox>
                <Checkbox isDisabled isSelected>Option</Checkbox>
                <Checkbox color="secondary" size="lg">Option</Checkbox>
                <Checkbox lineThrough color="warning" size="md">Option</Checkbox>
                <Checkbox lineThrough color="danger" size="sm">Option</Checkbox>
                <Checkbox color="danger" radius="full" size="lg">Option</Checkbox>
                <Checkbox color="danger" radius="lg" size="lg">Option</Checkbox>
                <Checkbox color="danger" size="lg" radius="md">Option</Checkbox>
                <Checkbox color="danger" size="lg" radius="none">Option</Checkbox>
                <Checkbox color="danger" size="lg" radius="sm">Option</Checkbox>
                <Checkbox color="danger" size="lg" radius="sm" isIndeterminate>Option</Checkbox>
                <Checkbox color="danger" size="lg" radius="sm" icon={<FaHeart />}>Option</Checkbox>

            </div>
            <div>
                <h4 className=" border-3">Group</h4>
                <CheckboxGroup label="Select cities" defaultValue={["sydney", "tokyo"]} >
                    <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                    <Checkbox value="sydney">Sydney</Checkbox>
                    <Checkbox value="san-francisco">San Francisco</Checkbox>
                    <Checkbox value="london">London</Checkbox>
                    <Checkbox value="tokyo">Tokyo</Checkbox>
                </CheckboxGroup>
                <h4 className=" border-3">horizontal</h4>
                <CheckboxGroup orientation="horizontal" color="success" label="Select cities" defaultValue={["sydney", "tokyo"]} >
                    <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                    <Checkbox value="sydney">Sydney</Checkbox>
                    <Checkbox value="san-francisco">San Francisco</Checkbox>
                    <Checkbox value="london">London</Checkbox>
                    <Checkbox value="tokyo">Tokyo</Checkbox>
                </CheckboxGroup>
                <h4 className=" border-3">Controlled</h4>
                <CheckboxGroup label="Select cities" color="warning" value={selected} onValueChange={setSelected} >
                    <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                    <Checkbox value="sydney">Sydney</Checkbox>
                    <Checkbox value="san-francisco">San Francisco</Checkbox>
                </CheckboxGroup>
                <p className="text-default-500 text-small">Selected: {selected.join(", ")}</p>
                <h4 className=" border-3">Invalid</h4>
                <CheckboxGroup orientation="horizontal" isRequired description="Select the cities you want to visit" isInvalid={isInvalid} label="Select cities" onValueChange={(value) => { setIsInvalid(value.length < 1); }} >
                    <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                    <Checkbox value="sydney">Sydney</Checkbox>
                    <Checkbox value="san-francisco">San Francisco</Checkbox>
                    <Checkbox value="london">London</Checkbox>
                    <Checkbox value="tokyo">Tokyo</Checkbox>
                </CheckboxGroup>
            </div>
        </>
    )
};
