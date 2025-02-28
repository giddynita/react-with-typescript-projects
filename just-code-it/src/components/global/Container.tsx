const Container = ({
  children,
  display,
}: {
  children: React.ReactNode
  display: string
}) => {
  return (
    <div className={`mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-8 ${display}`}>
      {children}
    </div>
  )
}
export default Container
