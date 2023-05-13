import { useQuery } from '@tanstack/react-query'
import getCategories from '../queries/getCategories'
import CategoreyCard from '../components/cards/CategoreyCard'
import styled from 'styled-components'

const StyledCategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2%;
`

const Categories = () => {
  const categories = useQuery(['categories'], getCategories)

  if (categories.isLoading) {
    return <h1>Loading</h1>
  }
  if (categories.isSuccess)
    return (
      <StyledCategoriesWrapper>
        <CategoreyCard />
        <CategoreyCard />
        <CategoreyCard />
        <CategoreyCard />
        <Cards>
            {categories.data.map((e) => (
              <ImageCard {...e} key={e._id} />
            ))}
      </StyledCategoriesWrapper>
    )
}

export default Categories