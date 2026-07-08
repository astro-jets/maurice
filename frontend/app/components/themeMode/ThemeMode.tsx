""
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
const DarkModeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            type="button"
            className="cursor-pointer text-[#37352f] dark:text-[#ffffffcf] hover:bg-hover-background active:bg-active-background p-1.5 [transition:background_20ms_ease-in,_color_0.15s] dark:pl-8"
            title="Toggle theme"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <BsMoon size={20} className="hidden dark:block" />
            <BsSun size={20} className="block dark:hidden" />
        </button>
    );
};

export default DarkModeSwitcher;
