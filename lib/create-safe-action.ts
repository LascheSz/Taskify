import { z } from "zod";

export type FieldErrors<T> = {
    [K in keyof T]?: string[];
};

export type ActionState<TInput, TOutput> = {
    fieldErrors?: FieldErrors<TInput>;
    errors?: string | null;
    data?: TOutput;
};

export const createSafeAction = <TInput, TOutput> (
    schema: z.Schema<TInput>,
    handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
    return async (input: TInput): Promise<ActionState<TInput, TOutput>> => {
        const validationResult = schema.safeParse(input);
        if (!validationResult.success) {
            return {
                fieldErrors: validationResult.error.flatten().fieldErrors as FieldErrors<TInput>
            };
        }

        return await handler(validationResult.data);
    };
}