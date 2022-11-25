// import Header from '@/components/Header/Header'

type Props = {
  children?: React.ReactNode
}

function Layout({ children }: Props): JSX.Element {
  return (
    <>
      {/* <Header /> */}
      {children}
    </>
  )
}

export default Layout
