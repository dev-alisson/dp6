/*
Variables
*/

const userID = 'UA-206106142-1'
const contact = document.querySelector('.js-contact')
const download = document.querySelector('.js-download')
const analysis = document.querySelectorAll('.js-analysis')
const fields = document.querySelectorAll('.js-field')
const form = document.querySelector('.js-form')

/*
Start
*/

ga('create', userID, 'auto')

/*
PageView
*/

ga('send', {
    hitType: 'pageview',
    page: location.pathname
})

/*
Events
*/

// Contact
contact.addEventListener('click', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
    })
})

// Download
download.addEventListener('click', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    })
})

// Analysis
analysis.forEach(element => {
    element.addEventListener('click', () => {
        ga('send', {
            hitType: 'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: element.dataset.name
        })
    })
})

// Fields
fields.forEach(element => {
    element.addEventListener('change', () => {
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: element.id,
            eventLabel: 'preencheu'
        })
    })
})

// Form
form.addEventListener('submit', () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
    })
})