/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

var categories = [
    {"id" : 1, "name" : "films"},
    {"id" : 2, "name" : "musiques"},
    {"id" : 3, "name" : "series"}
];

app
        .service("categoryProvider", function(){
           this.getCategories = function (){
               return categories;
           } 
        });
