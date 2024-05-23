"use client"
import { Switch } from "@nextui-org/react";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Switches() {
    const [isSelected, setIsSelected] = useState(true)
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Switch</h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <h4>size</h4>
                    <Switch defaultSelected size="sm">Small</Switch>
                    <Switch defaultSelected size="md">Medium</Switch>
                    <Switch defaultSelected size="lg">Large</Switch>
                </div>
                <div>
                    <h4>colors</h4>
                    <Switch color="default" defaultSelected size="md">default</Switch>
                    <Switch defaultSelected color="primary" size="md">primary</Switch>
                    <Switch defaultSelected color="secondary" size="md">secondary</Switch>
                    <Switch defaultSelected color="success" size="md">success</Switch>
                    <Switch defaultSelected color="warning" size="md">warning</Switch>
                    <Switch defaultSelected color="danger" size="md">danger</Switch>
                </div>
                <div>
                    <h4>mode</h4>
                    <Switch defaultSelected size="lg" color="secondary" thumbIcon={({ isSelected, className }) => isSelected ? (<FaSun className={className} />) : (<FaMoon className={className} />)} >
                        Dark mode
                    </Switch>

                    <Switch isSelected={isSelected} onValueChange={setIsSelected} size="lg"
                        color="success"
                        startContent={<FaSun />}
                        endContent={<FaMoon />} >
                        {isSelected? "Dark Mode": "Night Mode"}
                    </Switch>
                </div>
            </div>
        </>
    )
};
