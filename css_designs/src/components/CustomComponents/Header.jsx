import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const navigate = useNavigate();
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const navItems = [
        { name: 'Button', slug: "/" },
        { name: "Box-Shadow", slug: "/boxshadows" },
        { name: "Card", slug: "/card" },
        { name: "Checkbox", slug: "/checkbox" },
        { name: "Dropdown", slug: "/dropdown" },
        { name: "Forms", slug: "/forms" },
        { name: "Input-fields", slug: "/inputfields" },
        { name: "Radio", slug: "/radio" },
        { name: "Loading-Spinners", slug: "/loadingspinners" },
        { name: "Text", slug: "/texts" },
        { name: "Toggle Switches", slug: "/toggle" },
    ];

    const handleNavClick = (slug) => {
        navigate(slug);
        setIsSheetOpen(false); // Close the sheet
    };

    return (
        <div className='border-b-2 border-orange-500 flex justify-start items-center h-14 px-4'>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <div>
                <IoMenu onClick={() => setIsSheetOpen(true)} fontSize={40} className={`border-2 border-orange-500 p-1 rounded-md`} />
                </div>
                </SheetTrigger>
                <SheetContent side="left" className="overflow-y-auto no-scrollbar">
                    <SheetHeader>
                        <SheetTitle className="border-b-2 pb-6 text-3xl font-bold text-orange-600">Designs</SheetTitle>
                        <SheetDescription>
                            <div className='flex my-4'>
                                <div className='flex flex-col gap-4 overflow-y-auto w-full'>
                                    {navItems.map((item, index) => (
                                        <NavLink
                                            to={item.slug}
                                            key={index}
                                            onClick={() => handleNavClick(item.slug)}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'bg-black text-white p-2 rounded-lg font-bold text-base'
                                                    : 'text-slate-500 p-2 hover:bg-black hover:text-white hover:rounded-lg transition-all duration-100 font-bold text-base'
                                            }
                                        >
                                            {item.name} Designs
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Header;