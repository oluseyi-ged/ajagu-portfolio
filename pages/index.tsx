import { ReactElement } from "react"
import Layout from "src/layout"
import Homepage from "src/module/Homepage"

const Home = () => {
  return (
    <>
      <Homepage />
    </>
  )
}

export default Home

Home.getLayout = function getLayout(children: ReactElement) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  )
}
