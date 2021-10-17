import React from "react";
import web from '../src/images/about.jpg';
import ComA from "./comA";


const About = () =>{
    return(
        <>
        <ComA name='Welcome to About page' imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    );
};
export default About;