"use client"
import { Avatar, Badge, Button, Switch } from "@nextui-org/react";
import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";

export default function Badges() {
    const [invisible, setInvisible] = useState(false);

    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Badge</h2>
            <div className="my-6">
                <div className="flex gap-3 items-center">
                    <Badge content="5" size="sm" color="primary">
                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    </Badge>
                    <Badge content="5" size="md" color="primary">
                        <Avatar radius="md" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
                    </Badge>
                    <Badge content="5" size="lg" color="primary">
                        <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                    </Badge>
                </div>
                <div className="flex gap-3 items-center mt-4">
                    <div>
                        <Badge content="5" size="sm" color="secondary">
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        </Badge>
                        <p>color &quot;secondary&quot;</p>
                    </div>
                    <div>
                        <Badge content="5" size="md" color="success">
                            <Avatar radius="md" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
                        </Badge>
                        <p>color &quot;success&quot;</p>
                    </div>
                    <div>
                        <Badge content="5" size="lg" color="warning">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                        <p>color &quot;warning&quot;</p>
                    </div>
                    <div>
                        <Badge content="5" size="lg" color="danger">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                        <p>color &quot;danger&quot;</p>
                    </div>
                    <div>
                        <Badge content="5" size="lg" color="default">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                        <p>color &quot;default&quot;</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center mt-4">
                    <div>
                        <Badge content="5" size="sm" variant="faded" color="secondary">
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        </Badge>
                        <p>variant &quot;faded&quot;</p>
                    </div>
                    <div>
                        <Badge content="5" variant="flat" size="md" color="success">
                            <Avatar radius="md" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
                        </Badge>
                        <p>variant &quot;flat&quot;</p>
                    </div>
                    <div>
                        <Badge content="5" variant="shadow" size="lg" color="warning">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                        <p>variant &quot;shadow&quot;</p>
                    </div>
                    <div>
                        <Badge content="5" variant="solid" size="lg" color="danger">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                        <p>variant &quot;solid&quot;</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center mt-4">
                    <div>
                        <Badge content="5" size="sm" placement="top-right" variant="faded" color="secondary">
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        </Badge>
                        <p>placement &quot;top-right&quot;</p>
                    </div>
                    <div>
                        <Badge content="5" placement="top-left" variant="flat" size="md" color="success">
                            <Avatar radius="md" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
                        </Badge>
                        <p>placement &quot;top-left&quot;</p>
                    </div>
                    <div>
                        <Badge content="5" placement="bottom-left" variant="shadow" size="lg" color="warning">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                        <p>placement &quot;bottom-left&quot;</p>
                    </div>
                    <div>
                        <Badge content="5" placement="bottom-right" variant="solid" size="lg" color="danger">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                        <p>placement &quot;bottom-right&quot;</p>
                    </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                    <div>
                        <Badge content="500" shape="rectangle" variant="shadow" size="lg" color="warning">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                        <p>shape &quot;rectangle&quot;</p>
                    </div>
                    <div>
                        <Badge content="50" shape="circle" variant="solid" size="lg" color="danger">
                            <Avatar radius="full" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                        <p>shape &quot;circle&quot;</p>
                    </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                    <div>
                        <Badge content="5" color="warning" isInvisible={invisible}>
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                    </div>
                    <div>
                        <Badge content="5" color="danger" isInvisible={!invisible}>
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                    </div>
                    <div>
                        <Switch isSelected={!invisible} onValueChange={(value) => setInvisible(!value)}>toggle Badges</Switch>
                    </div>
                    <p className="border-2 p-3">conditional display Badges</p>
                </div>
                <div className="flex gap-3 items-center mt-4">
                    <div>
                        <Badge content="" color="success">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                    </div>
                    <div>
                        <Badge content="new" color="danger">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                    </div>
                    <div>
                        <Badge content={<IoIosNotifications />} color="danger">
                            <Avatar radius="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </Badge>
                    </div>
                </div>

                <div className="flex gap-3 items-center mt-4">
                    <div>
                        <Badge content="99+" color="success">
                            <Button color="danger" isIconOnly area-label="more than 99 notifications">
                                <IoIosNotifications />
                            </Button>
                        </Badge>
                    </div>
                </div>
            </div>
        </>
    );
}
