'use server'
import { revalidatePath } from "next/cache"

export async function handleUpdatePath(path) {
    revalidatePath(path)
}