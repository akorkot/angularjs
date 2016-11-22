/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

app.config(function($routeProvider){
    $routeProvider
            .when("/items/", {
                controller : "itemList",
                templateUrl : "views/items/list.html"
            })
           .when("/items/create", {
                controller : "itemCreate",
                templateUrl : "views/items/create.html"
            });
    
});