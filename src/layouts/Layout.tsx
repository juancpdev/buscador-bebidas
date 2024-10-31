import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { useAppStore } from "../stores/useAppStore"
import Notification from "../components/Notification"
import Footer from "../components/Footer"

export default function Layout() {
  
  const loadFromStorage = useAppStore((state) => state.loadFromStorage)

  useEffect(() => {
    loadFromStorage()
  })

  return (
    <div className=" grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header/>

        <div>
          <main className="container mx-auto py-16">
            <Outlet/>
          </main>
          
          <Modal/>
          <Notification/>
        </div>

        <Footer/>
    </div>
  )
}
