import { courses } from '../../utils/database'
import { Course } from '../../utils/types'
import SingleCourses from './SingleCourses'

function Courses() {
  return (
    <ul className="grid place-content-center gap-8 md:grid-cols-2 lg:grid-cols-3 my-10">
      {courses.map((course: Course, index: number) => {
        return (
          <li key={index.toString()}>
            <SingleCourses {...course} />
          </li>
        )
      })}
    </ul>
  )
}
export default Courses
