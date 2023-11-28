"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";

export const Info = () => {
    const { organization, isLoaded} = useOrganization();

    if(!isLoaded) {
        return (
            <span>
                <Info.Skeleton />
            </span>
        );
    }

    return (
        <div className="flex items-center gap-x-4">
            <div className="w-[60px] h-[60px] relative-top">
                <Image
                width={60}
                height={60}
                layout="fixed"
                src= {organization?.imageUrl!}
                alt= "Organization"
                className="object-cover rounded-md"
                />
            </div>
            <div className="space-ce">
                <span className="font-bold text-xl">
                    {organization?.name}
                </span>
                <div className="flex items-center text-muted-foreground">
                    <CreditCard className="h-3 w-3 mr-1" />
                    Free
                </div>
            </div>
        </div>
    );
};

Info.Skeleton = function SkeletonInfo() {
    return (
        <div className="flex items-center gap-x-4">
            <div className="w-[60] h-[60] relative">
                <Skeleton className="w-full h-full absolute"/>
            </div>
            <div className="space-y-2">
                <Skeleton className="h-10 w-[100px]" />
                <div className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-[100px]" />
                </div>
            </div>
        </div>
    );
};