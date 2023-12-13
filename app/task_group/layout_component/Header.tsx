export default function Header(){
    return (
        <div className="p-2 bg-[#ce9787] grid-cols-6 grid gap-3">
            <div className="col-span-1">
                <p>Logo</p>
            </div>
            <div className="grid col-start-5 col-end-5">
                <input 
                    type="text" 
                    name="searchbar" 
                    id="searchbar" 
                    placeholder="Find your project"
                    className="w-[28vw] rounded-md px-2 py-1 bg-[#eed8dc]"
                />
            </div>
            <div className="col-start-7 col-end-7">
                <p>Avatar</p>
            </div>
        </div>
    )
}