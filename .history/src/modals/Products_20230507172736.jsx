import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import SideNav from '../components/SideBar/SideBar'
import FlexCards from '../components/cards/Generic/FlexCards'

const ProductsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  > div {
    display: flex;
    flex-flow: row;
    gap: 1%;
    > div > aside {
      flex-basis: 40%;
      /* min-height: 100vh;  */
    }
    > div > div {
      flex-basis: 100%;
    }
  }
`

const Products = () => {
  return (
    <ProductsWrapper>
      <NavBar />
      <div>
        <SideNav />
        <FlexCards />
      </div>
    </ProductsWrapper>
  )
}

export default Products