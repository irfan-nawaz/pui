import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../assets/shop.json'

const style = {
  marginTop: '15vh',
  height: 300,
  border: 3,
  borderStyle: 'solid',
  borderRadius: 7,
  borderColor: '${(props) => props.theme.PrimaryHeading}',
}

const options = {
  animationData: likeButton,
}

s

const HeroProducts = ({ className }) => {
  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 0.4],
        type: 'seek',
        frames: [50],
      },
      {
        visibility: [0.3, 0.7],
        type: 'stop',
        frames: [1, 50],
      },
    ],
  })

  return Animation
}

export default HeroProducts