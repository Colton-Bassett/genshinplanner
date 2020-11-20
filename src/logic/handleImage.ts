import { Character } from '../logic/character';
import RazorImage from '../images/Razor.png'
import VentiImage from '../images/Venti.png'
import XingqiuImage from '../images/Xingqiu.png'
import AscensionFourImage from '../images/ascension4.png'

export default function HandleImage(name: string) {
    switch(name) {
        case Character.Razor:
            return RazorImage;
        case Character.Venti:
            return VentiImage;
        case Character.Xingqiu:
            return XingqiuImage;
        case "AscensionFour":
            return AscensionFourImage;
        default:
            return RazorImage;
    }
}