import { FormPopover } from "@/components/form/form-popover";
import { Hint } from "@/components/hint";
import { HelpCircle, User2 } from "lucide-react";

export const BoardList = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center font-semibold text-lg text-neutral-700">
                <User2 className="h-6 w-6 mr-2" />
                Your boards
            </div>
            <FormPopover sideOffset={10} side="right">
                <div
                role="button"
                className="aspect-video relative bg-muted rounded-sm 
                flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition
                p-4 w-56" // Padding, maximale Breite
                >
                    <span className="text-sm">
                        Create new board
                    </span>
                    <span className="text-xs">
                        5 Remaining
                    </span>
                    <Hint 
                    sideOffset={40}
                    description={`
                    Es stehen 5 Kostenlose Boars für den Basic Plan zur verfügung. 
                    Mache ein Upgrade um mehr Boards zu erstellen
                    `}>
                        <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px"/>
                    </Hint>
                </div>
            </FormPopover>
        </div>
    );
};
