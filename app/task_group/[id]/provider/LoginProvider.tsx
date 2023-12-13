"use client"

import React, { createContext, useState } from "react"

type UserInfoType = {
    username: string,
    role: string | null
} | null


export const UserContext = createContext<unknown>(null)

export default function LoginProvider({children, userDetails}: {children: React.ReactNode, userDetails: UserInfoType}){
    const [userInfo, setUserInfo] = useState<UserInfoType>(userDetails)

    function handleUserInfo(value: UserInfoType){
        setUserInfo(prev => value)
    }

    return (
        <div>
            <UserContext.Provider value={{userInfo, handleUserInfo}}>
                {children}
            </UserContext.Provider>
        </div>
    )
}