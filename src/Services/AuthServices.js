import axios from "axios";

export async function signUp(userData) {
    try {
        let { data } = await axios.post('https://route-posts.routemisr.com/users/signup', userData)
        return data
    } catch (error) {
        return error.response.data
    }
}


export async function signIn(userData) {
    try {
        let { data } = await axios.post('https://route-posts.routemisr.com/users/signin', userData)
        return data
    } catch (error) {
        return error.response.data
    }
}
