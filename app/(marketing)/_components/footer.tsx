import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
    return (
        <div className="fixed inset-x-0 bottom-0 p-4 bg-slate-100 border-t">
            <div className="max-w-screen-2xl flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                    <Logo />
                    <span className="ml-2">Taskify</span>
                </div>
                <div className="flex flex-row justify-between space-x-4">
                    <Button size="sm" variant="ghost" asChild>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                        <a href="/terms-of-service">Terms of Service</a>
                    </Button>
                </div>
            </div>
        </div>
    );
};
