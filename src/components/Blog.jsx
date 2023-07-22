import React from "react";
import BlogEntry from "./BlogEntry";
import "./Blog.css"


const Blog = ({blogData}) => {

    return (
        <div className='blog'>
            <span className='blog-title'>Blog</span>
            <div className='blog-entries'>
                {blogData.data.map((blog, index) => (
                <div key={index} className='item'>
                    <BlogEntry blogDetail={{blog}} />
                </div>
                ))}
                {/* <BlogEntry />
                <BlogEntry />
                <BlogEntry /> */}
            </div>
            
        </div>
    )
}

export default Blog