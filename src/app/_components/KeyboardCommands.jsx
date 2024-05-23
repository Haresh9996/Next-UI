import { Kbd } from "@nextui-org/react";

export default function KeyboardCommands() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Kbd</h2>
            <div className="flex flex-wrap gap-4 my-4">
                <div>
                    <h4>ctrl + K</h4>
                    <Kbd keys={["command"]}>K</Kbd>
                </div>
                <div>
                    <h4>ctrl + K</h4>
                    <Kbd keys={["command"]}>K</Kbd>
                </div>
                <div>
                    <h4>clrt + shift + N</h4>
                    <Kbd keys={["command", "shift"]}>N</Kbd>
                </div>
                <div>
                <h4>alt + ctrl + P</h4>
                    <Kbd keys={["option", "command"]}>P</Kbd>
                </div>
            </div>
        </>
    )
};
