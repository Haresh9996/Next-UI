import { Avatar, AvatarGroup } from "@nextui-org/react";
import { MdLinkedCamera } from "react-icons/md";

export default function Avatars() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Avatar</h2>
            <div className="flex gap-4 my-4">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />

                <Avatar name="james" />

            </div>
            <div className="flex items-center gap-4">
                <div>
                    <Avatar isDisabled src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>Disabled</p>
                </div>
                <div>
                    <Avatar isBordered src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>Bordered</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div>
                    <Avatar size="sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>size &quot;sm&quot;</p>
                </div>
                <div>
                    <Avatar size="md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>size &quot;md&quot;</p>
                </div>
                <div>
                    <Avatar size="lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>size &quot;lg&quot;</p>
                </div>
                <div>
                    <Avatar size="lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" className="w-20 h-20" />
                    <p>tailwind classes</p>
                </div>
            </div>
            <div className="flex items-center gap-4 my-4">
                <div>
                    <Avatar isBordered radius="full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>Radius &quot;full&quot;</p>
                </div>
                <div>
                    <Avatar isBordered radius="sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>Radius &quot;sm&quot;</p>
                </div>
                <div>
                    <Avatar isBordered radius="md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>Radius &quot;md&quot;</p>
                </div>
                <div>
                    <Avatar isBordered radius="lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>Radius &quot;lg&quot;</p>
                </div>
            </div>
            <div className="flex items-center gap-4 my-4">
                <div>
                    <Avatar isBordered color="default" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>color &quot;default&quot;</p>
                </div>
                <div>
                    <Avatar isBordered color="primary" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>color &quot;primary&quot;</p>
                </div>
                <div>
                    <Avatar isBordered color="secondary" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>color &quot;secondary&quot;</p>
                </div>
                <div>
                    <Avatar isBordered color="success" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>color &quot;success&quot;</p>
                </div>
                <div>
                    <Avatar isBordered color="warning" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>color &quot;warning&quot;</p>
                </div>
                <div>
                    <Avatar isBordered color="danger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>color &quot;danger&quot;</p>
                </div>
            </div>
            <div className="flex items-center gap-4 my-4">
                <div>
                    <Avatar isBordered showFallback name="james" color="danger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>show fallback name</p>
                </div>
                <div>
                    <Avatar isBordered showFallback color="danger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <p>show fallback</p>
                </div>
                <div>
                    <Avatar isBordered showFallback fallback={<MdLinkedCamera className="animate-pulse" />} color="danger" src="" />
                    <p>custom fallback</p>
                </div>

            </div>
            <div className="flex items-center gap-4 my-4">
                <AvatarGroup isBordered color="secondary" max={4}>

                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />

                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />

                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAIEB6re2lGWr8hM2Su98PiT318ykfkssc2aK4PLrbQ&s" />

                </AvatarGroup>
            </div>

        </>
    )
}
