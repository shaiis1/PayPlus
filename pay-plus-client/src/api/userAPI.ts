import { unprotectedGetRequest, unprotectedPostRequest } from "./apiGenerics"

export const loginUser = async(id: any, pass: string) => {
    const res = await unprotectedPostRequest('users/login', {pass: pass, id: id})
    return res
}

export const registerUser = async(id: any, pass: string, firstName: string, lastName: string) => {
    const res = await unprotectedPostRequest('users/register', {password: pass, userID: id, lastName: lastName, firstName: firstName})
    return res
}