import React, { useContext, useEffect, useState } from 'react'
import PostCard from '../Components/PostCard'
import { getAllPostsAPI } from '../Services/PostServices'
import LoadingScreen from '../Components/LoadingScreen'

export default function FeedPage() {
    const [posts, setPosts] = useState([])

    async function getAllPosts() {
        const response = await getAllPostsAPI()
        setPosts(response.posts)
    }

    useEffect(() => {
        getAllPosts()
    }, [])


    return (
        <>
            <div className="posts mt-25">
                <PostCard />
                <LoadingScreen />

                {/* {posts.length == 0 ? <LoadingScreen /> : posts.map((post) => <PostCard post={post} commentLimit={1} key={post.id} callBack={getAllPosts} />)} */}
            </div>
        </>
    )
}
