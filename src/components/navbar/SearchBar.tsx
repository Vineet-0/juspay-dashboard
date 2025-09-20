import { type RootState } from "../../store";
import { useState, useRef, useEffect } from "react";
import { PiCommand, PiMagnifyingGlass } from "react-icons/pi";
import { useSelector } from "react-redux";

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const theme = useSelector((state: RootState) => state.theme);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.metaKey && event.key === "/") {
            event.preventDefault();
            inputRef.current?.focus();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div
            className={`transition-all duration-600 w-[180px] ${
                isFocused ? "flex-1" : ""
            } ${
                theme === "dark"
                    ? "bg-[#ffffff]/[5%] text-white"
                    : "bg-[#1c1c1c]/[5%] text-black"
            } hover:grow rounded-lg shadow px-[8px] py-[4px] flex items-center gap-1 `}
        >
            <PiMagnifyingGlass
                className={`${
                    theme === "dark"
                        ? "text-[#FFFFFF]/[20%]"
                        : "text-[#1C1C1C]/[20%]"
                }`}
                size={16}
            />
            <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                className={`text-[14px] font-[400] ${
                    theme === "dark"
                        ? "text-[#FFFFFF] placeholder-white"
                        : "text-[#1C1C1C] placeholder-black"
                } bg-transparent outline-none w-full`}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <PiCommand
                className={`${
                    theme === "dark"
                        ? "text-[#FFFFFF]/[20%]"
                        : "text-[#1C1C1C]/[20%]"
                } text-[14px] font-[400]`}
                size={20}
            />
            <div
                className={`${
                    theme === "dark"
                        ? "text-[#FFFFFF]/[20%]"
                        : "text-[#1C1C1C]/[20%]"
                } text-[14px] font-[400]`}
            >
                /
            </div>
        </div>
    );
};

export default SearchBar;
