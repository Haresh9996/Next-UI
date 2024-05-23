"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/react";
import { useMemo, useState } from "react";

export default function DropDowns() {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["create"]));

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const items = [
        {
            key: "new",
            label: "New file",
        },
        {
            key: "copy",
            label: "Copy link",
        },
        {
            key: "edit",
            label: "Edit file",
        },
        {
            key: "delete",
            label: "Delete file",
        }
    ];

    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl my-3">Auto complete Dropdown</h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <h4>default</h4>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered">Operations</Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem key="create">Create</DropdownItem>
                            <DropdownItem key="read">Read</DropdownItem>
                            <DropdownItem key="update">Update</DropdownItem>
                            <DropdownItem key="delete">Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                    <h4>Dynamic</h4>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered" >
                                Open Menu
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Dynamic Actions" disabledKeys={["edit"]} items={items}>
                            {(item) => (
                                <DropdownItem
                                    key={item.key}
                                    color={item.key === "delete" ? "danger" : "default"}
                                    className={item.key === "delete" ? "text-danger" : ""} >
                                    {item.label}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                    <h4>Events</h4>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered">Operations</Button>
                        </DropdownTrigger>
                        <DropdownMenu onClick={(key) => alert(key)}>
                            <DropdownItem key="create">Create</DropdownItem>
                            <DropdownItem key="read">Read</DropdownItem>
                            <DropdownItem key="update">Update</DropdownItem>
                            <DropdownItem key="delete">Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                    <h4>varient</h4>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered">Operations</Button>
                        </DropdownTrigger>
                        <DropdownMenu onClick={(key) => alert(key)} variant="bordered">
                            <DropdownItem key="create">Create</DropdownItem>
                            <DropdownItem key="read">Read</DropdownItem>
                            <DropdownItem key="update">Update</DropdownItem>
                            <DropdownItem key="delete">Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered">Operations</Button>
                        </DropdownTrigger>
                        <DropdownMenu onClick={(key) => alert(key)} variant="faded">
                            <DropdownItem key="create">Create</DropdownItem>
                            <DropdownItem key="read">Read</DropdownItem>
                            <DropdownItem key="update">Update</DropdownItem>
                            <DropdownItem key="delete">Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                    <h4>colors</h4>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button color="secondary" variant="bordered">Operations</Button>
                        </DropdownTrigger>
                        <DropdownMenu onClick={(key) => alert(key)} color="secondary">
                            <DropdownItem key="create">Create</DropdownItem>
                            <DropdownItem key="read">Read</DropdownItem>
                            <DropdownItem key="update">Update</DropdownItem>
                            <DropdownItem key="delete">Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button color="danger" variant="bordered">Operations</Button>
                        </DropdownTrigger>
                        <DropdownMenu onClick={(key) => alert(key)} color="danger">
                            <DropdownItem key="create">Create</DropdownItem>
                            <DropdownItem key="read">Read</DropdownItem>
                            <DropdownItem key="update">Update</DropdownItem>
                            <DropdownItem key="delete">Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                    <h4>single selection</h4>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button color="danger" variant="bordered">{selectedValue}</Button>
                        </DropdownTrigger>
                        <DropdownMenu disallowEmptySelection selectionMode="single" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys} color="danger">
                            <DropdownItem key="create">Create</DropdownItem>
                            <DropdownItem key="read">Read</DropdownItem>
                            <DropdownItem key="update">Update</DropdownItem>
                            <DropdownItem key="delete">Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                    <h4>multiple selection & backdrop transparent</h4>
                    <Dropdown backdrop="transparent">
                        <DropdownTrigger>
                            <Button color="danger" variant="bordered">{selectedValue}</Button>
                        </DropdownTrigger>
                        <DropdownMenu disallowEmptySelection closeOnSelect={false} selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys} color="danger">
                            <DropdownItem key="create">Create</DropdownItem>
                            <DropdownItem key="read">Read</DropdownItem>
                            <DropdownItem key="update">Update</DropdownItem>
                            <DropdownItem key="delete">Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                    <h4>description & backdrop qpaque</h4>
                    <Dropdown backdrop="opaque">
                        <DropdownTrigger>
                            <Button color="danger" variant="bordered">actions</Button>
                        </DropdownTrigger>
                        <DropdownMenu color="danger">
                            <DropdownItem description="create file" key="create">Create</DropdownItem>
                            <DropdownItem description="read file" key="read">Read</DropdownItem>
                            <DropdownItem description="edit file" key="update">Update</DropdownItem>
                            <DropdownItem description="delete file" key="delete">Delete</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div>
                    <h4>section & backdrop blur</h4>
                    <Dropdown backdrop="blur">
                        <DropdownTrigger>
                            <Button color="danger" variant="bordered">actions</Button>
                        </DropdownTrigger>
                        <DropdownMenu >
                            <DropdownSection title={"Actions"} showDivider>
                                <DropdownItem description="create file" key="create">Create</DropdownItem>
                                <DropdownItem description="read file" key="read">Read</DropdownItem>
                                <DropdownItem description="edit file" key="update">Update</DropdownItem>
                            </DropdownSection>
                            <DropdownSection color="danger" title={"remove"}>
                                <DropdownItem description="delete file" key="delete">Delete</DropdownItem>
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

        </>
    )
};
