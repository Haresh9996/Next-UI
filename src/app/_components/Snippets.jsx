"use client"
import { Snippet } from "@nextui-org/react";
import { FaCopy } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";

export default function Snippets() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Snippets</h2>
            <div className="flex flex-wrap gap-4 my-4 border p-3">
                <Snippet>npm install @nextui-org/react</Snippet>
            </div>
            <div className="flex flex-wrap gap-4 my-4 border p-3">
                <h4>without copy button and custom symbol</h4>
                <Snippet symbol="@" hideCopyButton>npm install @nextui-org/react</Snippet>
            </div>
            <div className="flex flex-wrap gap-4 my-4 border p-3">
                <h4>custom copy button and checkIcon </h4>
                <Snippet symbol="#" copyIcon={<FaCopy />} checkIcon={<FaCheckDouble />} >npm install @nextui-org/react</Snippet>
            </div>
            <div className="flex flex-wrap gap-4 my-4 border p-3">
                <h4>Multiline</h4>
                <Snippet>
                    <span>npm install @nextui-org/react</span>
                    <span>yarn add @nextui-org/react</span>
                    <span>pnpm add @nextui-org/react</span>
                </Snippet>
            </div>
            <div className="flex flex-wrap gap-4 my-4 border p-3">
                <h4>size</h4>
                <Snippet size="sm">npm install @nextui-org/react</Snippet>
                <Snippet size="md">npm install @nextui-org/react</Snippet>
                <Snippet size="lg">npm install @nextui-org/react</Snippet>
            </div>
            <div className="flex flex-wrap gap-4 my-4 border p-3">
                <h4>colors</h4>
                <Snippet color="primary">npm install @nextui-org/react</Snippet>
                <Snippet color="secondary">npm install @nextui-org/react</Snippet>
                <Snippet color="success">npm install @nextui-org/react</Snippet>
                <Snippet color="warning">npm install @nextui-org/react</Snippet>
                <Snippet color="danger">npm install @nextui-org/react</Snippet>
                <Snippet color="default">npm install @nextui-org/react</Snippet>
            </div>
            <div className="flex flex-wrap gap-4 my-4 border p-3">
                <h4>varient</h4>
                <Snippet variant="bordered" color="primary">npm install @nextui-org/react</Snippet>
                <Snippet variant="flat" color="secondary">npm install @nextui-org/react</Snippet>
                <Snippet variant="shadow" color="success">npm install @nextui-org/react</Snippet>
                <Snippet variant="solid" color="warning">npm install @nextui-org/react</Snippet>
            </div>
        </>
    )
};
