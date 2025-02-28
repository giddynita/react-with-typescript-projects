import { benefits } from '../../utils/database'
import { Benefit } from '../../utils/types'
import SingleBenefit from './SingleBenefit'

function Benefits() {
  return (
    <ul className="grid place-content-center gap-8 md:grid-cols-2 lg:grid-cols-3 my-10">
      {benefits.map((benefit: Benefit, index: number) => {
        return (
          <li key={index.toString()}>
            <SingleBenefit {...benefit} />
          </li>
        )
      })}
    </ul>
  )
}
export default Benefits
