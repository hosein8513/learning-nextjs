'use server'

import axios from "axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import z, { success } from "zod"

const validationSchema = z.object({
    phone:z.string().min(1,".ورود اطلاعات این فیلد اجباری است"),
    password:z.string().min(1,".ورود اطلاعات این فیلد اجباری است")
})

export const loginAction = async (prevState,formData) => {
    let redirectTo = null
const cookieStore = await cookies()
const cookie = cookieStore.get("logintoken")
console.log(cookie);


    
        const phone = formData.get("phone")
        const password = formData.get("password")
        const remember = formData.get("remember") || 0

        const params = {phone,password,remember} 

        const validationFields = validationSchema.safeParse(params)

        if(!validationFields.success){
            const response ={
                errors: validationFields.error?.flatten().fieldErrors,
                success:false
            }
            return response
        }

        const res = await axios.post("https://ecomadminapi.azhadev.ir/api/auth/login",params)

        if (res.status === 200) {
            const token = res.data.token
            const cookieStore = await cookies()
            cookieStore.set("logintoken", token)
            redirectTo = "/userpanel"
        } else {
            return {error:"اطلاعات درست نیست",success:false }
        }

    if (redirectTo) redirect(redirectTo)
}

export const isLoggedIn = async (token) => {
    if(!token) return false

    console.log("Authorization:", `Bearer ${token}`)

    const res = await fetch("https://ecomadminapi.azhadev.ir/api/auth/user", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })


    if(res.status !== 200) return false

    return true
}