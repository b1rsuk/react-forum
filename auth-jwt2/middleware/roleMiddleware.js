const jwt = require('jsonwebtoken')
module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') next()
        const message = 'Resufal'
        try {
            const token = req.cookies.token
            if(!token) return res.end('token') 
            const {roles: userRoles} = jwt.verify(token, process.env.KEY_JWT)
            let hasRole = false
            userRoles.map(role => {
                if (roles.includes(role)) hasRole = true
            })
            console.log('hasRole:  '  + hasRole)
            if (!hasRole) return res.end('hasRole')
            next()
        } catch (e) {
            console.log(e)
            return res.end(message)
        }
    }
}