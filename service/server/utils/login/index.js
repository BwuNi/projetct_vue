const online = require('./online')


module.exports = {
    checkUser(id) {
        return online.check(id)
    },
    login(user_name) {
        return online.sub(user_name)
    },
    logout(id) {
        return online.cancel(id)
    }
}