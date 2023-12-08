export default function LoginPage(){
    return (
        <div className="flex flex-col justify-center h-screen items-center">
            <div className="bg-sky-300 flex flex-col p-2">
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
            </div>
        </div>
    )
}