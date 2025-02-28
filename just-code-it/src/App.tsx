import BenefitsContainer from './components/benefits/BenefitsContainer'
import CoursesContainer from './components/courses/CoursesContainer'
import Enroll from './components/Enroll/Enroll'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BenefitsContainer />
      <CoursesContainer />
      <Enroll />
      <Footer />
    </>
  )
}

export default App
