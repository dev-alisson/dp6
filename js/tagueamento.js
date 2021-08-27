/*
Variables
*/

const userID = 'UA-206106142-1'

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