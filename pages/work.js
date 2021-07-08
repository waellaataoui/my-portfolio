import { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Work.module.scss'
import ProgressBar from "../components/ProgressBar"
import { gsap, Power3 } from "gsap"
import { createClient } from "contentful";
import code from "../public/code.svg"
import demo from "../public/demow.png"
export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN
    })
    const response = await client.getEntries({ content_type: 'project' })

    return {
        props: {
            projects: response.items
        }
    }
}
export default function Work({ projects }) {
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
            .from("#subtitle, #projects-container", {
                autoAlpha: 0,
                x: '-32',
                duration: 1,
                ease: Power3.easeOut
            })

    }, [])
    return (
        <div className="container">
            <Head>
                <title>Wael Laataoui |Work</title>
            </Head>

            <section className="section">
                <ProgressBar></ProgressBar>
                <h1 id="title">work('<span className="-primary">selected</span>')</h1>
                <p id="subtitle" className="-gray">// some of the projects I've developed</p>
                <div id="projects-container">
                    {projects.map(project => (<div className={styles.project} key={project.fields.title}>
                        <div className={styles.projectImage}>
                            <Image src={`https:${project.fields.image.fields.file.url}`} objectFit="scale-down" width={200} height={200}
                                alt={project.fields.image.fields.file.fileName}  ></Image>
                        </div>
                        <div className={styles.details}> <h1 className="-primary"> {project.fields.title} </h1>
                            <div className={styles.links}>
                                <a href={project.fields.codeLink} target="_blank" rel="noopener noreferrer" >
                                    <div className={styles.link}>
                                        <Image src={code} width={30} height={30} alt="code" ></Image>
                                        <p>Code</p>
                                    </div>
                                </a>
                                <a href={project.fields.demoLink} target="_blank" rel="noopener noreferrer" >
                                    <div className={styles.link}>
                                        <Image src={demo} width={25} height={25} alt="demo" ></Image>
                                        <p>Demo</p>
                                    </div>
                                </a>
                            </div>
                            <p> {project.fields.description} </p>
                        </div>
                    </div>))}
                </div>
            </section>
        </div>
    )
}
