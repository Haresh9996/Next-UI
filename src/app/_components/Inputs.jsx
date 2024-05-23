import { Input } from "@nextui-org/react";

export default function Inputs() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Input</h2>

            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-4">
                <Input type="email" label="Email" />
                <Input type="email" label="Email" placeholder="Enter your email" />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-4">
                <Input isDisabled type="email" label="Email" placeholder="Disabled" />
                <Input isReadOnly type="email" label="Email" placeholder="Read only" />
                <Input isRequired type="email" label="Email" placeholder="Required" />
            </div>
            <h4>Size & Color</h4>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-4">
                <Input size="sm" color="danger" type="email" label="Email" placeholder="sm - danger" />
                <Input type="email" size="md" color="primary" label="Email" placeholder="md primary" />
                <Input type="email" size="lg" color="secondary" label="Email" placeholder="lg secondary" />
                <Input type="email" size="lg" color="success" label="Email" placeholder="lg success" />
                <Input type="email" size="lg" color="warning" label="Email" placeholder="lg warning" />
            </div>
            <h4>Varient</h4>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-4">

                <Input type="email" variant="bordered" size="lg" label="Email" placeholder="bordered" />
                <Input type="email" variant="faded" size="lg" label="Email" placeholder="faded" />
                <Input type="email" variant="flat" size="lg" label="Email" placeholder="flat" />
                <Input type="email" variant="underlined" size="lg" label="Email" placeholder="underlined" />
            </div>
            <h4>Radius</h4>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-4">
                <Input type="email" radius="full" size="lg" label="Email" placeholder="full" />
                <Input type="email" radius="lg" size="lg" label="Email" placeholder="lg" />
                <Input type="email" radius="md" size="lg" label="Email" placeholder="md" />
                <Input type="email" radius="sm" size="lg" label="Email" placeholder="sm" />
                <Input type="email" radius="none" size="lg" label="Email" placeholder="none" />
            </div>
            <h4>label placement</h4>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-4">
                <Input type="email" labelPlacement="inside" radius="full" size="lg" label="Email" />
                <Input type="email" labelPlacement="outside" radius="lg" size="lg" label="Email" />
                <Input type="email" labelPlacement="outside-left" radius="md" size="lg" label="Email" />
            </div>
            <h6>with PlaceHolder placement</h6>

            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-4">
                <Input type="email" labelPlacement="inside" radius="full" size="lg" label="Email" placeholder="inside" />
                <Input type="email" labelPlacement="outside" radius="lg" size="lg" label="Email" placeholder="outside" />
                <Input type="email" labelPlacement="outside-left" radius="md" size="lg" label="Email" placeholder="outside-left" />
            </div>
        </>
    )
};
