"use Client";
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'



export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  )
}


export default Layout;