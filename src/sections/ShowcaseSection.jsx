import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
    
  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src='/images/SeniorProject2025.png' alt='Signflow'/>
                    </div>
                    <div className='text-content'>
                        <h2>Interactive Website To Learn Sign Languages With Real-Time Feedback Using AI That Features A Learning And Quiz Mode</h2>
                        <p className='text-white-50 md:text-xl'>
                            Developed an interactive website ASL learning platform in Python and HTML that delivers real-time feedback through a webcam-based web interface. Achieved a gesture detection accuracy improvement from 82% to 96% and increased user quiz completion rates by training a YOLOv8 model on a custom ASL dataset. 
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src='/images/project2.png' alt='Library Management Platform'/>
                        </div>
                        <h2>Library Mangement Platform</h2>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src='/images/project3.png' alt='YC Directory'/>
                        </div>
                        <h2>YC Directory - A Startup Showcase App</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection;