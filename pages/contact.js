import { useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { gsap, Power3 } from "gsap"

import styles from '../styles/Contact.module.scss'
import ProgressBar from "../components/ProgressBar"
export default function Contact() {
    const timeline = gsap.timeline({
        delay: 0.2
    })
    useEffect(() => {
        timeline.from("#title", {
            autoAlpha: 0,
            rotationX: 100,
            transformOrigin: '50% 50% -100px',
            duration: 2,
            ease: Power3.easeOut,
        })
            .from("#links,form", {
                autoAlpha: 0,
                x: '32',
                duration: 1,
                ease: Power3.easeOut
            })

    }, [])

    return (
        <div className={styles.backgroundWrapper}>
            <div className={`${styles.bottom} container`} >
                <Head>
                    <title>Wael Laataoui |Contact</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <section className="section">
                    <ProgressBar></ProgressBar>
                    <h1 id="title">contact()</h1>
                    <div id="links" className={styles.links}>
                        <a target="_blank" href="https://www.linkedin.com/in/waellaataoui/ ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" aria-labelledby="LinkedinIcoTitle" className="ico"><title id="LinkedinIcoTitle">LinkedIn logo</title><path d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"></path></svg>
                        </a>
                        <a href="https://github.com/waellaataoui" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" aria-labelledby="GithubIcoTitle" className="ico"><title id="GithubIcoTitle">GitHub logo</title><path fillRule="evenodd" d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z" clipRule="evenodd"></path></svg>
                        </a>
                        <br id={styles.lineBreak}></br>
                        <span className="-gray"> Download my </span> <a id={styles.btn} target="_blank" href="https://drive.google.com/file/d/1WpxIYWI9ghv1l3wPkw9YfWqGc-JyQ0NP/view?usp=sharing"> resume
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" ><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M8 11.4l3.3-2.9m-6.6 0L8 11.4V.5M.5 10.8v4.7h15v-4.7"></path></svg> </a>
                    </div>
                    <form id={styles.contactForm} action="https://formsubmit.co/laataouiwael@gmail.com" method="POST" >
                        <input
                            type="text" name="_subject" placeholder="Subject" />
                        <input
                            type="email" name="email" placeholder="Email Address" />
                        <textarea name="message" placeholder="Enter your message" cols="30" rows="10"></textarea>
                        <button type="submit">Send</button>

                    </form>

                </section>
            </div>
        </div>

    )
}
