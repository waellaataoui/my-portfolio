import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { useEffect, useRef } from "react"
import styles from '../styles/Home.module.scss'
import { gsap, Power3 } from "gsap"
import ProgressBar from "../components/ProgressBar"
//pokemon assets
import ash from '../public/ash.png'
import pikatchu from '../public/pikatchu.gif'
import grass from '../public/grass.png'
import dialog from '../public/dialog.png'
import gotcha from "../public/gotcha.png"
import scroll from "../public/scroll.png"
import help from "../public/help.png"
import pokeball from '../public/pokeball.png'
//skills assets
import reactLogo from "../public/react.png"
import reduxLogo from "../public/redux.png"
import sassLogo from "../public/sass.png"
import nextLogo from "../public/nextjs.png"
import expressLogo from "../public/express.png"
import mongodbLogo from "../public/mongodb.png"
import postgresLogo from "../public/postgres.png"
import symfonyLogo from "../public/symfony.png"

export default function Home() {
  const timeline = gsap.timeline({
    delay: 0.2
  })
  const education = gsap.timeline({
  })
  const pokemon = gsap.timeline({
  })
  const skills = gsap.timeline({
  })
  const pikatchuRef = useRef(null)
  const grassRef = useRef(null)
  const pokemonRef = useRef(null)
  const tilesRef = useRef(null)
  const dialogRef = useRef(null)
  const ashRef = useRef(null)
  const pokeballRef = useRef(null)
  const gotchaRef = useRef(null)
  const scrollRef = useRef(null)
  const skillsRef = useRef(null)
  let pikatchuCaught = false
  const catchEm = () => {
    const throwBall = gsap.timeline();
    throwBall.to(pokeballRef.current, {
      x: pikatchuRef.current.offsetLeft - pokeballRef.current.offsetLeft,
      y: pikatchuRef.current.offsetTop - pokeballRef.current.offsetTop,
      rotation: '+=720',

      ease: Power3.linear,
      duration: 1.5
    })
    throwBall.to(pokeballRef.current, {
      x: pikatchuRef.current.offsetLeft - pokeballRef.current.offsetLeft - 100,
      y: pikatchuRef.current.offsetTop - pokeballRef.current.offsetTop + 100,
      ease: Power3.linear,
      rotateZ: -360,
      duration: 1,
    })
    throwBall.to(pikatchuRef.current, {
      skewX: 15,
      x: -100,
      y: 50,
      scale: 0.5,
      opacity: 0,
      duration: 2,
      onStart: () => {
        pikatchuRef.current.classList.add(styles.redFilter)
      }
    })
    throwBall.to(gotchaRef.current, {
      opacity: 1,
      scale: 1,
      onComplete: () => {
        //so that the screen wont get locked again
        pikatchuCaught = true
        document.body.classList.remove('locked')
        //restore header
        document.getElementById('header').classList.remove('transparent')

      }
    })
    throwBall.to(scrollRef.current, {
      autoAlpha: 1,
      transform: "translate3d(-50%, -50%, 0px)",
      duration: 0.5
    })


    throwBall.play()
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    timeline.from("#title", {
      autoAlpha: 0,
      rotationX: 90,
      transformOrigin: '50% 50% -100px',
      duration: 2,
      ease: Power3.easeOut,


    })
      .from("#me", {
        autoAlpha: 0,
        x: '-32',
        duration: 1,
        ease: Power3.easeOut
      })
    education.from("#education > h1", {
      autoAlpha: 0,
      rotationX: 90,
      transformOrigin: '50% 50% -300px',
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: '#education > h1',
        start: "center center",
        scrub: true,
        toggleActions: "play, reverse, play,reverse",

      }
    })
      .from('#education > p', {
        autoAlpha: 0,
        rotationX: 90,
        transformOrigin: '50% 50% 200px',
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: '#education >.gap',
          scrub: true,
          toggleActions: "play, reverse, play,reverse",
        }
      })
      .from("#prepa >h1", {
        autoAlpha: 0,
        rotationX: 90,
        transformOrigin: '50% 50% -300px',
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: '#prepa >h1',
          start: "center center",
          scrub: true,
          toggleActions: "play, reverse, play,reverse",
        }
      })
      .from("#prepa > p", {
        autoAlpha: 0,
        rotationX: 90,
        transformOrigin: '50% 50% 200px',
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: '#prepa >.gap',
          scrub: true,
          toggleActions: "play, reverse, play,reverse",
        }
      })
      .from("#degree >h1", {
        autoAlpha: 0,
        rotationX: 90,
        transformOrigin: '50% 50% -400px',
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: '#degree > h1',
          start: "center center",
          scrub: true,
          toggleActions: "play, reverse, play,reverse",
        }
      })
      .from("#degree > p", {
        autoAlpha: 0,
        rotationX: 90,
        transformOrigin: '50% 50% 200px',
        ease: Power3.easeInOut,
        // duration: 3,
        scrollTrigger: {
          trigger: '#degree >.gap',
          scrub: true,
          toggleActions: "play, reverse, play,reverse",
        }
      })
    skills.from("#skillsHeader", {
      autoAlpha: 0,
      rotationX: 90,
      transformOrigin: '50% 50% -150px',
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top center",
        end: "+=200px",
        scrub: true,
        toggleActions: "play, reverse, play,reverse",

      }
    })
    skills.from('.skillF', {
      opacity: 0,
      x: '-80%',
      stagger: 1.5,
      scrollTrigger: {
        trigger: '#frontend',
        start: 'center center',
        end: '+=160px',
        scrub: true,
        toggleActions: "play, reverse, play,reverse",
      }
    })
    skills.from('.skillB', {
      opacity: 0,
      x: '80%',
      stagger: 1.5,
      scrollTrigger: {
        trigger: '#frontend',
        start: 'bottom center',
        end: '+=100px',
        scrub: true,
        toggleActions: "play, reverse, play,reverse",
      }
    })


    //pokemon scene  
    pokemon
      .from(pikatchuRef.current, {
        transform: "translate3d(-150vw, 0px, 0px)",
        filter: 'brightness(0.2)',
        scrollTrigger: {
          trigger: pokemonRef.current,
          start: '20% center',
          end: 'center center',
          scrub: true,
          toggleActions: "play, reverse, play,reverse",
        }
      })
      .from(grassRef.current, {
        transform: "translate3d(-150vw, 0px, 0px)",
        scrollTrigger: {
          trigger: pokemonRef.current,
          start: '20% center',
          end: 'center center',
          scrub: true,
          toggleActions: "play, reverse, play,reverse",
        }
      })
      .addLabel('start')

      .from(dialogRef.current, {
        transform: "translate3d(-150vw, 0px, 0px)",
        scrollTrigger: {
          trigger: pokemonRef.current,
          ease: Power3.easeIn,
          start: '20% center',
          end: 'center center',
          scrub: 4,
          toggleActions: "restart, reverse, play,reverse",
        }
      })
      .from(tilesRef.current, {
        transform: "translate3d(200vw, 0px, 0px)",
        scrollTrigger: {
          trigger: pokemonRef.current,
          ease: Power3.easeIn,
          start: '30% center',
          end: 'top top',
          scrub: 5,
          toggleActions: "restart, reverse, play,reverse",
        }
      })
      .from(ashRef.current, {
        transform: "translate3d(100vw, 0px, 0px)",
        scrollTrigger: {
          trigger: pokemonRef.current,
          ease: Power3.easeIn,
          start: '20% center',
          end: 'center center',
          scrub: 4,
          toggleActions: "restart, reverse, play,reverse",
        }
      })
      .from(pokeballRef.current, {
        y: '-100vw',
        scrollTrigger: {
          trigger: pokemonRef.current,
          ease: Power3.easeIn,
          start: '20% center',
          end: 'center center',
          scrub: 3,
          toggleActions: "restart, reverse, play,reverse",
        }
      })
      //this lockes the screen scrolling in the right moment
      .from(pokemonRef.current, {
        scrollTrigger: {
          trigger: pokemonRef.current,
          start: 'center center',
          onEnter: () => {
            if (!pikatchuCaught) {
              //this test fixes a weird refs behaviour
              if (document.getElementById(styles.pokemon)) {
                document.getElementById(styles.pokemon).scrollIntoView();
                //wait a while to avoid glitches 
                setTimeout(() => {
                  document.getElementById(styles.pokemon).scrollIntoView();
                  document.body.classList.add('locked')
                  document.getElementById('header').classList.add('transparent')
                }, 300);

              }

            }
          },

        }
      })


  }, [])
  return (
    <div className="container">
      <Head>
        <title>Wael Laataoui | Portfolio</title>
        <meta name="description" content="My personal portfolio" />
        <meta property="og:title" content="Wael Laataoui's Portfolio" />
        <meta property="og:description" content="My personal portfolio" />
        <meta property="og:url" content="https://www.waellaataoui.tn/" />
        <meta property="og:type" content="website" />

      </Head>
      <ProgressBar></ProgressBar>
      <section id="intro" className="section">
        <h1 id="title">wael<span className="-primary">.me()</span></h1>
        <div id="me">
          <p className="-primary">Wael Laataoui</p>
          <p className="-gray">Ambitious fullstack web developer</p>
        </div>
      </section>
      <section id="education" className="section">
        <div className="gap"></div>

        <h1>Education<span className="-primary">.all()</span></h1>
        <p className="-gray"> {`<Education showcase>`} </p>
      </section>
      <section id="prepa" className="section">
        <div className="gap"></div>

        <h1 >Pre-Engineering Studies<span className="-primary">(2017-2019)</span></h1>
        <p className="-gray"> @ Higher Institute of Applied Science and Technology of Sousse </p>
      </section>
      <section id="degree" className="section">
        <div className="gap"></div>

        <h1>Software Engineering Degree<span className="-primary">(2019-present)</span></h1>
        <p className="-gray"> @ Higher Institute of Applied Science and Technology of Sousse </p>
      </section>
      <div className="gap"></div>

      <section ref={pokemonRef} id={styles.pokemon}>
        <div ref={tilesRef} id={styles.tiles}></div>
        <div ref={ashRef} id={styles.ash}>
          <Image src={ash} layout="fill" alt="tiles" ></Image>
        </div>
        <div ref={pikatchuRef} id={styles.pikatchu}>
          <Image src={pikatchu} layout="fill" alt="pikatchu" onClick={catchEm}  ></Image>
        </div>
        <div ref={grassRef} id={styles.grass}>
          <Image src={grass} layout="fill" alt="grass" ></Image>
        </div>
        <div ref={dialogRef} id={styles.dialog}>
          <Image src={dialog} layout="fill" alt="dialog" ></Image>
        </div>
        <div ref={pokeballRef} id={styles.pokeball} onClick={catchEm}>
          <Image src={pokeball} layout="fill" alt="pokeball" ></Image>
        </div>
        <div ref={gotchaRef} id={styles.gotcha}>
          <Image src={gotcha} layout="fill" alt="gotcha" ></Image>
        </div>
        <div ref={scrollRef} id={styles.scroll}>
          <Image src={scroll} layout="fill" alt="scroll" ></Image>
        </div>
        <div className="tooltip" id={styles.help}>
          <div className="left">
            <p>Click on the pokeball OR Pikachu</p>
            <i></i>
          </div>
          <Image src={help} layout="fill" alt="help" ></Image>

        </div>
      </section>

      <section ref={skillsRef} id={styles.skills} className="section">
        <div className="gap"></div>
        <h1 id="skillsHeader" className="-primary">Skills</h1>
        <div id="frontend" className={styles.skillsWrapper} >
          <div className="skillF"> <Image src={reactLogo} layout="responsive" alt="react" ></Image>
            <p>react js</p>
          </div>
          <div className="skillF"> <Image src={reduxLogo} layout="responsive" alt="redux" ></Image>
            <p>redux</p>

          </div>
          <div className="skillF" > <Image src={nextLogo} layout="responsive" alt="nextjs" ></Image>
            <p>Next js</p>

          </div>
          <div className="skillF"> <Image src={sassLogo} layout="responsive" alt="sass" ></Image>
            <p>Sass</p>

          </div>
        </div>
        <div className="gap"></div>

        <div id="backend" className={styles.skillsWrapper} >
          <div className="skillB"> <Image src={expressLogo} layout="responsive" alt="express" ></Image>
            <p>Express js</p>
          </div>
          <div className="skillB"> <Image src={mongodbLogo} layout="responsive" alt="mongodb" ></Image>
            <p>MongoDB</p>

          </div>
          <div className="skillB" > <Image src={postgresLogo} layout="responsive" alt="postgres" ></Image>
            <p>PostgreSQL</p>

          </div>
          <div className="skillB"> <Image src={symfonyLogo} layout="responsive" alt="symfony" ></Image>
            <p>Symfony</p>

          </div>
        </div>
      </section>
      <section className="section">
        <h1>Check out my <br></br> <span className="-primary"><Link href="/work">selected works</Link> </span>
 for more details.</h1>
      </section>
    </div>
  )
}
