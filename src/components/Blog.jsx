import React from "react";
import BlogEntry from "./BlogEntry";
import "./Blog.css"


const Blog = () => {

    return (
        <div className='blog'>
            <span className='blog-title'>Blog</span>
            <div className='blog-entries'>
                <BlogEntry />
                <BlogEntry />
                <BlogEntry />
            </div>
            
        </div>
    )
}

export default Blog