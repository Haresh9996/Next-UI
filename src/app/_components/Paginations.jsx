import { Pagination } from "@nextui-org/react";

export default function Paginations() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Pagination </h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <Pagination total={5} initialPage={3} />
                </div>
                <div>
                    <h4>with cotrols</h4>
                    <Pagination showControls total={5} initialPage={3} />
                </div>
                <div>
                    <h4>with cotrols loop</h4>
                    <Pagination loop showControls total={5} initialPage={3} />
                </div>
                <div>
                    <h4>compact</h4>
                    <Pagination isCompact loop showControls total={10} initialPage={3} />
                </div>
                <div>
                    <h4>custom style</h4>
                    <Pagination total={10} classNames={{
                            wrapper: "gap-0 overflow-visible h-8 rounded border border-divider",
                            item: "w-8 h-8 text-small rounded-none bg-transparent",
                            cursor:
                                "bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
                        }}
                    />
                </div>
                <div>
                    <h4>size</h4>
                    <Pagination size="sm" total={5} initialPage={3} />
                    <Pagination size="md" total={5} initialPage={3} />
                    <Pagination size="lg" total={5} initialPage={3} />
                </div>
                <div>
                    <h4>color</h4>
                    <Pagination color="danger" total={5} initialPage={3} />
                    <Pagination color="default" total={5} initialPage={3} />
                    <Pagination color="primary" total={5} initialPage={3} />
                    <Pagination color="secondary" total={5} initialPage={3} />
                    <Pagination color="success" total={5} initialPage={3} />
                    <Pagination color="warning" total={5} initialPage={3} />
                </div>
                <div>
                    <h4>varient</h4>
                    <Pagination variant="bordered" total={5} initialPage={3} />
                    <Pagination variant="faded" total={5} initialPage={3} />
                    <Pagination variant="flat" total={5} initialPage={3} />
                    <Pagination variant="light" total={5} initialPage={3} />
                </div>
            </div >
        </>
    )
};
