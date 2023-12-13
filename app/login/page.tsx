import { redirect } from "next/navigation";
import { checkLogin} from "../api/v1/auth/auth";
import { cookies } from "next/headers";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

import Image from "next/image";

import Logo from "@/assets/bimifi_logo.png";

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
        <div className="flex flex-col justify-center h-screen items-center bg-login-bg bg-cover">
            <form className="bg-white flex flex-col p-2 opacity-60 rounded-2xl" action={checkLoginWithFormData}>
                <div className="flex justify-center mb-6">
                    <Image
                        src={Logo}
                        alt="Bimifi Logo"
                    />
                </div>
                <div className="px-1 flex flex-col items-center">
                    <div className="flex mb-4">
                        <div className="flex flex-col justify-center px-5">
                            <FiUser />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                className="py-2 m-2 rounded-xl px-3 bg-gray-500 focus:bg-white"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col justify-center px-5">
                            <FiLock />
                        </div>
                        <div>
                            <input 
                                type="password" 
                                name="password" 
                                id="password"
                                className="py-2 m-2 px-3 rounded-xl bg-gray-500 focus:bg-white"
                                />
                        </div>
                    </div>
                    <div className="flex my-[3rem]">
                        <button className="px-5 py-4 bg-[#ff3131] grad flex flex-1 mx-3 text-center justify-center rounded">Get started</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}