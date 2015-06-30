/**
 * Created by kyle on 2015/6/26.
 */
requirejs.config({
    baseUrl:'/static/js',
    paths:{
        'react':'lib/react',
        'react-bootstrap':'lib/react-bootstrap',
        'react-router':'lib/ReactRouter',
        'director':'lib/director',
        'reflux':'lib/reflux',
        'reqwest':'lib/reqwest'
    },
    shim:{
        director:{
            exports: 'Router'
        },
        'react-bootstrap':['react']
    }
});
requirejs(['react','react-bootstrap', 'router'],function(){
    "use strict";

});