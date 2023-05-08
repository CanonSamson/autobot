import * as yup from "yup"


export const WaitListSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    email: yup.string().email().required()
})

