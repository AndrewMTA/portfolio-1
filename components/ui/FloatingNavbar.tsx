"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
const [close, setClose] = useState(true)
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

 return (
    <>
 <div
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "52px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          position: 'absolute',
        }}
      >
        <div className="flex items-center space-x-4">
              <Link href="/">  <img
            src="https://res.cloudinary.com/dojwag3u1/image/upload/v1718564761/Frame_151_jrsqra.png"
            alt="Logo"
            className=" lg:max-w-[50px] lg:max-h-[50px] md:max-w-[45px] md:max-h-[40px] sm:max-w-[40px] sm:max-h-[40px] max-w-[40px] max-h-[40px]"
         
          /> </Link>
         
        </div>
        <div className="icon-social">
        <div className="flex space-x-4">
          {navItems.map((navItem, idx) => (
             <Link href={`${navItem.link}`}
             key={`link-${idx}`}> 
        <div
           
              key={`link-${idx}`}
            
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 !cursor-pointer"
              )}
            >
          
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm">{navItem.name}</span> 
            </div></Link>
          ))}


           <a href="mailto:info@nighthawk.ag">
         <div
           
          
            
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 !cursor-pointer"
              )}
            >
          
             
              <span className="text-sm">Contact</span> 
            </div></a>
        </div>
        </div>
        
             
{close ? <> 
        <div  onClick={() => setClose(false)}className="burger"><img style={{width: '30px', height: '30px'}} src="https://res.cloudinary.com/dojwag3u1/image/upload/v1718582369/menu_2_aznhfi.png"/> </div>
</> : <> 
    <div className="dropdown-close" style={{background: '#fff' , opacity: '.8',  borderRadius: '50%'}}onClick={() => setClose(true)}>
          x
        </div>
        <div className="menuBG"style={{position: 'absolute' , top: '70px', right: '30px', padding:'20px',  flexDirection: 'column'}}>
        {navItems.map((navItem, idx) => (
          <Link href={`${navItem.link}`} key={`link-${idx}`}>
            <div
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 !cursor-pointer text-18px"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span style={{fontSize: '16px', marginTop: '5px'}} className="text-sm">{navItem.name}</span>
            </div>
          </Link>
        ))}
      </div></>}
   
      </div>
    </>
  );
};
