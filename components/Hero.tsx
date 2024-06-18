import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (

    <>
    <div className="pb-20 pt-36">
   
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

 
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
   
        <div
  
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
         

      
          <TextGenerateEffect
      
            words="We are building the Smart Farm using FarmGate OS Powered by AI"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <div style={{display:'flex', textAlign:'start'}}>
   
 
          </div>
 

          <a href="https://demo.nighthawk.ag ">
            <MagicButton
              title="Try it now"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>


          <img  className="lg:min-w-[450px] lg:max-h-[400px] md:min-w-[350px] md:max-h-[300px] sm:min-w-[280px] sm:max-h-[250px]"style={{padding: '25px', border: '2px solid gray', marginBottom: '-5px', height: '400px', marginTop: '25px', borderRadius: '5px'}}src="https://res.cloudinary.com/dojwag3u1/image/upload/v1718667434/nighthawk-smartlabel_xcg4ey.gif"/>
        </div>
      </div>
           
    </div>
    <footer className="w-full pt-0 pb-0" id="contact">
  
      <div className="flex  md:flex-row flex-col justify-between items-center">
        <p  className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Nighthawk Robotics
        </p>
 
      </div>
    </footer>
    </>
  );
};

export default Hero;


 