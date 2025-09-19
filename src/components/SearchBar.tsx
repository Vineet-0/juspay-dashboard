import { type RootState } from "../store";
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
            style={{
                backgroundColor: `${
                    theme === "dark" ? "rgba(256, 256, 256, 0.05)" : "#f7f9fb"
                }`,
            }}
            className={`transition-all duration-300 ${
                isFocused ? "flex-1" : "w-64"
            } ${
                theme === "dark" ? "text-white" : "text-black"
            } rounded-lg shadow px-2 py-1 flex items-center gap-1 `}
        >
            <PiMagnifyingGlass size={20} className="opacity-50" />
            <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                className={`${
                    theme === "dark" ? "placeholder-white" : "placeholder-black"
                } bg-transparent outline-none flex-1 opacity-100 placeholder-opacity-50`}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <PiCommand size={20} className="opacity-50" />
            <div className="opacity-50">/</div>
        </div>
    );
};

export default SearchBar;
