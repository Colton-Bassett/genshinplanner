export default function HandleMaterialHeader(stars: any) {
    let materialHeader = { background: "", color: "", outline: "", border: "" }
    switch(stars) {
        case "One":
            materialHeader.background = 'https://anemo.s3.us-east-2.amazonaws.com/Onestar_background.png';
            materialHeader.color = '#72778b';
            materialHeader.outline = '0.188rem solid rgb(89, 92, 107)';
            materialHeader.border = '0.4rem solid #5a5d66';
            return materialHeader
        case "Two":
            materialHeader.background = 'https://anemo.s3.us-east-2.amazonaws.com/Twostar_background.png';
            materialHeader.color = '#2a9072';
            materialHeader.outline = '0.188rem solid rgb(35, 111, 89)';
            materialHeader.border = '0.4rem solid #44635e';
            return materialHeader
        case "Three":
            materialHeader.background = 'https://anemo.s3.us-east-2.amazonaws.com/Threestar_background.png';
            materialHeader.color = '#5180cc';
            materialHeader.outline = '0.188rem solid rgb(64, 99, 156)';
            materialHeader.border = '0.4rem solid #47687d';
            return materialHeader
        case "Four":
            materialHeader.background = 'https://anemo.s3.us-east-2.amazonaws.com/Fourstar_background.png';
            materialHeader.color = '#a156e0';
            materialHeader.outline = '0.188rem solid rgb(124, 68, 171)';
            materialHeader.border = '0.4rem solid #745b87';
            return materialHeader
        case "Five":
            materialHeader.background = 'https://anemo.s3.us-east-2.amazonaws.com/Fivestar_background.png';
            materialHeader.color = '#bd6932';
            materialHeader.outline = '0.188rem solid rgb(145, 82, 41, 1)';
            materialHeader.border = '0.4rem solid #846750';
            return materialHeader
    }

    return materialHeader
}