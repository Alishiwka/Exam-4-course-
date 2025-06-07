const users = require('./src/data/users/users')

const authMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res
            .status(401)
            .json({message: 'Unauthorized'})
    }

    // Основная логика
    const [email, password] = authHeader.split(':')
    const user = users.find(u => 
        email === u.email && password === u.password
    )

    if (!user){
        return res
            .status(403)
            .json({message: 'Invalid email or password'})
    }

    next();
}

module.exports = authMiddleware 