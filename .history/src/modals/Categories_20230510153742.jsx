import CategoreyCard from '../components/cards/CategoreyCard'

const StyledCategoriesWrapper = styled.div``

const Categories = () => {
  return (
    <StyledCategoriesWrapper>
      <CategoreyCard />
      <CategoreyCard />
    </StyledCategoriesWrapper>
  )
}

export default Categories