import React from "react";
import Hero from "./Hero.jsx";
import BlogsList from "./BlogsList.jsx";

export default function Home(){

    return (
        <div id='home'>
            <Hero/>
            <BlogsList />
        </div>
    )
}