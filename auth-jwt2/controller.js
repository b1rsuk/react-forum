const Role = require('./models/Role.js')
const User = require('./models/User.js')
const Article = require('./models/Article.js')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");

const sendToEmail = async(id, email) => {
   const message = `<!DOCTYPE html>
    <html>
     <head>
      <meta charset="utf-8">
      <title>Кнопка</title>
     </head>
     <body>
        <a href="http://localhost:5000/auth/confirmation/?id=${id}">Активировать</a>
     </body>
    </html>`

    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: 'lolz@outlook.com',
        pass: process.env.OUTLOOK_PASS, 
      },
    })
    await transporter.sendMail({
      from: 'b1rsuk@outlook.com', 
      to: email, 
      subject: "Подтверждение BorsukTeam", 
      text: `BorsukTeam`, 
      html: message, 
    })
}

const generateAccessToken = (id, roles, username) => {
    const payload = {
        id,
        roles,
        username
    } 
    return jwt.sign(payload, process.env.KEY_JWT, {expiresIn: '24h'})
}
class controller {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return res.send(errors.array()[0].msg)
            const { username, password, email } = req.body
            console.log(username, "   ",password)
            const candidate = await User.findOne({username})
            if (candidate) return res.send('userExists')
            const hashPassword = bcrypt.hashSync(password, 3)
            const hashEmail = bcrypt.hashSync(email, 3) 
            const userRole = await Role.findOne({value: "ACTIVATION"})
            const user = new User({username, password: hashPassword, roles: [userRole.value], email: hashEmail})
            await user.save()
            sendToEmail(user.password, email)
            res.end(user.password)
        } catch(e) {
            console.log(e)
            res.send('error')
        }
    }
    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            console.log(username + '    ' + password)
            if (!user) return res.send('userNull')
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) return res.end('userNull')
            if (user.roles == "ACTIVATION") return res.end('ACTIVATION')
            if (user.roles == "BANNED") return res.end('BANNED')
            const token = generateAccessToken(user._id, user.roles, user.username)
            res.cookie('token', token, {
                maxAge: 24 * 60 * 60 * 1000, // 24 hours
                secure: true,
                httpOnly: true,
              })
            res.end()
        } catch(e) {
            res.end('error')
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.findOne()
            res.json(users)
        } catch(e) {
            console.log(e)
            res.status(400).json({message: 'getUser error'})
        }
    }
   async confirmation(req, res) {
       const id = req.query.id
       console.log(id)
       if(!id) return res.end('null')
       const filter = { password: id}
       const update = { roles: 'USER'}
       await User.findOneAndUpdate(filter, update, {
        new: true
      })
      res.end('Thank you')
   }

   async resend(req, res) {
    const { username, email} = req.body
    const candidate = await User.findOne({username})
    sendToEmail(candidate.password, email)
    res.end()
   }
    
   getDataUser(req, res) {
    const cookie = req.cookies.token
    if (!cookie) return res.send(false)
    const {roles, username} = jwt.verify(cookie, process.env.KEY_JWT)
    res.json({roles: roles, username: username})
   }
   
   async Article(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.send({"error": errors.array()[0].msg})
    const {title, user, teg, content} = req.body
    console.log(title, user, teg, content,)
    const abb = new Article({title: title, user: user, teg: teg, content: content})
    await abb.save()
    res.end()
   }

   async getContent(req, res) {
       const content = await Article.find()
       res.send(content)
   }

   async getArticle(req, res) {
    try {
       const article = await Article.findById(req.query.id)
    
       res.send(article.content)
    } catch (e) {
        console.log(e)
    }
   }

   async deleteArticle(req, res) {
       const { id } = req.body 
       console.log('id ' + id)
       await Article.findByIdAndDelete(id)
       res.end()
   }

   async banned(req, res) {
    const { name } = req.body
    const filter = { username: name}
    const update = { roles: 'BANNED' }
    await User.findOneAndUpdate(filter, update, {
        new: true
    })
    res.end()
   }

   logout(req, res) {
       res.clearCookie('token');
       res.end();
   }

} 
module.exports = new controller()