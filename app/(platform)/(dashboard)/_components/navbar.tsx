import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Plus } from "lucide-react";
import { Sidebar } from "./sidebar";
import { MobileSidebar } from "./mobile-sidbar";
import { FormPopover } from "@/components/form/form-popover";


export const Navbar = async () => {

    const getGreeting = () => {
        const hour = new Date().getHours();
        if(hour >= 5 && hour < 12 ) return "Guten Morgen,";
        if (hour >= 12 && hour < 18) return "Guten Tag,";
        if (hour >= 18 && hour < 22) return "Guten Abend,";
        return "Gute Nacht,";

    }
    const getEmoji = () => {
        const hour = new Date().getHours();
        if(hour >= 5 && hour < 12 ) return "🌞";
        if (hour >= 12 && hour < 18) return "🌞";
        if (hour >= 18 && hour < 22) return "🌙";
        return "🌚";
    }

    const user = await currentUser();
    const { userId } = auth();

    return (
        <nav className="fixed z-50 top-1 px-4 w-full border-b shadow-sm 
        bg-white flex items-center ">
            <MobileSidebar />
            <div className="flex items-center gap-x-4">
                <div className="hide md:flex w-18">
                    <Logo />
                </div>
                <FormPopover align="start" side="bottom" sideOffset={18}>
                    <Button variant = "primary" size="default" className="rounded-sm hidden md:block h-auto py-1.5 px-2">
                        Create
                    </Button>
                </FormPopover>
                <FormPopover>
                    <Button variant = "primary" size="sm" className="rounded-sm block md:hidden">
                        <Plus className="h-4 w-4" />
                    </Button>
                </FormPopover>
            </div>
            <div className="flex-grow text-center hidden md:block text-lg">
                {getGreeting()} {user?.username} {getEmoji()}
            </div>
            <div className="ml-auto flex items-center gap-x-2 text-lg">
                <OrganizationSwitcher 
                hidePersonal
                afterCreateOrganizationUrl="/organization/:id"
                afterLeaveOrganizationUrl="/select-org"
                afterSelectOrganizationUrl="/organization/:id"
                appearance={{
                    elements: {
                        rootbox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                    },
                }}
                />
                <UserButton afterSignOutUrl="/"
                appearance={{
                    elements: {
                        avatarBox: {
                            height: 40,
                            width: 40,
                            paddingBottom: 0,
                            marginTop: 0,
                        }
                    }
                }}
                />
            </div>
        </nav>
    );
};