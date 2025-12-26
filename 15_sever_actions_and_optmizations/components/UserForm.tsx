// import { createUser } from "@/actions"

const UserForm = () => {
  async function createUser(formData: FormData) {
    "use server"

    const name = formData.get("name") as string

    console.log("User name:", name)
  }

  return (
    <form
      action={createUser}
      className="flex flex-col gap-4 rounded-lg bg-gray-900 p-6 text-white max-w-sm"
    >
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        required
        className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500 transition"
      >
        Submit
      </button>
    </form>
  )
}

export default UserForm
