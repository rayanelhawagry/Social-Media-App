import axios from "axios";


export async function createCommentAPI(commentContent, postId) {
    try {
        const { data } = await axios.post('https://linked-posts.routemisr.com/comments', {
            content: commentContent,
            post: postId
        },
            {
                headers: { token: localStorage.getItem('token') }
            })
        return data
    } catch (error) {
        return error
    }
}
