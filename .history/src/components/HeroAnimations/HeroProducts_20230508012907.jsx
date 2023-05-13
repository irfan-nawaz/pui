import { useLottie, useLottieInteractivity } from 'lottie-react'
import likeButton from '../../assets/s'

const options = {
  animationData: likeButton,
}

const HeroProducts = () => {
  const lottieObj = useLottie(options)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 0.45],
        type: 'stop',
        frames: [0],
      },
      {
        visibility: [0.45, 1],
        type: 'seek',
        frames: [0, 38],
      },
    ],
  })

  return Animation
}

export default HeroProducts