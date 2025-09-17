import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(){
    return( 
        <>
            <Header/>
            <main className="container mx-auto px-4 py-8 min-h-screen" id="main-content">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}