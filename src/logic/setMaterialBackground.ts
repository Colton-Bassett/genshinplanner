export default function handleBackgroundImage(stars: any, setBackgroundImage: any) {
    switch(stars) {
        case "One":
            setBackgroundImage(`https://anemo.s3.us-east-2.amazonaws.com/Onestar_background.png`);
            return
        case "Two":
            setBackgroundImage(`https://anemo.s3.us-east-2.amazonaws.com/Twostar_background.png`);
            return
        case "Three":
            setBackgroundImage(`https://anemo.s3.us-east-2.amazonaws.com/Threestar_background.png`);
            return
        case "Four":
            setBackgroundImage(`https://anemo.s3.us-east-2.amazonaws.com/Fourstar_background.png`);
            return
        case "Five":
            setBackgroundImage(`https://anemo.s3.us-east-2.amazonaws.com/Fivestar_background.png`);
            return
    }
}   