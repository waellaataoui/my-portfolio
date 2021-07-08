import Header from "../Header"
import Head from 'next/head'
export default function Layout({ children }) {
    return <div>


        <Head>
            <link rel="icon" href="/favicon.png" />

        </Head>
        <Header></Header>
        {children}</div>
}