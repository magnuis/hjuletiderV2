import Footer from '../../components/footer'
import WideHeader from '../../components/Header'
import MobileHeader from '../../components/MobileHeader'
import '../../styles/globals.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <WideHeader />
        <MobileHeader />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
