import { useQuery } from '@tanstack/react-query'

import ImageCard from '../components/cards/ImageCard'
import CategoryTitle from '../components/headings/CategoryTitle'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  /* background-color: ${(props) => props.theme.offSetBg}; */
  margin: 0 auto;
  padding: 1rem;
  margin: 1rem 0;
`

const Cards = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1%;
  }
`

const CategoryCards = () => {
  const categories = useQuery(['categories'], getCategories)

  if (categories.isLoading) {
    return <h1>Loading</h1>
  }
  if (categories.isSuccess)
    return (
      <>
        <CategoryTitle heading="Categories" />
        <Wrapper>
          <Cards>
            {categories.data.map((e) => (
              <ImageCard {...e} key={e._id} />
            ))}
          </Cards>
        </Wrapper>
      </>
    )
}

export default CategoryCards