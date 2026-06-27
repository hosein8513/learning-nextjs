'use server'

import axios from "axios"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const loginAction = async (formData) => {
    let redirectTo = null

    try {
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
            return { error: "خطای ناشناخته" }
        }

    } catch (error) {
        if (error?.response?.status === 401) {
            return { error: "نام کاربری یا رمز عبور اشتباه است" }
        }
        if (error?.response?.status === 422) {
            return { error: "اطلاعات وارد شده معتبر نیست" }
        }
        console.error(error)
        return { error: "خطا در برقراری ارتباط با سرور" }
    }

    if (redirectTo) redirect(redirectTo)
}