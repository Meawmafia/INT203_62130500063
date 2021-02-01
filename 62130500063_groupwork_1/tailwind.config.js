const colors = require('tailwindcss/colors')
module.exports = {
    theme: {
        textColor: theme => theme('colors'),
        textColor: {
          'primary': '#60daff',
          'secondary': '#ffed4a',
          'danger': '#e3342f',
        }
       }
}