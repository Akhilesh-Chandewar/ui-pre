"use server"

export async function createUser(
    prevState: unknown,
    formData: FormData
) {
    const name = formData.get("name") as string

    console.log("User name:", name)

    return { success: true }
}
