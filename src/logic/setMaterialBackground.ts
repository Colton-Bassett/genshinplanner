import FivestarBackground from '../images/fivestar_background.png'
import FourstarBackground from '../images/fourstar_background.png'
import ThreestarBackground from '../images/threestar_background.png'
import TwoStarBackground from '../images/twostar_background.png'
import OnestarBackground from '../images/onestar_background.png'

export default function handleBackgroundImage(stars: any, setBackgroundImage: any) {
    switch(stars) {
        case "One":
            setBackgroundImage(OnestarBackground);
            return
        case "Two":
            setBackgroundImage(TwoStarBackground);
            return
        case "Three":
            setBackgroundImage(ThreestarBackground);
            return
        case "Four":
            setBackgroundImage(FourstarBackground);
            return
        case "Five":
            setBackgroundImage(FivestarBackground);
            return
    }
}