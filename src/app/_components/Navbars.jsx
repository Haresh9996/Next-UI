"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useState } from "react";

export default function Navbars() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Navbar </h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <h4>Static</h4>
                    <Navbar isBlurred>
                        <NavbarBrand>
                            <p className="font-bold text-inherit">Sulok Digital</p>
                        </NavbarBrand>
                        <NavbarContent className="hidden sm:flex gap-4" justify="center">
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Features
                                </Link>
                            </NavbarItem>
                            <NavbarItem isActive>
                                <Link href="#" aria-current="page">
                                    Customers
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Integrations
                                </Link>
                            </NavbarItem>
                        </NavbarContent>
                        <NavbarContent justify="end">
                            <NavbarItem className="hidden lg:flex">
                                <Link href="#">Login</Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Button as={Link} color="primary" href="#" variant="flat">
                                    Sign Up
                                </Button>
                            </NavbarItem>
                        </NavbarContent>
                    </Navbar>
                </div>
                <div>
                    <h4>Hide on Scroll</h4>
                    <Navbar shouldHideOnScroll>
                        <NavbarBrand>
                            <p className="font-bold text-inherit">Sulok Digital</p>
                        </NavbarBrand>
                        <NavbarContent className="hidden sm:flex gap-4" justify="center">
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Features
                                </Link>
                            </NavbarItem>
                            <NavbarItem isActive>
                                <Link href="#" aria-current="page">
                                    Customers
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Integrations
                                </Link>
                            </NavbarItem>
                        </NavbarContent>
                        <NavbarContent justify="end">
                            <NavbarItem className="hidden lg:flex">
                                <Link href="#">Login</Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Button as={Link} color="primary" href="#" variant="flat">
                                    Sign Up
                                </Button>
                            </NavbarItem>
                        </NavbarContent>
                    </Navbar>
                </div>
                <div>
                    <h4>toggle menu</h4>
                    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
                        <NavbarContent>
                            <NavbarMenuToggle
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                className="sm:hidden"
                            />
                            <NavbarBrand>
                                <p className="font-bold text-inherit">ACME</p>
                            </NavbarBrand>
                        </NavbarContent>

                        <NavbarContent className="hidden sm:flex gap-4" justify="center">
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Features
                                </Link>
                            </NavbarItem>
                            <NavbarItem isActive>
                                <Link href="#" aria-current="page">
                                    Customers
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Integrations
                                </Link>
                            </NavbarItem>
                        </NavbarContent>
                        <NavbarContent justify="end">
                            <NavbarItem className="hidden lg:flex">
                                <Link href="#">Login</Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Button as={Link} color="primary" href="#" variant="flat">
                                    Sign Up
                                </Button>
                            </NavbarItem>
                        </NavbarContent>
                        <NavbarMenu>
                            {menuItems.map((item, index) => (
                                <NavbarMenuItem key={`${item}-${index}`}>
                                    <Link
                                        color={
                                            index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                        }
                                        className="w-full"
                                        href="#"
                                        size="lg"
                                    >
                                        {item}
                                    </Link>
                                </NavbarMenuItem>
                            ))}
                        </NavbarMenu>
                    </Navbar>
                </div>
                <div>
                    <h4>with Avatar</h4>
                    <Navbar>
                        <NavbarBrand>
                            <p className="font-bold text-inherit">ACME</p>
                        </NavbarBrand>

                        <NavbarContent className="hidden sm:flex gap-4" justify="center">
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Features
                                </Link>
                            </NavbarItem>
                            <NavbarItem isActive>
                                <Link href="#" aria-current="page" color="secondary">
                                    Customers
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Integrations
                                </Link>
                            </NavbarItem>
                        </NavbarContent>

                        <NavbarContent as="div" justify="end">
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="secondary"
                                        name="Jason Hughes"
                                        size="sm"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-semibold">Signed in as</p>
                                        <p className="font-semibold">zoey@example.com</p>
                                    </DropdownItem>
                                    <DropdownItem key="settings">My Settings</DropdownItem>
                                    <DropdownItem key="team_settings">Team Settings</DropdownItem>
                                    <DropdownItem key="analytics">Analytics</DropdownItem>
                                    <DropdownItem key="system">System</DropdownItem>
                                    <DropdownItem key="configurations">Configurations</DropdownItem>
                                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                    <DropdownItem key="logout" color="danger">
                                        Log Out
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarContent>
                    </Navbar>
                </div>
            </div>
        </>
    )
};
