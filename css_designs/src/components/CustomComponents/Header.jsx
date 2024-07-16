import React, { useState } from 'react'
import { Button } from '../ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'

const Header = () => {
    const [active, setActive] = useState("button")
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams);
    const navigate = useNavigate()
    const navItems = [
        {
            name: 'Button',
            slug: "/",
        },
        {
            name: "Box-Shadow",
            slug: "/boxshadows",
        },
        {
            name: "Card",
            slug: "/card",
        },
        {
            name: "Checkbox",
            slug: "/checkbox",
        },
        {
            name: "Dropdown",
            slug: "/dropdown",
        },
        {
            name: "Forms",
            slug: "/forms",
        },
        {
            name: "Input-fields",
            slug: "/inputfields",
        },
        {
            name: "Radio",
            slug: "/radio",
        },
        {
            name: "Loading-Spinners",
            slug: "/loadingspinners",
        },
        {
            name: "Text",
            slug: "/texts",
        },
        {
            name: "Toggle Switches",
            slug: "/toggle",
        },
    ]
    return (
        <>
            <Sheet side="left">
                <SheetTrigger><Button>Designs</Button></SheetTrigger>
                <SheetContent side="left" className="overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle className="border-b-2 pb-6 text-3xl font-bold text-green-600">Designs</SheetTitle>
                        <SheetDescription>
                            <ul className='flex my-4'>
                                <li className='flex flex-col gap-4 overflow-y-auto'>
                                    {
                                        navItems?.map((item, index) => (
                                            <>
                                                <NavLink
                                                    to={item.slug}
                                                    key={index}
                                                    onClick={() => navigate(`${item.slug}`)}
                                                    className={({ isActive }) => (isActive ? 
                                                        'bg-black text-white p-2 rounded-lg font-bold text-base'
                                                        :
                                                        'text-slate-500 p-2 hover:bg-black hover:text-white hover:rounded-lg transition-all duration-100 font-bold text-base')}
                                                >
                                                    {item.name} Designs
                                                </NavLink>
                                            </>
                                        ))

                                    }
                                </li>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>

    )
}

export default Header