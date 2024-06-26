import { Divider } from "@nextui-org/react";

export default function Dividers() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Divider</h2>
            <div className="max-w-md">
                <div className="space-y-1">
                    <h4 className="text-medium font-medium">NextUI Components</h4>
                    <p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>
                </div>
                <Divider className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-small">
                    <div>Blog</div>
                    <Divider  orientation="vertical" />
                    <div>Docs</div>
                    <Divider orientation="vertical" />
                    <div>Source</div>
                </div>
            </div>
        </>
    )
};
