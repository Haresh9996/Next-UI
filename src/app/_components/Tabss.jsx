"use client"
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { RiGalleryLine } from "react-icons/ri";
import { MdLibraryMusic } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

export default function Tabss() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">tab </h2>
            <div className="flex flex-wrap gap-4">
                <div className="flex w-full flex-col">
                    <Tabs aria-label="Options">
                        <Tab key="photos" title="Photos">
                            <Card>
                                <CardBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="music" title="Music">
                            <Card>
                                <CardBody>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="videos" title="Videos">
                            <Card>
                                <CardBody>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
                <div className="flex w-full flex-col">
                    <h4>disabledKeys</h4>
                    <Tabs aria-label="Options" disabledKeys={["photos"]}>
                        <Tab key="photos" title="Photos">
                            <Card>
                                <CardBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="music" title="Music">
                            <Card>
                                <CardBody>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="videos" title="Videos">
                            <Card>
                                <CardBody>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
                    <h4>radius, color & varient</h4>
                <div className="flex w-full flex-wrap">
                    <Tabs aria-label="Options" radius="full" color="secondary" variant="bordered" disabledKeys={["photos"]}>
                        <Tab key="photos" title="Photos">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Tab>
                        <Tab key="music" title="Music">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Tab>
                        <Tab key="videos" title="Videos">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Tab>
                    </Tabs>
                    <Tabs aria-label="Options" radius="lg" color="warning" variant="solid" disabledKeys={["photos"]}>
                        <Tab key="photos" title="Photos">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Tab>
                        <Tab key="music" title="Music">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Tab>
                        <Tab key="videos" title="Videos">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Tab>
                    </Tabs>
                    <Tabs aria-label="Options" radius="none" color="danger" variant="underlined" disabledKeys={["photos"]}>
                        <Tab key="photos" title="Photos">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Tab>
                        <Tab key="music" title="Music">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Tab>
                        <Tab key="videos" title="Videos">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Tab>
                    </Tabs>
                </div>
                <div className="flex w-full flex-col">
                    <div className="flex w-full flex-col">
                        <Tabs aria-label="Options" color="primary" variant="bordered">
                            <Tab key="photos" title={
                                <div className="flex items-center space-x-2">
                                    <RiGalleryLine />
                                    <span>Photos</span>
                                </div>} >
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Tab>
                            <Tab key="music" title={
                                <div className="flex items-center space-x-2">
                                    <MdLibraryMusic />
                                    <span>Music</span>
                                </div>} >
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Tab>
                            <Tab key="videos" title={
                                <div className="flex items-center space-x-2">
                                    <FaVideo />
                                    <span>Videos</span>
                                </div>} >
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Tab>
                        </Tabs>
                    </div>
                </div>

            </div>

        </>
    )
};
