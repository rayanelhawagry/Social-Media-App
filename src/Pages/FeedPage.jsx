import React, { useContext } from 'react'
import PostCard from '../Components/PostCard'

export default function FeedPage() {
    return (
        <>
            <div className="posts mt-25">
                <PostCard />
            </div>
        </>
    )
}
