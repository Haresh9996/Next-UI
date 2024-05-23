import { Spinner } from "@nextui-org/react";

export default function Spinners() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Spinner</h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <h4>size</h4>
                    <Spinner size="sm" />
                    <Spinner size="md" />
                    <Spinner size="lg" />
                </div>
                <div>
                    <h4>colors</h4>
                    <div className="flex gap-4 flex-wrap">
                        <Spinner labelColor="current" label="current" color="current" />
                        <Spinner labelColor="danger" label="danger" color="danger" />
                        <Spinner labelColor="default" label="default" color="default" />
                        <Spinner labelColor="primary" label="primary" color="primary" />
                        <Spinner labelColor="secondary" label="secondary" color="secondary" />
                        <Spinner labelColor="success" label="success" color="success" />
                        <Spinner labelColor="warning" label="warning" color="warning" />
                        <Spinner labelColor="current" label="white" color="white" />
                    </div>
                </div>
            </div>
        </>
    )
};
