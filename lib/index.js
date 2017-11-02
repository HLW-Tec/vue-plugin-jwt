/**
 * Created by liumapp on ${DATE}.
 * E-mail:liumapp.com@gmail.com
 * home-page:http://www.liumapp.com
 */
var jwt = {}

jwt.install = function (Vue , options) {

    var opt = {
        defaultType: 'generateToken',
        store: null,
        url: null
    }

    for (property in options) {
        opt[property] = options[property]
    }

    Vue.prototype.$jwt = function (tips, type) {

        var curType = type ? type : opt.defaultType

        switch (curType) {
            case 'generateToken':
                generateToken()
                break;
            case 'chkToken':
                return chkToken()
            default:
                console.log('get the wrong type !')
        }

    }

    ['generateToken', 'chkToken'].forEach(function (type){
        Vue.prototype.$jwt[type] = function (tips) {
            return Vue.prototype.$jwt(tips , type)
        }
    })

    var generateToken = function () {
        var token = 'JIJDFUEWHADSJFIJEOXJFSWDF.234IJFIOWEJFOIJWKSDJOFIJEIJFWFOKJSOKFJSODKJFOWEJFKSDLF.IKJFOIDU234235IJFOIWJFOIJDSIOFJHWOEIF'

        opt.store.commit('setToken' , {
            token: token
        })
    }

    var chkToken = function () {
        return true
    }

}

module.exports = jwt