import { Button } from '../global/Buttons'
import Container from '../global/Container'

function Hero() {
  return (
    <div className=" md:py-32 py-18 hero text-white mt-[64px] relative before:absolute overflow-hidden  ">
      <Container display="grid">
        <div className="flex flex-col gap-6">
          <h1 className="capitalize font-extrabold text-4xl/10 md:text-6xl/16 tracking-wide md:max-w-lg max-w-sm">
            transform your career with {''}
            <span className="">JCI (Just Code It)</span>
          </h1>
          <p className="text-lg md:text-2xl/10 font-semibold md:max-w-lg max-w-[250px]">
            At JCI, we empower you to master the skills of tomorrow with
            industry-aligned courses designed for real-world success.
          </p>
          <a href="#join" className="w-max">
            <Button text="join now" />
          </a>
        </div>
      </Container>
    </div>
  )
}
export default Hero
