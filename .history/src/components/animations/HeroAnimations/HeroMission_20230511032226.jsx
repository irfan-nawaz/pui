import Lottie from 'lottie-react'
import rocket from '../../assets/bms-rocket.json'

const MissionAnimate = styled(Lottie)`
  height: 16vh;
  display: block;
  @media (min-width: 550px) {
    float: left;
    shape-outside: polygon(50% 0px, 103.91% 32.04%, 41.55% 119.54%, 0px 50%);
    height: 20vh;
  }
`

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: rocket,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}