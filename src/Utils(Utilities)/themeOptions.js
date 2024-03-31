// npm i react-select
// const darkTheme = {
//     label : 'Dark',
//     background:'var(--mediumblue)',
//     textColor:'var(--pink)',
//     typeBoxText:'grey'
// }

// const redTheme = {
//     label : 'Red',
//     background:'var(--red)',
//     textColor:'var(--yellow)',
//     typeBoxText:'pink'
// }

// // Object inside array
// export const themeOptions = [
//     {label:'Dark', value: darkTheme},
//     {label:'Red', value: redTheme}
// ]

const futureFunkTheme = {
    label: "Future Funk",
    background: "#2E1A47",
    textColor: "#F8F9F0",
    typeBoxText: "#C18FFF",
    stats: "#F8F9F0"
}
const darkBlue = {
        label : 'DarkBlue',
        background:'var(--mediumblue)',
        textColor:'var(--pink)',
        typeBoxText:'grey'
}

const darkTheme = {
    label: 'Dark',
    background: '#111',
    textColor: '#F8F9F0',
    typeBoxText: '#5A5A5A'
}

const redTheme = {
    label: 'Red',
    background: '#d72631',
    textColor: '#a2d5c6',
    typeBoxText: '#077b8a '
}
const dolfinTheme = {
    label: 'Blue Dolfin',
    background: '#003950',
    textColor: '#00e3fe',
    typeBoxText: '#ffcefb'
}
const brazeeTheme = {
    label: 'Brazee',
    background: '#e8d5c4',
    textColor: '#3e99b9',
    typeBoxText: '#767600'
}
const amberTheme = {
    label: 'amber',
    background: 'yellow',
    textColor: 'orange ',
    typeBoxText: '#3a98b9'
}
const fledging = {
    label: 'fledging',
    background: '#3B363F',
    textColor: '#FC6E83',
    typeBoxText: '#8E5568'
}
const mustadBlackTheme = {
    label: 'Mustard and black',
    background: '#f3ca20 ',
    textColor: '#111 ',
    typeBoxText: 'white'
   
}
const superUserTheme = {
    label: 'Super User',
    background: '#262A33',
    textColor: '#43FFAF',
    typeBoxText: '#526777'
}

const darkMagic = {
    label: 'Dark Magic',
    background: '#091F2C',
    textColor: '#A286B8',
    typeBoxText: '#91E4D1',
}

const bentoTheme = {
    label:"Bento",
    background: "#2D394D",
    textColor: "#FF7A90",
    typeBoxText: "#4A768D",
    stats: "#FF7A90"
}

const aetherTheme = {
    label: "Aether",
    background: "#101820",
    textColor: "#EEDAEA",
    typeBoxText: "#CF6BDD",
    stats: "#EEDAEA"
}
const goldTheme = {
    label: 'Gold, charcoal and grey',
    background: '#ef9d10',
    textColor: '#3b4d61',
    typeBoxText: '#6b7b8c'
}


export const themeOptions = [
    {value: futureFunkTheme, label: "Future Funk"},
    {label:'DarkBlue', value: darkBlue},
    {value: darkMagic, label: 'Dark Magic'},
    { label: 'Fledging', value: fledging},
    {value: superUserTheme, label: 'Super User'},
    {value: bentoTheme, label: "Bento"},
    {value: aetherTheme, label: "Aether"},
    {value: darkTheme , label: 'Dark'},
    {value: redTheme, label: 'Red sea-foam' },
    { label: 'Blue Dolfin', value: dolfinTheme },
    { label: 'Brazee', value: brazeeTheme },
    { label: 'Amber', value: amberTheme },
    { label: 'Mustard and black', value: mustadBlackTheme },
    { label: 'Gold, charcoal and grey', value: goldTheme }
]

// WPM = (Corrected Char / 5)/ Time (in mins)
// Accuracy = (Correct Words Typed / Total Words Typed)*100
// Correct Chars/ Incorrect Chars/ Missed Chars/Extra