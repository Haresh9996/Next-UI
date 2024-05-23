"use client"
import { Button, Card, CardBody, CardFooter, CardHeader, Slider } from "@nextui-org/react";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRepeat, FaShuffle } from "react-icons/fa6";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { FaPauseCircle } from "react-icons/fa";

export default function Cards() {
    const [liked, setLiked] = useState(false);

    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Cards</h2>
            <div className="flex gap-8 items-center mt-6">
                <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">Daily Mix</p>
                        <small className="text-default-500">12 Tracks</small>
                        <h4 className="font-bold text-large">Frontend Radio</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <img
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="https://nextui.org/images/hero-card-complete.jpeg"
                            width={270}
                        />
                    </CardBody>
                </Card>

                <Card isFooterBlurred radius="lg" className="border-none" >
                    <img alt="Woman listing to music" className="object-cover" height={200} src="https://nextui.org/images/hero-card.jpeg" width={200} />

                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Available soon.</p>
                        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                            Notify me
                        </Button>
                    </CardFooter>
                </Card>


                <Card isBlurred className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]" shadow="sm" >
                    <CardBody>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                            <div className="relative col-span-6 md:col-span-4">
                                <img alt="Album cover" className="object-cover" height={200} shadow="md" src="https://nextui.org/images/album-cover.png" width="100%" /> 
                            </div>

                            <div className="flex flex-col col-span-6 md:col-span-8">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-0">
                                        <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                                        <p className="text-small text-foreground/80">12 Tracks</p>
                                        <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
                                    </div>
                                    <Button isIconOnly className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2" radius="full" variant="light" onPress={() => setLiked((v)  => !v)} >
                                        <CiHeart className={liked ? "[&>path]:stroke-transparent" : ""} fill={liked ? "currentColor" : "none"} />
                                    </Button>
                                </div>

                                <div className="flex flex-col mt-3 gap-1">
                                    <Slider aria-label="Music progress" classNames={{
                                            track: "bg-default-500/30",
                                            thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                                        }}
                                        color="foreground"
                                        defaultValue={33}
                                        size="sm" />
                                    <div className="flex justify-between">
                                        <p className="text-small">1:23</p>
                                        <p className="text-small text-foreground/50">4:32</p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-center">
                                    <Button isIconOnly className="data-[hover]:bg-foreground/10" radius="full" variant="light" >
                                        <FaRepeat className="text-foreground/80" />
                                    </Button>
                                    <Button isIconOnly className="data-[hover]:bg-foreground/10" radius="full" variant="light" >
                                        <MdSkipPrevious />
                                    </Button>
                                    <Button isIconOnly className="w-auto h-auto data-[hover]:bg-foreground/10" radius="full" variant="light" >
                                        <FaPauseCircle size={54} />
                                    </Button>
                                    <Button isIconOnly className="data-[hover]:bg-foreground/10" radius="full" variant="light" >
                                        <MdSkipNext />
                                    </Button>
                                    <Button isIconOnly className="data-[hover]:bg-foreground/10" radius="full" variant="light" >
                                        <FaShuffle className="text-foreground/80" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    )
};
