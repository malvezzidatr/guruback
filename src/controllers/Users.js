import User from "../models/Users"

export default class UsersController {

    async teste(req, res) {
        res.send('Página inicial')
    }

    async createUser(req, res) {
        const { name, email } = req.body
        await User.create({ name, email })
        res.send('testsdsadsae')
    }
}
