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
        url: 'http://localhost:9080/api/',
        axios:null,
        jsonp:null,
        $:null
    };

    for (property in options) {
        opt[property] = options[property]
    };

    var instance = opt.axios.create({
        baseURL: opt.url,
        timeout: 3000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }

    });

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

    };

    ['generateToken', 'chkToken'].forEach(function (type){
        Vue.prototype.$jwt[type] = function (tips) {
            return Vue.prototype.$jwt(tips , type)
        }
    });

    var generateToken = function () {
        var token = 'JIJDFUEWHADSJFIJEOXJFSWDF.234IJFIOWEJFOIJWKSDJOFIJEIJFWFOKJSOKFJSODKJFOWEJFKSDLF.IKJFOIDU234235IJFOIWJFOIJDSIOFJHWOEIF'

        opt.$.ajax({
            type:"get",
            async:false,
            url:opt.url + 'login/test',
            dataType:'jsonp',
            jsonpCallback:'callback',
            success: function (json) {
                console.log(json)
            },
            error: function (error) {
                console.log('something wrong')
            }
        })

        opt.store.commit('setToken' , {
            token: token
        })
    };

    var callback = function (data) {
        console.log('this is callback')
    }

    var chkToken = function () {
        return true
    };


}

module.exports = jwt
