import { renderHook, act } from "@testing-library/react";
import { useIsMobile } from "../use-mobile";

describe("useIsMobile", () => {
    const originalInnerWidth = window.innerWidth;

    beforeEach(() => {
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 1024,
        });
    });

    afterEach(() => {
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: originalInnerWidth,
        });
    });

    it("should return false for desktop width", () => {
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 1024,
        });

        const { result } = renderHook(() => useIsMobile());
        expect(result.current).toBe(false);
    });

    it("should return true for mobile width", () => {
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 500,
        });

        const { result } = renderHook(() => useIsMobile());
        expect(result.current).toBe(true);
    });

    it("should update when window is resized", () => {
        const mockMatchMedia = jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }));

        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: mockMatchMedia,
        });

        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 1024,
        });

        const { result } = renderHook(() => useIsMobile());
        expect(result.current).toBe(false);

        act(() => {
            Object.defineProperty(window, "innerWidth", {
                writable: true,
                configurable: true,
                value: 500,
            });

            const mockEvent = new Event("change");
            window.dispatchEvent(mockEvent);
        });
    });

    it("should handle boundary case at 768px", () => {
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 768,
        });

        const { result } = renderHook(() => useIsMobile());
        expect(result.current).toBe(false);
    });

    it("should handle boundary case at 767px", () => {
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 767,
        });

        const { result } = renderHook(() => useIsMobile());
        expect(result.current).toBe(true);
    });
});
