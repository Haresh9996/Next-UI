import { Code } from "@nextui-org/react";

export default function Codes() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Code</h2>
            <div className="flex flex-col gap-3">
                <Code size="sm">npm install react-icons</Code>
                <Code size="md">npm install react-icons</Code>
                <Code size="lg">npm install react-icons</Code>
                <Code size="lg" color="danger">npm install react-icons</Code>
                <Code size="lg" color="default">npm install react-icons</Code>
                <Code size="lg" color="primary">npm install react-icons</Code>
                <Code size="lg" color="secondary">npm install react-icons</Code>
                <Code size="lg" color="success">npm install react-icons</Code>
                <Code size="lg" color="warning">npm install react-icons</Code>
            </div>
        </>
    )
};
