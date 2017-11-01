/**
 * Created by liumapp on ${DATE}.
 * E-mail:liumapp.com@gmail.com
 * home-page:http://www.liumapp.com
 */
var jwt = {}
var token = null

jwt.install = function (Vue , options) {

    var opt = {
        store: null
    }

    for (property in options) {
        opt[property] = options[property]
    }

    Vue.prototype.$token = function (tips , type) {
        console.log('tips is :')
        console.log(tips)
        console.log('type is :')
        console.log(type)
        console.log('store is :')
        console.log(opt.store)

        token = 'JIJDFUEWHADSJFIJEOXJFSWDF.234IJFIOWEJFOIJWKSDJOFIJEIJFWFOKJSOKFJSODKJFOWEJFKSDLF.IKJFOIDU234235IJFOIWJFOIJDSIOFJHWOEIF'

        // opt.store.commit()
    }

    Vue.prototype.token = token


}

module.exports = jwt