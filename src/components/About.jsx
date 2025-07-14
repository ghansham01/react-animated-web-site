import React from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Animatedtital from './Animatedtital';

function About() {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });

    return (
        <div id='about' className='min-h-screen w-screen '>
            <div className=' relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[10px]'>
                    Welcome to Zentry
                </h2>
                <Animatedtital title="Disc<b>o</b>ver the world's <br /> <b>la</b>rgest <b>gaming</b> industry"
                ContainerClass="mt-5 !text-black text-center"/>
                <div className='about-subtext'>
                    <p>The gaming industry is a multi-billion dollar industry that encompasses a
                        wide range of activities, including game development, publishing, and esports.</p>
                    <p>
                        Zentry is a platform that connects gamers, developers, and publishers,
                    </p>
                </div>
            </div>

            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img src="img/about.webp" alt="background" className='absolute left-0 top-0 size-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default About