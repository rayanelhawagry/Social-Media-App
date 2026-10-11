import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePostAPI } from '../Services/PostServices'
import PostCard from '../Components/PostCard'
import LoadingScreen from '../Components/LoadingScreen'

export default function PostDetails() {
    // let {id} = useParams()
    // console.log(id);
    const [post, setPost] = useState(null)

    async function getPost() {
        const response = await getSinglePostAPI(id)
        if (response.message) {
            setPost(response.post)
        }
    }

    useEffect(() => {
        getPost()
    }, [])


    return (
        <>
            <div className="w-4/6 mx-auto">
                {/* {post ? <PostCard post={post} /> : <LoadingScreen />} */}
                <PostCard />
            </div>
        </>
    )
}
