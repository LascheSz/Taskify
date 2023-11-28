import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 bg-white flex items-center justify-between px-4">
            <div className="flex items-center">
                <Logo />
                <span className="ml-1 hidden md:inline">
                    Taskify
                </span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4 pr-2">
                <Button size="sm" variant="outline" asChild>
                    <Link href="/sign-in" className="whitespace-nowrap">
                        Anmelden
                    </Link>
                </Button>
                <Button size="sm" asChild>
                    <Link href="/sign-up" className="whitespace-nowrap">
                        Registrieren
                    </Link>
                </Button>
            </div>
    </div>
    );
};
