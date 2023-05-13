import FeaturedTitle from '../../components/headings/FeaturedTitle'
import styled from 'styled-components'
import useFilteredProducts from '../../hooks/useFilteredProducts'

import FeaturedCard from '../../components/cards/FeaturedCard'

const Wrapper = styled.div``

const StyledCards = styled.div`
  > * {
    margin: 1%;
    padding: 1%;
    background-color: ${(props) => props.theme.offSetBg};
  }

  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    > * {
      flex-basis: 48%;
    }
  }
  @media (min-width: 1000px) {
    > * {
      flex-basis: 23%;
    }
  }
`

const FeaturedCards = () => {
  const [results] = useFilteredProducts()
  return (
    <>
      <FeaturedTitle heading="Featured" />
      <Wrapper>
        <StyledCards>
          {results.map((e) => {
            if (e.isFeatured) {
              return <FeaturedCard {...e} key={e._id} />
            }
          })}
        </StyledCards>
      </Wrapper>
    </>
  )
}

export default FeaturedCards