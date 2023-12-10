import { redirect } from "next/navigation";
import { checkLogin} from "../api/v1/auth/auth";

export default function LoginPage(){
    async function checkLoginWithFormData(formData: FormData){
        "use server"
        const username = formData.get('username')?.toString()
        const password = formData.get('password')?.toString()
    
        let response = await checkLogin(username ?? "", password ?? "")
        if (response !== null){
            redirect('/task_group')
        }
    
    }
    return (
        <div className="flex flex-col justify-center h-screen items-center">
            <form className="bg-sky-300 flex flex-col p-2" action={checkLoginWithFormData}>
                <h3 className="font-semibold self-center">Login</h3>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    className="bg-orange-300 p-2 m-2"
                    placeholder="Username"/>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    className="bg-orange-200 p-2 m-2"
                    placeholder="Password"/>
                <div className="flex justify-center">
                    <button className="p-2 bg-sky-500">Login</button>
                </div>
            </form>
        </div>
    )
}