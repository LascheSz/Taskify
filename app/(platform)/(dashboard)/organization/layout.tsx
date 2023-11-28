import { Input } from "@/components/ui/input";
import { Sidebar } from "../_components/sidebar";

const OrganizationLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="pt-20 md:pt-24 px-1 max-w-10xl 2xl:max-w-screen-xl">
            <div className="flex gap-x-7">
                <div className="w-80 shrink-0 hidden md:block">
                    <Sidebar />
                </div>
                {children}
            </div>
        </main>
    );
};
export default OrganizationLayout;