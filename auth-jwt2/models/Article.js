const {Schema, model} = require('mongoose')


// Return today date and time
const currentTime = new Date()

// returns the month (from 0 to 11)
const month = currentTime.getMonth() + 1

// returns the day of the month (from 1 to 31)
const day = currentTime.getDate()

// returns the year (four digits)
const year = currentTime.getFullYear()


const Article = new Schema({
    title: {type: String, require: true},
    user: {type: String, required: true},
    content: {type: String, require: true},
    teg: {type: String, require: true},
    date: {type: String, default: month + "/" + day + "/" + year}
})

module.exports = model('Article', Article)