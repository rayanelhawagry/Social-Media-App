import React, { useContext, useEffect, useState } from 'react'
import PostCard from '../Components/PostCard'
import { getAllPostsAPI } from '../Services/PostServices'

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
                {/* {posts.map((post) => <PostCard post={post} key={post.id} />)} */}
            </div>
        </>
    )
}
