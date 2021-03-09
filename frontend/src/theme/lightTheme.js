import hexRgb from 'hex-rgb';

const hexRgbAlpha = (hex, a) => {
    const alpha = a ? a : '1';
    const {red, green, blue} = hexRgb(hex);
    
    return `rgba(${red},${green},${blue},${alpha})`

}

const colors = {
    purples: {
        purple1: '#5d00ff',
        purple2: '#7b00ff',
        purple3: '#9330fc',
        purple4: '#ede3ff'


    },
    blues: {
        blue1: '#0061f2'

    },
    reds: {
        red1: '#ff9b94'
    },
    whites: {
        white1: '#fff',
        white2: '#fafafa',
        white3: '#f7f7f7'

    },
    blacks: {
        black1: '#000',
        black2: '#303030'

    }
}

const lightTheme = {
    sendButtonGradient1: colors.blues.blue1,
    sendButtonGradient2: colors.purples.purple1,
    dropDownArrowColor: colors.blacks.black1,
    dropDownHighLightGradient1: colors.purples.purple2,
    dropDownHighLightGradient2: colors.purples.purple1,
    dropDownItemsColors: colors.whites.white2,
    dropDownItemsBorder: colors.blacks.black2,
    plusButtonColor: colors.purples.purple1,
    minusButtonColor: colors.reds.red1,
    endpointBorderColor: colors.purples.purple1,
    endpointBackgroundColor: colors.purples.purple4,
    endpointFaderBackgroundColor: hexRgbAlpha(colors.purples.purple4, '0.9'),
    endpointFaderBackgroundColor2: hexRgbAlpha(colors.purples.purple4, '0.1'),
    endpointFaderBackgroundColor3: hexRgbAlpha(colors.purples.purple4, '0'),
    endpointFaderBackgroundButton: hexRgbAlpha(colors.purples.purple4, '1'),
    notifyBoxColor: colors.blues.blue1,
    sectionSpacer: '40px'

}

export default lightTheme;