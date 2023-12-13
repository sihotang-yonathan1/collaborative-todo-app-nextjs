import { redirect } from "next/navigation"
import { addUser } from "../api/v1/user/user"

export default function RegisterPage() {
    async function registerAccount(formData: FormData){
        "use server"
        const username = formData.get('username')?.toString()
        const password = formData.get('password')?.toString()
        const role = formData.get('role')?.toString()
        await addUser(username ?? "", password ?? "", role ?? "user")
        redirect('/task_group')
    }
    return (
        <div className="flex flex-col justify-center h-screen items-center bg-slate-400">
            <form className="flex flex-col bg-white m-2 p-2" method="POSt" action={registerAccount}>
                <div className="flex w-full justify-center">
                    <h3 className="font-semibold">Register</h3>
                </div>
                {/* Username */}
                <div className="p-2">
                    <div>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div>
                        <input type="text" name="username" id="username" className="border-2 p-2" />
                    </div>
                </div>

                {/* Password */}
                <div className="p-2">
                    <div>
                        <label htmlFor="password" className="capitalize">password</label>
                    </div>
                    <div className="">
                        <input 
                            type="text" 
                            name="password" 
                            id="password"
                            className="border-2 p-2" 
                            />
                    </div>
                </div>
                <div className="mx-2">
                    <div>
                        <label htmlFor="role">Role</label>
                    </div>
                    <select name="role" id="role" className="px-2">
                        <option value="user">user</option>
                        <option value="manager">manager</option>
                        <option value="worker">worker</option>
                    </select>
                </div>

                {/* Submit */}
                <div className="flex w-full justify-center my-2">
                    <button className="bg-green-500 p-2 text-white hover:bg-green-700">Register</button>
                </div>
            </form>
        </div>
    )
}