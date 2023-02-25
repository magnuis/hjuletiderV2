import AboutUs from '../../components/homePage/AboutUs'
import SubRoutes from '../../components/homePage/SubRoutes'
import { inter } from '../../lib/fonts'

export default function Page() {
  return (
    <div>
      <AboutUs />
      <div className={`${inter.className} max-w-7xl mx-auto `}>
        <SubRoutes />
      </div>
    </div>
  )
}
