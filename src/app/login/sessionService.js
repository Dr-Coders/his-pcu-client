// /**
//  * Created by HPkavin on 5/4/2017.
//  */
// 'use strict';
myapp.factory('sessionService',

    function($cookies) {
        return {
            setid: function (key, value) {
                return $cookies.put(key, value);
            },
            getid: function (key) {

                     return $cookies.get(key);

            },
            destroy: function (key) {
                // $http.post('data/destroy_session.php');
                return $cookies.remove(key);
            }
        }
    });