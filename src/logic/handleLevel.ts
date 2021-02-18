export default function handleLevel(currentAscension: number, maxLevel: boolean) {
    let level = 0;
    switch(currentAscension) {
        case 0:
            if (maxLevel) {
                level = 20;
            } else {
                level = 1;
            }
            return level;
        case 1:
            if (maxLevel) {
                level = 40;
            } else {
                level = 20;
            }
            return level;
        case 2:
            if (maxLevel) {
                level = 50;
            } else {
                level = 40;
            }
            return level;
        case 3:
            if (maxLevel) {
                level = 60;
            } else {
                level = 50;
            }
            return level;
        case 4:
            if (maxLevel) {
                level = 70;
            } else {
                level = 60;
            }
            return level;
        case 5:
            if (maxLevel) {
                level = 80;
            } else {
                level = 70;
            }
            return level;
        case 6:
            if (maxLevel) {
                level = 90;
            } else {
                level = 80;
            }
            return level;
    }
}