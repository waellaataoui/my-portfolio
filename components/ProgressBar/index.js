import { useRef, useEffect } from "react"
import debounce from "debounce"
import { gsap, Power3 } from "gsap"

const ProgressBar = () => {
    const circle = useRef(null)
    const timeline = gsap.timeline({
    })
    useEffect(() => {
        timeline.to(circle.current, {
            background: '#682ae9',
            duration: 2,
            autoAlpha: 1,
            ease: Power3.easeOut,
        })
            .to(".pulse", {
                duration: 2,
                autoAlpha: 0,
                scale: 8,
                ease: Power3.easeOut,
            })
        window.addEventListener("scroll", slideCircle)
        const slideCircle = (e) => {
            if (circle.current)
                circle.current.style.top = `${window.scrollY}px`
        }
        window.onscroll = debounce(slideCircle, 100);
    }, [])
    return (
        <div id="progress" >
            <div ref={circle} className="circle"></div>
            <div className="pulse"></div>
        </div>

    )
}
export default ProgressBar
