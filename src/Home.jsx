import React from "react";
import ComA from "./comA";
import web from '../src/images/home.jpeg';

const Home = () => {
    return(
        <>
         <ComA name='Grow your business with' imgsrc={web} visit="/service" btname="Get Started" />
        </>
    )
}
export default Home;