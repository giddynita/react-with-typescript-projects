function SectionTitle({
  heading,
  subHeading,
  textAlign,
  setMargin,
}: {
  heading?: string
  subHeading: string
  textAlign: string
  setMargin: string
}) {
  return (
    <div className={`mt-8 mb-4 ${textAlign}`}>
      {heading && (
        <h2 className="uppercase text-custompurple text-md font-semibold mb-3">
          {heading}
        </h2>
      )}
      <h3 className={`text-3xl font-bold max-w-md ${setMargin} `}>
        {subHeading}
      </h3>
    </div>
  )
}
export default SectionTitle
