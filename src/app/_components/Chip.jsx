"use client"
import { useState } from "react";
import { Chip } from "@nextui-org/react";

export default function Chips() {
    const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry", "Watermelon", "Orange"]);

    const handleClose = (fruitToRemove) => {
        setFruits(fruits.filter(fruit => fruit !== fruitToRemove));
        if (fruits.length === 1) {
            setFruits(initialFruits);
        }
    };
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">CheckBox</h2>
            <div className="flex gap-2 my-4">
                <Chip onClose={() => console.log("close")}>Chip</Chip>
                <Chip onClose={() => console.log("close")} variant="bordered"> Chip </Chip>
            </div>

            <div>
            <h4 className="border-2">List with close buttons</h4>
                <div className="flex gap-2">
                    {fruits.map((fruit, index) => (
                        <Chip key={index} onClose={() => handleClose(fruit)} variant="flat">
                            {fruit}
                        </Chip>
                    ))}
                </div>
            </div>
        </>
    )
};
