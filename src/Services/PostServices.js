import axios from "axios"


export async function getAllPostsAPI() {
    try {
        const { data } = await axios.get('https://linked-posts.routemisr.com/posts', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        return error
    }
}
