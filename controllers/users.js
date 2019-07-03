const users = require('../data')

const listUsers = (req, res) => res.json(users)

const showUser = (req, res) => {
    const user = users.find(u => u.id == req.params.id)
    res.json(user)
}

const createUser = (req, res) => {
    const nextId = users.length + 1
    req.body.id = nextId
    users.push(req.body)
    res.json(users[nextId - 1])
}

const updateUser = (req, res) => {
    const user = users.find(u => u.id == req.params.id)
    Object.assign(user, req.body, { id: user.id })
    res.json(user)
}

const deleteUser = (req, res) => {
    const userIdx = users.findIndex(u => u.id == req.params.id)
    users.splice(userIdx, 1)
    res.json({
        deletedId: userIdx + 1
    })
}

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}
