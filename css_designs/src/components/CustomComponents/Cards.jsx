import React, { useEffect, useState } from 'react'
import service from "../../appwrite/config"
import SingleCard from './SingleCard'
import MyCard from './MyCard'

const Cards = () => {

    const [react, setReact] = useState()
    const [css, setCss] = useState()
    const [html, setHtml] = useState()
    const [tailwindcss, setTailwindcss] = useState()
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const rawPosts = await service.getPosts({ category: "forms" });
            const postdata = rawPosts.documents
            console.log(postdata);
            setPosts(postdata)
        }
        fetchData()
    }, []);

    return (
        <>
            {
                posts?.map((data, index) => (
                    // <SingleCard {...data} key={index} />
                    <MyCard {...data} key={index} />
                ))
            }
        </>
    )
}

export default Cards