import Container from '../global/Container'
import SectionTitle from '../global/SectionTitle'
import Courses from './Courses'

function CoursesContainer() {
  return (
    <div className="bg-basewhite text-whiteforeground">
      <Container display="grid">
        <SectionTitle
          heading="courses"
          subHeading="Unlock Your Potential with Our Expert-Led Classes"
          textAlign="text-left"
          setMargin="mx-start"
        />
        <Courses />
      </Container>
    </div>
  )
}
export default CoursesContainer
