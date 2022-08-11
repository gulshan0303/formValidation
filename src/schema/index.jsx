import * as yup from 'yup';

export const signUpSchema = yup.object({
    name:yup.string().min(3).max(20).required("pleate enter your name"),
    email:yup.string().email().required("please enter your email"),

    pass: yup.string().min(5).required("please enter your password"),

    cpass:yup.string().required().oneOf([yup.ref("pass"),null],"password must match"),


});