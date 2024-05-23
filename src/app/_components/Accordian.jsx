"use client"
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import { IoExpand } from "react-icons/io5";
import { BsArrowUpShort } from "react-icons/bs";

export default function Accordians() {

    const defaultContent =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci eligendi optio repellat, saepe obcaecati temporibus.";

    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Accordian</h2>
            <div className="flex gap-4 flex-wrap">
                <Accordion className="max-w-md">
                    <AccordionItem key="1" aria-label="Accordion first" title="Accordion first">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion second" title="Accordion second">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion third" title="Accordion third">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>

                <Accordion className="max-w-md">
                    <AccordionItem key="1" aria-label="Accordion first" subtitle="press to expend" title="Accordion first">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" subtitle="press to expend" aria-label="Accordion second" title="Accordion second">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" subtitle="press to expend" aria-label="Accordion third" title="Accordion third">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
                <Accordion selectionMode="multiple" className="max-w-md">
                    <AccordionItem key="1" aria-label="Accordion first" subtitle="Multiple Selection" title="Accordion first">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" subtitle="Multiple Selection" aria-label="Accordion second" title="Accordion second">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" subtitle="Multiple Selection" aria-label="Accordion third" title="Accordion third">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
                <Accordion isCompact selectionMode="multiple" className="max-w-md">
                    <AccordionItem key="1" aria-label="Accordion first" subtitle="Compact style" title="Accordion first">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" subtitle="Compact style" aria-label="Accordion second" title="Accordion second">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" subtitle="Compact style" aria-label="Accordion third" title="Accordion third">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
            </div>
            <h4 className="border-2 my-4">Varient</h4>
            <div className="flex flex-wrap gap-4">
                <Accordion variant="bordered" className="max-w-md">
                    <AccordionItem key="1" aria-label="Accordion first" subtitle="bordered" title="Accordion first">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" subtitle="bordered" aria-label="Accordion second" title="Accordion second">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" subtitle="bordered" aria-label="Accordion third" title="Accordion third">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
                <Accordion variant="light" className="max-w-md">
                    <AccordionItem key="1" aria-label="Accordion first" subtitle="light" title="Accordion first">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" subtitle="light" aria-label="Accordion second" title="Accordion second">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" subtitle="light" aria-label="Accordion third" title="Accordion third">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
                <Accordion variant="shadow" className="max-w-md">
                    <AccordionItem key="1" aria-label="Accordion first" subtitle="shadow" title="Accordion first">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" subtitle="shadow" aria-label="Accordion second" title="Accordion second">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" subtitle="shadow" aria-label="Accordion third" title="Accordion third">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
                <Accordion variant="splitted" className="max-w-md">
                    <AccordionItem key="1" aria-label="Accordion first" subtitle="splitted" title="Accordion first">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" subtitle="splitted" aria-label="Accordion second" title="Accordion second">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" subtitle="splitted" aria-label="Accordion third" title="Accordion third">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="flex flex-wrap gap-4">
                <Accordion defaultExpandedKeys={"3"} disabledKeys={"1"} className="max-w-md">
                    <AccordionItem key="1" aria-label="Accordion first" subtitle="default disabled" title="Accordion first">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion second" title="Accordion second">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" subtitle="default expand" aria-label="Accordion third" title="Accordion third">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
                <Accordion className="max-w-md">
                    <AccordionItem startContent={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&usqp=CAU" isBordered color="secondary" />} indicator={({ isOpen }) => (isOpen ? <BsArrowUpShort /> : <IoExpand />)} key="1" aria-label="Accordion first" subtitle="default disabled" title="Accordion first">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem startContent={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&usqp=CAU" isBordered color="secondary" />} indicator={({ isOpen }) => (isOpen ? <BsArrowUpShort /> : <IoExpand />)} key="2" aria-label="Accordion second" title="Accordion second">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem startContent={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&usqp=CAU" isBordered color="secondary" />} indicator={({ isOpen }) => (isOpen ? <BsArrowUpShort /> : <IoExpand />)} key="3" subtitle="default expand" aria-label="Accordion third" title="Accordion third">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>

            </div>
        </>
    )
};
