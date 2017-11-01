/**
 * Created by liumapp on ${DATE}.
 * E-mail:liumapp.com@gmail.com
 * home-page:http://www.liumapp.com
 */
var jwt = {}
var token = null

jwt.install = function (Vue , options) {

    Vue.prototype.getToken = function () {
        token = 'aasdfe'
    }

    Vue.prototype.token = token


}

module.exports = jwt