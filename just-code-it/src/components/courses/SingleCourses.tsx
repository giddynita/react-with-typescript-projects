import { Course } from '../../utils/types'

function SingleCourses({ img, title, desc }: Course) {
  return (
    <article className="shadow-md hover:shadow-lg p-4 rounded-md">
      <figure className="w-full">
        <img
          src={img}
          loading="lazy"
          alt={title}
          className="w-full h-[250px] object-cover object-top rounded-t-md"
        />
        <figcaption className="mt-4">
          <h6 className="font-semibold text-lg mb-2 ">{title}</h6>
          <p className="text-md/14 text-gray-500">{desc}</p>
        </figcaption>
      </figure>
    </article>
  )
}
export default SingleCourses
