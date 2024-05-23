"use client"
import { BreadcrumbItem } from "@nextui-org/react";

export default function BreadCrumbs() {
    return(
        <>
        <h2 className="p-4 bg-content2-foreground text-white text-3xl">Bread Crumbs</h2>
            <BreadCrumbs>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Music</BreadcrumbItem>
                <BreadcrumbItem>Artist</BreadcrumbItem>
                <BreadcrumbItem>Album</BreadcrumbItem>
                <BreadcrumbItem>Song</BreadcrumbItem>
            </BreadCrumbs>
        </>
    )
};
