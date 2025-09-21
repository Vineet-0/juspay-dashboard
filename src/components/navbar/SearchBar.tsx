"use client";

import * as React from "react";
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { useSelector } from "react-redux";
import { type RootState } from "@/store";
import { PiCommand, PiMagnifyingGlass } from "react-icons/pi";

export default function SearchBar() {
    const [open, setOpen] = React.useState(false);
    const theme = useSelector((state: RootState) => state.theme);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <>
            <div
                className="transition-all duration-600 w-[180px] bg-[#1C1C1C]/[5%] dark:bg-[#FFFFFF]/[5%] text-[#1C1C1C] dark:text-[#FFFFFF] rounded-lg shadow px-[8px] py-[4px] flex items-center gap-1"
                onClick={() => setOpen(true)}
            >
                <PiMagnifyingGlass
                    className="text-[#1C1C1C]/[20%] dark:text-[#FFFFFF]/[20%]"
                    size={16}
                />
                <input
                    type="text"
                    placeholder="Search"
                    className="text-[14px] font-[400] text-[#1C1C1C] dark:text-[#FFFFFF] placeholder-[#1C1C1C] dark:placeholder-[#FFFFFF] bg-transparent outline-none w-full"
                />
                <PiCommand
                    className="text-[#1C1C1C]/[20%] dark:text-[#FFFFFF]/[20%] text-[14px] font-[400]"
                    size={20}
                />
                <div className="text-[#1C1C1C]/[20%] dark:text-[#FFFFFF]/[20%] text-[14px] font-[400]">
                    /
                </div>
            </div>
            <CommandDialog
                open={open}
                onOpenChange={setOpen}
                className={theme === "dark" ? "dark" : ""}
                showCloseButton={false}
            >
                <CommandInput placeholder="Type a command or search..." />
                <CommandList className="scrollbar-custom-light dark:scrollbar-custom-dark">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <Calendar />
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Smile />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                            <Calculator />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard />
                            <span>Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-[9px] right-[14px] p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 text-black dark:text-white"
                >
                    ✕
                </button>
            </CommandDialog>
        </>
    );
}
