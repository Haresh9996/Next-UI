"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useState } from "react";

export default function Modals() {

    // Manage individual state for each modal
    const [isDefaultOpen, setDefaultOpen] = useState(false);
    const [isSmallOpen, setSmallOpen] = useState(false);
    const [isMediumOpen, setMediumOpen] = useState(false);
    const [isLargeOpen, setLargeOpen] = useState(false);
    const [isFullOpen, setFullOpen] = useState(false);

    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Modal </h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <h4>default</h4>
                    <Button onPress={() => setDefaultOpen(true)}>Open Modal</Button>
                    <Modal isOpen={isDefaultOpen} onOpenChange={setDefaultOpen} placement="auto">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                            dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                            Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                            Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                            proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Action
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
                <div>
                    <h4>size</h4>
                    <Button onPress={() => setSmallOpen(true)}>size sm</Button>
                    <Modal isOpen={isSmallOpen} size="sm" onOpenChange={setSmallOpen} placement="bottom">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                            dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                            Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                            Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                            proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Action
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                    <Button onPress={() => setMediumOpen(true)}>size md with backdrop opaque</Button>
                    <Modal isOpen={isMediumOpen} size="md" onOpenChange={setMediumOpen} backdrop="opaque" placement="center">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                            dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                            Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                            Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                            proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Action
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                    <Button onPress={() => setLargeOpen(true)}>size lg with backdrop blur</Button>
                    <Modal isOpen={isLargeOpen} size="lg" onOpenChange={setLargeOpen} placement="top" backdrop="blur">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                            dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                            Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                            Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                            proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Action
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                    <Button onPress={() => setFullOpen(true)}>size full</Button>
                    <Modal isOpen={isFullOpen} size="full" onOpenChange={setFullOpen} placement="bottom-center">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                            dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                            Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                            Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                            proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={onClose}>
                                            Action
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
            </div>
        </>
    )
};
