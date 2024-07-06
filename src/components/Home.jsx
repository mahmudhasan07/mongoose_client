import React from 'react';
import "./Home.css"
import { Banner } from './Banner';
// import { HoverEffect } from "../ui/card-hover-effect";
const Home = () => {
    
    return (
        <section>
            <h1 className='text-center text-3xl my-10 '>This is a home page</h1>
            <Banner></Banner>
            <div>
                {/* <HoverEffect items={projects} /> */}
            </div>
        </section>
    );
};



export default Home;