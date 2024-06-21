import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

import { BackgroundGradientAnimation } from "./ui/GradientBg";
const Hero = () => {
  return (

    <div style={{height:'100vh'}}>
    <BackgroundGradientAnimation>
    <div className="pb-20 pt-36">
   
      <div>
        <Spotlight
          className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen"
          fill="white"
        />
  
      </div>

 
      <div
        className=" top-0 left-0 flex items-center justify-center"
      >
   
     
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
         


<h1     className="text-center text-[60px] md:text-6xl lg:text-7xl"> Websites That Make You Look Like A Pro. Guaranteed.</h1>
       
        

          <a href="https://demo.nighthawk.ag ">
            <MagicButton
              title="Try it now"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
 
        </div>
      </div>
           
    </div>
    </BackgroundGradientAnimation>
   
    </div>
  );
};

export default Hero;


 