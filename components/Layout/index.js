import Header from "../Header"
import Head from 'next/head'
export default function Layout({ children }) {
    return <div>
        <Header></Header>
        {children}</div>
}