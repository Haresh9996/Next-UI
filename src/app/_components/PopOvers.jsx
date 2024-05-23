import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

export default function PopOvers() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Popover </h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <Popover placement="bottom" showArrow={true}>
                        <PopoverTrigger>
                            <Button>Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small font-bold">Popover Content</div>
                                <div className="text-tiny">This is the popover content</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <h4>colors</h4>
                    <Popover color="danger" placement="bottom" showArrow={true}>
                        <PopoverTrigger>
                            <Button color="danger">Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small font-bold">Popover Content</div>
                                <div className="text-tiny">This is the popover content</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Popover color="foreground" placement="bottom" showArrow={true}>
                        <PopoverTrigger>
                            <Button color="foreground">Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small font-bold">Popover Content</div>
                                <div className="text-tiny">This is the popover content</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Popover color="secondary" placement="bottom" showArrow={true}>
                        <PopoverTrigger>
                            <Button color="secondary">Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small font-bold">Popover Content</div>
                                <div className="text-tiny">This is the popover content</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <h4>placement</h4>
                    <Popover color="danger" placement="top" showArrow={true}>
                        <PopoverTrigger>
                            <Button color="danger">Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small font-bold">Popover Content</div>
                                <div className="text-tiny">This is the popover content</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Popover color="foreground" placement="top-start" backdrop="opaque" showArrow={true}>
                        <PopoverTrigger>
                            <Button color="foreground">Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small font-bold">Popover Content</div>
                                <div className="text-tiny">This is the popover content</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Popover color="secondary" placement="bottom-start" backdrop="blur" showArrow={true}>
                        <PopoverTrigger>
                            <Button color="secondary">Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-small font-bold">Popover Content</div>
                                <div className="text-tiny">This is the popover content</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </>
    )
};
