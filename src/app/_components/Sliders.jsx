import { Slider } from "@nextui-org/react";

export default function Sliders() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Slider </h2>
            <div className="flex flex-wrap gap-4">
                <div className="w-full">
                    <Slider label="Temperature" step={0.01} maxValue={1} minValue={0} defaultValue={0.4} className="max-w-md" />
                </div>
                <div className="w-full">
                    <h4>size</h4>
                    <Slider size="sm" label="Temperature" step={0.01} maxValue={1} minValue={0} defaultValue={0.4} className="max-w-md" />
                    <Slider size="md" label="Temperature" step={0.01} maxValue={1} minValue={0} defaultValue={0.4} className="max-w-md" />
                    <Slider size="lg" label="Temperature" step={0.01} maxValue={1} minValue={0} defaultValue={0.4} className="max-w-md" />
                </div>
                <h4>verticle</h4>
                <div className="w-full flex gap-6 flex-wrap h-72">
                    <Slider orientation="vertical" size="sm" label="Temperature" step={0.01} maxValue={1} minValue={0} defaultValue={0.4} className="max-w-md" />
                    <Slider orientation="vertical" size="md" label="Temperature" step={0.01} maxValue={1} minValue={0} defaultValue={0.4} className="max-w-md" />
                    <Slider orientation="vertical" size="lg" label="Temperature" step={0.01} maxValue={1} minValue={0} defaultValue={0.4} className="max-w-md" />
                </div>
                <div className="w-full">
                    <h4>steps</h4>
                    <Slider size="sm" color="secondary" label="Temperature" showSteps step={10} maxValue={100} minValue={0} defaultValue={30} className="max-w-md" />
                    <Slider size="md" color="foreground" label="Temperature" showSteps step={10} maxValue={100} minValue={0} defaultValue={40} className="max-w-md" />
                    <Slider size="lg" color="warning" label="Temperature" showSteps step={10} maxValue={100} minValue={0} defaultValue={50} className="max-w-md" />
                </div>
                <div className="w-full">
                    <h4>Range</h4>
                    <Slider label="Price Range" step={50} minValue={0} maxValue={1000} defaultValue={[100, 500]} formatOptions={{ style: "currency", currency: "USD" }} className="max-w-md" />
                </div>
            </div>
        </>
    )
};
