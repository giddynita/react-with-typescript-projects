import logo from './image/logo.png'

function Logo() {
  return (
    <figure className="w-[50px] ">
      <img src={logo} alt="logo" loading="lazy" />
    </figure>
  )
}
export default Logo
