import { Benefit } from '../../utils/types'

function SingleBenefit({ icon, benefit, desc }: Benefit) {
  return (
    <article className="border border-gray-300 p-8 rounded-2xl hover:shadow-xl hover:border-0 transition transition-300">
      <figure className="mb-6">
        <img src={icon} alt="icon" className="w-10 h-10" />
      </figure>
      <h5 className="font-semibold mb-4">{benefit}</h5>
      <p className="text-sm text-gray-500">{desc}</p>
    </article>
  )
}
export default SingleBenefit
