import styled from 'styled-components'

const StyledFigure = styled.figure`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  > div {
    grid-column: 1/2;
    grid-row: 1/3;
    width: 100%;
    > img {
      min-width: 100%;
      max-height: 350px;
    }
  }
  > figcaption {
    grid-column: 1/2;
    grid-row: 1/3;
    background-color: #cc1fcc;
  }
`

const CategoreyCard = (props) => {
  return (
    <StyledFigure>
      <div>
        <img src={props.imgSrc} alt="shoe categories" />
      </div>
      <figcaption>
        <h2>Category</h2>
      </figcaption>
    </StyledFigure>
  )
}

export default CategoreyCard