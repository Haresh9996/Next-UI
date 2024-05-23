"use client"
import { Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";

export default function RadioGroups() {
    const [selected, setSelected] = useState("london");

    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">RadioGroup </h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <RadioGroup label="Select your favorite city" defaultValue="tokyo" >
                        <Radio value="buenos-aires" description="The capital of Argentina">
                            Buenos Aires
                        </Radio>
                        <Radio value="canberra" description="The capital of Australia">
                            Canberra
                        </Radio>
                        <Radio value="london" description="The capital of England">
                            London
                        </Radio>
                        <Radio value="tokyo" description="The capital of Japan">
                            Tokyo
                        </Radio>
                    </RadioGroup>
                </div>
                <div>
                    <h4>horizontal</h4>
                    <RadioGroup label="Select your favorite city" orientation="horizontal" >
                        <Radio value="buenos-aires">Buenos Aires</Radio>
                        <Radio value="sydney">Sydney</Radio>
                        <Radio value="san-francisco">San Francisco</Radio>
                        <Radio value="london">London</Radio>
                        <Radio value="tokyo">Tokyo</Radio>
                    </RadioGroup>
                </div>
                <div>
                    <h4>controlled</h4>
                    <RadioGroup label="Select your favorite city" value={selected} onValueChange={setSelected} >
                        <Radio value="buenos-aires">Buenos Aires</Radio>
                        <Radio value="sydney">Sydney</Radio>
                        <Radio value="san-francisco">San Francisco</Radio>
                        <Radio value="london">London</Radio>
                        <Radio value="tokyo">Tokyo</Radio>
                    </RadioGroup>
                    <p className="text-default-500 text-small">Selected: {selected}</p>
                </div>
            </div>
        </>
    )
};
