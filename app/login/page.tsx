import { redirect } from "next/navigation";
import { checkLogin} from "../api/v1/auth/auth";
import { cookies } from "next/headers";

export default function LoginPage(){
    async function checkLoginWithFormData(formData: FormData){
        "use server"
        const username = formData.get('username')?.toString()
        const password = formData.get('password')?.toString()
    
        let response = await checkLogin(username ?? "", password ?? "")
        if (response !== null){
            // WARNING: this method is not really safe
            // as the cookie SHOULD NOT have credential info
            // this method only for workaround to get auth accross pages
            const currentCookie = cookies()
            currentCookie.set("username", username ?? "")
            
            redirect('/task_group')
        }
    
    }
    return (
        <div className="flex flex-col justify-center h-screen items-center bg-bg-login bg-cover">
            <form className="bg-transparent flex flex-col p-2" action={checkLoginWithFormData}>
                <h3 className="font-semibold text-white text-3xl ml-3 text-center">BifiMerah</h3>
                <div className="mx-3 my-3">
                    <div>
                        <p className="flex flex-wrap text-white text-base font-light">Bersama <span className="ml-1 text-white">BifiMerah</span></p>
                        <p className="flex flex-wrap text-white text-base font-light">Tugas Terlihat Lebih Ringan !</p>
                    </div>
                </div>
                <div className="px-1 flex flex-col items-center">
                    <div>
                        <div className="text-white px-3">
                            <label htmlFor="username" className="text-white text-sm">Username</label>
                        </div>
                        <div>
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                className="bg-white py-2 m-2 rounded-xl px-3"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="px-3">
                            <label htmlFor="password" className="capitalize font-light text-white text-sm">password</label>
                        </div>
                        <div>
                            <input 
                                type="password" 
                                name="password" 
                                id="password"
                                className="bg-white py-2 m-2 px-3 rounded-xl"
                                />
                        </div>
                    </div>
                    <div className="flex my-2 bg-purple-800">
                        <button className="p-2 text-white bg-purple-800 hover:bg-purple-950 flex flex-1 mx-3 text-center justify-center">Login</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}