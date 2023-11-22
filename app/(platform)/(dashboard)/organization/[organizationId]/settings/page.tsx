import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
    return (
        <div>
            <div className="w-full ">
                <OrganizationProfile 
                appearance={{
                    elements: {
                        rootBox: {
                            boxShadow: "none",
                            with:"100%"
                    },
                    card: {
                        border: "1px solid #e5e5e5",
                        boxShadow: "none",
                        width: "100%"
                    }
                }
                }}
                />
            </div>
        </div>
    );
};
export default SettingsPage;