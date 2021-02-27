export default function handleBackgroundImage(stars: any, setBackgroundImage: any) {
    switch(stars) {
        case "One":
            setBackgroundImage(`https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Onestar_background.png`);
            return
        case "Two":
            setBackgroundImage(`https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Twostar_background.png`);
            return
        case "Three":
            setBackgroundImage(`https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Threestar_background.png`);
            return
        case "Four":
            setBackgroundImage(`https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Fourstar_background.png`);
            return
        case "Five":
            setBackgroundImage(`https://genshinplannera2c57fdbc5164a6b8f94392805cd599f155138-dev.s3.us-east-2.amazonaws.com/public/Fivestar_background.png`);
            return
    }
}   