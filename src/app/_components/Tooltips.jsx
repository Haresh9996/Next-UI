"use client"
import { Button, Tooltip } from "@nextui-org/react";

export default function Tooltips() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Tool tip </h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <Tooltip showArrow={true} content="I am a tooltip">
                        <Button>Hover me</Button>
                    </Tooltip>
                </div>
                <div>
                    <h4>colors</h4>
                    <div className="space-x-4">
                        <Tooltip color="danger" showArrow={true} content="I am a tooltip">
                            <Button color="danger">Hover me</Button>
                        </Tooltip>
                        <Tooltip color="default" showArrow={true} content="I am a tooltip">
                            <Button color="default">Hover me</Button>
                        </Tooltip>
                        <Tooltip color="foreground" showArrow={true} content="I am a tooltip">
                            <Button color="foreground">Hover me</Button>
                        </Tooltip>
                        <Tooltip color="primary" showArrow={true} content="I am a tooltip">
                            <Button color="primary">Hover me</Button>
                        </Tooltip>
                        <Tooltip color="secondary" showArrow={true} content="I am a tooltip">
                            <Button color="secondary">Hover me</Button>
                        </Tooltip>
                        <Tooltip color="success" showArrow={true} content="I am a tooltip">
                            <Button color="success">Hover me</Button>
                        </Tooltip>
                        <Tooltip color="warning" showArrow={true} content="I am a tooltip">
                            <Button color="warning">Hover me</Button>
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <h4>placement</h4>
                    <div className="space-x-4">
                        <Tooltip placement="bottom" showArrow={true} content="I am a tooltip">
                            <Button>Hover me</Button>
                        </Tooltip>
                        <Tooltip placement="top" showArrow={true} content="I am a tooltip">
                            <Button>Hover me</Button>
                        </Tooltip>
                        <Tooltip placement="top-start" showArrow={true} content="I am a tooltip">
                            <Button>Hover me</Button>
                        </Tooltip>
                        <Tooltip placement="top-end" showArrow={true} content="I am a tooltip">
                            <Button>Hover me</Button>
                        </Tooltip>
                        <Tooltip showArrow={true} placement="bottom-end" content="I am a tooltip">
                            <Button>Hover me</Button>
                        </Tooltip>
                        <Tooltip showArrow={true} placement="bottom-start" content="I am a tooltip">
                            <Button>Hover me</Button>
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <h4>offset</h4>
                    <div className="space-x-4">
                        <Tooltip offset={15} showArrow={true} content="I am a tooltip">
                            <Button>offset 15</Button>
                        </Tooltip>
                        <Tooltip offset={-5} showArrow={true} content="I am a tooltip">
                            <Button>offset -5</Button>
                        </Tooltip>
                        <Tooltip showArrow={true} content="I am a tooltip">
                            <Button>default</Button>
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <h4>delay</h4>
                    <div className="space-x-4">
                        <Tooltip delay={2000} showArrow={true} content="I am a tooltip">
                            <Button>open delay</Button>
                        </Tooltip>
                        <Tooltip closeDelay={2000} showArrow={true} content="I am a tooltip">
                            <Button>close delay</Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
};
