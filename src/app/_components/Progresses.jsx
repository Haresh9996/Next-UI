import { Progress } from "@nextui-org/react";

export default function Progresses() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Progress </h2>
            <div className="">
                <h4>sizes</h4>
                <div className="flex flex-col gap-6 w-full max-w-md">
                    <Progress size="sm" aria-label="Loading..." value={30} />
                    <Progress size="md" aria-label="Loading..." value={40} />
                    <Progress size="lg" aria-label="Loading..." value={50} />
                </div>
                <h4>Striped</h4>
                <div className="flex flex-col gap-6 w-full max-w-md">
                    <Progress size="lg" aria-label="Loading..." value={50} isStriped />
                </div>
                <h4>Indeterminate</h4>
                <div className="flex flex-col gap-6 w-full max-w-md">
                    <Progress size="lg" aria-label="Loading..." value={60} isIndeterminate />
                </div>
                <h4>with value</h4>
                <div className="flex flex-col gap-6 w-full max-w-md">
                    <Progress label="Monthly expenses" size="sm" value={4000} maxValue={10000} color="warning" formatOptions={{ style: "currency", currency: "ARS" }} showValueLabel={true} className="max-w-md" />
                </div>
                <h4>sizes</h4>
                <div className="flex flex-col gap-6 w-full max-w-md">
                    <Progress color="default" aria-label="Loading..." value={70} />
                    <Progress color="primary" aria-label="Loading..." value={80} />
                    <Progress color="secondary" aria-label="Loading..." value={90} />
                    <Progress color="success" aria-label="Loading..." value={80} />
                    <Progress color="warning" aria-label="Loading..." value={70} />
                    <Progress color="danger" aria-label="Loading..." value={60} />
                </div>
            </div>
        </>
    )
};
