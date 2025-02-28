import Container from '../global/Container'
import SectionTitle from '../global/SectionTitle'
import Benefits from './Benefits'

function BenefitsContainer() {
  return (
    <div className="bg-basewhite text-whiteforeground">
      <Container display="grid">
        <SectionTitle
          heading="top-notch benefits"
          subHeading="Learn from Experts and Elevate Your Coding Skills Today! "
          textAlign="text-center"
          setMargin="mx-auto"
        />
        <Benefits />
      </Container>
    </div>
  )
}
export default BenefitsContainer
