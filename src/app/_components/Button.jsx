"use client"
import { useState } from "react";
import { Button } from "@nextui-org/react"
import { MdSendTimeExtension } from "react-icons/md";
import { PiShootingStarThin } from "react-icons/pi";
import { MdLinkedCamera } from "react-icons/md";

import React from "react";
import { ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
// import { ChevronDownIcon } from './ChevronDownIcon';


export default function Buttons() {

    const [selectedOption, setSelectedOption] = useState(new Set(["merge"]));


    const descriptionsMap = {
        merge:
            "All commits from the source branch are added to the destination branch via a merge commit.",
        squash:
            "All commits from the source branch are added to the destination branch as a single commit.",
        rebase:
            "All commits from the source branch are added to the destination branch individually.",
    };

    const labelsMap = {
        merge: "Create a merge commit",
        squash: "Squash and merge",
        rebase: "Rebase and merge",
    }

    // Convert the Set to an Array and get the first value.
    const selectedOptionValue = Array.from(selectedOption)[0];


    return (
        <>
            <div className="space-x-1">
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Buttons</h2>

                <Button color="primary" variant="bordered" endContent={<MdSendTimeExtension />}>primary bordered</Button>
                <Button color="secondary" variant="faded">secondary faded</Button>
                <Button color="warning" variant="ghost" isLoading>warning ghost</Button>
                <Button color="success" variant="flat">success flat</Button>
                <Button color="warning" isIconOnly variant="shadow" aria-label="Take a Photo"> <MdLinkedCamera /> </Button>
                <Button color="danger" variant="light" isLoading spinner={
                    <svg className="animate-spin h-5 w-5 text-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" >
                        <circle className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4" />
                        <path className="opacity-75"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            fill="currentColor" />
                    </svg>
                }>danger light</Button>
                <Button color="success" variant="shadow">success shadow</Button>


                <Button color="secondary" variant="solid" startContent={<PiShootingStarThin />}>secondary solid</Button>
            </div>

            <div className=" space-x-4 mt-4">

                <ButtonGroup variant="ghost" color="secondary">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>

                <ButtonGroup variant="flat">
                    <Button>{labelsMap[selectedOptionValue]}</Button>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Button isIconOnly>
                                <ChevronDownIcon />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label="Merge options"
                            selectedKeys={selectedOption}
                            selectionMode="single"
                            onSelectionChange={setSelectedOption}
                            className="max-w-[300px]"
                        >
                            <DropdownItem key="merge" description={descriptionsMap["merge"]}>
                                {labelsMap["merge"]}
                            </DropdownItem>
                            <DropdownItem key="squash" description={descriptionsMap["squash"]}>
                                {labelsMap["squash"]}
                            </DropdownItem>
                            <DropdownItem key="rebase" description={descriptionsMap["rebase"]}>
                                {labelsMap["rebase"]}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </ButtonGroup>
            </div>
        </>
    )
};


export const ChevronDownIcon = () => (
    <svg fill="none" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="currentColor" />
    </svg>
);