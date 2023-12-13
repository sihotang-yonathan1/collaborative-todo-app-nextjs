import Image from "next/image";
import BifiMerahLogo from "@/assets/bifi_merah_logo.png";

export default function Header(){
    return (
        <div className="p-2 bg-[#3a7782] grid-cols-6 grid gap-3">
            <div className="col-span-1 ml-6">
                <Image
                    src={BifiMerahLogo}
                    alt="logo"
                    width={75}
                />
            </div>
            <div className="grid col-start-5 col-end-5 my-3">
                <input 
                    type="text" 
                    name="searchbar" 
                    id="searchbar" 
                    placeholder="Find your project"
                    className="w-[28vw] rounded-md px-2 py-1 bg-[#eed8dc]"
                />
            </div>
            <div className="col-start-7 col-end-7">
                <div className="h-full flex items-center rounded-full bg-gray-500">
                    <p>Avatar</p>
                </div>
            </div>
        </div>
    )
}