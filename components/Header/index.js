import { useEffect, useState } from "react"
import { useRouter, Router } from 'next/router'
import Link from 'next/link'
Router.events.on('routeChangeComplete', () => {
    const menu = document.getElementById("collapsable");
    menu.classList.remove(styles.open)

});
import styles from "./Header.module.scss"
const Header = () => {
    const router = useRouter()
    const [name, setName] = useState("me")
    useEffect(() => {
        const route = router.asPath.slice(1);
        if (route.trim() !== "") setName(route)
        else setName("me")
        Array.from(document.querySelectorAll("a")).forEach(link => {
            if (link.getAttribute("href").trim() == router.asPath) link.classList.add(styles.active)
            else link.classList.remove(styles.active)
        })
    }, [router.asPath])
    const toggleNav = () => {
        const container = document.querySelector(".container");
        const menu = document.getElementById("collapsable");
        if (menu.classList.contains(styles.open)) {
            container.style.opacity = 1;

            menu.classList.remove(styles.open)
        }
        else {
            container.style.opacity = 0.2;
            menu.classList.add(styles.open)
        }
    }
    return (
        <div id="header" className={styles.nav} >
            <p id={styles.logo}>
                {` .${name}()`}
            </p>
            <ul id="collapsable">
                <Link href="/">  .me()   </Link>
                <Link href="/work">  .work()   </Link>
                <Link href="/contact">  .contact()   </Link>
                <a target="_blank" href="https://www.linkedin.com/in/waellaataoui/" rel="noopener noreferrer" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" aria-labelledby="LinkedinIcoTitle" className="ico"><title id="LinkedinIcoTitle">LinkedIn logo</title><path d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"></path></svg>


                </a>
                <a href="https://github.com/waellaataoui" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" aria-labelledby="GithubIcoTitle" className="ico"><title id="GithubIcoTitle">GitHub logo</title><path fillRule="evenodd" d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z" clipRule="evenodd"></path></svg>

                </a>
            </ul>
            <img onClick={toggleNav} className={styles.hamburger} alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKklEQVRIiWNgGOqA8f////9paQETLQ0fBaNgiIDRjDYKRgEdwGhGG3gAAPmPC/5Ei27iAAAAAElFTkSuQmCC" />

        </div>
    )
}
export default Header;