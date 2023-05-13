import styled from 'styled-components'

import { Button } from '../buttons/Primary'

import { FaShoppingCart, FaHeart } from 'react-icons/fa'

const StyledProductCard = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  > img {
    
  }
`
const StyledImageWrapper = styled.div`
  height: 15rem;
  width: 15rem;
  > img {
    max-width: 100%;
    min-height: 100%;
  }
`

const StyledIconsWrapper = styled.div``

const ProductCard = (props) => {
  return (
    <div className="container">
      <StyledProductCard className="content badge">
        <img src={props.imgSrc} alt="Image" />
        <figcaption className="title">
          <h2>Nike Air Max</h2>
          <p>Soft and Smooth.</p>
        </figcaption>
        <i className="far fa-heart"></i>
        <h4>NEW</h4>
      </StyledProductCard>
      <div className="about">
        <h5 className="product-description">Sustainable Materials</h5>
        <p></p>
        <p>Unisex</p>
        <p>available in colors</p>
        <div className="colors">
          <div className="blue-unit"></div>
          <div className="green-unit"></div>
          <div className="red-unit"></div>
        </div>
        <h5 className="product-price">₹ 8,995</h5>
      </div>
      <div className="icons">
        <Button className="btn full-width" id="default-btn">
          Add To Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCard