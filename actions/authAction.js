'use server'

import axios from "axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const loginAction = async (prevState,formData) => {
    let redirectTo = null

    
        const phone = formData.get("phone")
        const password = formData.get("password")
        const remember = formData.get("remember") || 0

        const res = await axios.post("https://ecomadminapi.azhadev.ir/api/auth/login", { phone, password, remember })

        if (res.status === 200) {
            const token = res.data.token
            const cookieStore = await cookies()
            cookieStore.set("loginToken", token)
            redirectTo = "/userpanel"
        } else {
            return {error:"اطلاعات درست نیست",success:false }
        }

    if (redirectTo) redirect(redirectTo)
}