const defaultColor = {
    'N. Virginia': '#e6194b',
    Ohio: '#3cb44b',
    'N. California': '#e58e00',
    Oregon: '#4363d8',
    'Cape Town': '#16ab3e',
    'Hong Kong': '#008080',
    Mumbai: '#8a7299',
    Seoul: '#9a6324',
    Singapore: '#ccc8a0',
    Sydney: '#800000',
    Tokyo: '#669975',
    Central: '#f58231',
    Frankfurt: '#911eb4',
    Ireland: '#31a8a8',
    London: '#f032e6',
    Milan: '#a30f88',
    Paris: '#83ac08',
    Stockholm: '#c89898',
    Bahrain: '#808000',
    'São Paulo': '#b2977b',
    'Global': ''
}

const defaultGradientColor = {
    'Global': 'linear-gradient(to right, #0575e6, #159957)',
    Seoul: 'linear-gradient(to right, #b30423, #00009b)',
    London: 'linear-gradient(to right, #00205B, #EF3340, #075aaa)',
    Tokyo: 'linear-gradient(to right, #000, #e10000,#000)',
    Osaka: 'linear-gradient(to right, #000, #e10000,#000)',
    
}
const flagList = {
    Seoul: '🇰🇷',
    London: '🇬🇧',
    Central: '🇨🇦',
    'N. Virginia': '🇺🇸',
    Ohio: '🇺🇸',
    'N. California': '🇺🇸',
    Oregon: '🇺🇸',
    Tokyo: '🇯🇵',
    'Global': '🌍'
}

const useGradientColor = true
const darkMode = false
const region = document.querySelector('[data-testid="awsc-nav-regions-menu-button"]>span').innerText;
let flagEmoji = flagList[region]
let color = defaultColor[region]
let graidentColor = defaultGradientColor[region]

document.body.style.backgroundcolor = 'black'

console.log(region)

/* -------------------------------- darkmode -------------------------------- */
if (darkMode) {
    document.querySelector(".awsui").style.filter = "invert(90%) brightness(110%) saturate(150%) hue-rotate(180deg)"
}


/* ------------------------------- region emoji flag ------------------------------ */
document.querySelector('[data-testid="awsc-nav-regions-menu-button"]').insertAdjacentHTML("beforeBegin", "<span style='font-size: 1.8em;line-height: 1em;margin-right:0.2em'>" + flagEmoji + "</span>");

/* ------------------------- region Gradient header ------------------------- */
if (useGradientColor) {
    document.querySelector("#awsc-navigation-container>div").style.background = graidentColor;
} else {
    document.querySelector("#awsc-navigation-container>div").style.backgroundColor = color;
}
