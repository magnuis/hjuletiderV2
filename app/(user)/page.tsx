import AboutUs from '../../components/homePage/AboutUs'
import SubRoutes from '../../components/homePage/SubRoutes'

export default function Page() {
  return (
    <div>
      <AboutUs />

      <div className="max-w-7xl mx-auto">
        <SubRoutes />
      </div>
    </div>
  )
}
