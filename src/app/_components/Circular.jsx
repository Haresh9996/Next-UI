"use client"
import { CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Circular() {

    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => (v >= 100 ? 0 : v + 10));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Circular progress</h2>
            <div>
                <CircularProgress area-label="loading..." />
                <CircularProgress label="loading..." />
                <h4 className="border-2">size</h4>
                <div className="flex gap-3">
                    <CircularProgress label="sm" size="sm" />
                    <CircularProgress label="md" size="md" />
                    <CircularProgress label="lg" size="lg" />
                </div>
                <h4 className="border-2">colors</h4>
                <div className="flex gap-3">
                    <CircularProgress label="default" color="default" />
                    <CircularProgress label="primary" color="primary" />
                    <CircularProgress label="secondary" color="secondary" />
                    <CircularProgress label="success" color="success" />
                    <CircularProgress label="warning" color="warning" />
                    <CircularProgress label="danger" color="danger" />
                </div>
                <CircularProgress label="Loading..." size="lg" value={value} color="warning" showValueLabel={true} />
            </div>


        </>
    )
};
