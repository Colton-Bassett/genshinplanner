const handleNumberPicker = (numberPicker: number, type: string, setNumberPicker: any, otherNumberPicker: number, setOtherNumberPicker: any, current: boolean) => {
        let num = numberPicker;
        let otherNum = otherNumberPicker;
        console.log("handleNumberPicker() numberPicker:", numberPicker);
        console.log("handleNumberPicker() otherNumberPicker:", otherNumberPicker);
        switch(type) {
            case "subtract":
                if (num <= 1) {
                    // do nothing
                    return;
                }
                if (!current) {
                    // desired numberPicker
                    if (otherNum >= num) {
                        num -= 1;
                        otherNum -= 1;
                        setNumberPicker(num);
                        setOtherNumberPicker(num);
                        return
                    }
                }
                num -= 1;
                setNumberPicker(num);
                return;
            case "add":
                if (num >= 10) {
                    // do nothing
                    return;
                }
                if (current) {
                    // current numberPicker
                    if (num >= otherNum) {
                        num += 1;
                        otherNum += 1;
                        setNumberPicker(num);
                        setOtherNumberPicker(num);
                        return
                    }
                }
                num += 1;
                setNumberPicker(num);
                return;
        }
}
export default handleNumberPicker;