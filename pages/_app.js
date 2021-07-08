import '../styles/globals.scss'
import "../styles/nprogress.scss"
import Layout from "../components/Layout"
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import NProgress from 'nprogress';
import Router from 'next/router';

NProgress.configure({
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => {
  NProgress.done()

});
Router.events.on('routeChangeError', () => NProgress.done());
gsap.registerPlugin(ScrollTrigger);
function MyApp({ Component, pageProps }) {
  return <Layout>  <Component {...pageProps} /></Layout>
}

export default MyApp
