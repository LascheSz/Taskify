"use client";


import { FormButton } from "./form-buttons";
import { createBoard } from "@/actions/create-board";
import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            console.log(data, "SUCCESS!")
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;

        execute({ title });
    }
    
    return (
        <form action={onSubmit} className="flex flex-row items-center">
            <div className="flex flex-col space-x-2 items-center">
                <FormInput 
                id="title"
                errors = {fieldErrors} />
            </div>
            <div className="ml-2">
                <FormButton />
            </div>
    </form>
    );
};