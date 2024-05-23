import { Button, Link, link } from "@nextui-org/react";
import { FaLink } from "react-icons/fa";

export default function Links() {
    return (
        <>
            <h2 className="p-4 bg-content2-foreground text-white text-3xl">Kbd</h2>
            <div className="flex flex-wrap gap-4 my-4">
                <Link href="#" >Default</Link>
                <Link href="#" isDisabled >Disabled</Link>
                <Link href="#" size="sm" >size sm</Link>
                <Link href="#" size="md" >size md</Link>
                <Link href="#" size="lg" >size lg</Link>
                <Link href="#" color="primary" >color primary</Link>
                <Link href="#" color="secondary" >color secondary</Link>
                <Link href="#" color="success" >color success</Link>
                <Link href="#" color="warning" >color warning</Link>
                <Link href="#" color="danger" >color danger</Link>
                <Link href="#" color="foreground" >color foreground</Link>
                <Link href="#" underline="none" >underline none</Link>
                <Link href="#" underline="active" >underline active</Link>
                <Link href="#" underline="always" >underline always</Link>
                <Link href="#" underline="focus" >underline focus</Link>
                <Link href="#" underline="hover" >underline hover</Link>
                <Link href="#" anchorIcon={<FaLink/>} showAnchorIcon >custom anchorIcon</Link>
                <Link href="#" showAnchorIcon isBlock color="primary" >Block on hover</Link>
                <Link href="#" showAnchorIcon isBlock color="secondary" >Block on hover</Link>
                <Button as={Link} showAnchorIcon variant="bordered" color="secondary" href="#" >Button as link (Polymorphic)</Button>
                
            </div>
        </>
    )
};
