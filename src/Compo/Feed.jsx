import React from "react";
import Post from './Post.jsx'

const Feed = () => {
    return(

        <box flex={5} p={2}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </box>
    )
}

export default Feed