import { User } from '../types/User'

type Error = {
    [key: string]: string
}

export const validate = (data: User) =>
{
    const errors: Error = {}

    if (!data.name) { errors["name"] = "This camp is required" }
    if (!data.email) { errors["email"] = "This camp is required" }
    if (!data.agree) { errors["agree"] = "You have to agree with our terms and services" }

    return errors
}