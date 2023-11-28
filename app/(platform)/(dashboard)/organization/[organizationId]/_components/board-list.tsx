import { User2 } from "lucide-react";

export const BoardList = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center font-semibold text-lg text-neutral-700">
                <User2 className="h-6 w-6 mr-2" />
                Your boards
            </div>
            <div
            role="button"
            className="aspect-video relative bg-muted rounded-sm 
            flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition
            p-4 w-56" // Padding, maximale Breite
            >
                <p className="text-sm">Create new board</p>
                <span className="text-xs">5 Remaining</span>
            </div>
        </div>
    );
};
