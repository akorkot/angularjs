/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

var items = [
    {"name" : "War dogs", "category_id" : 1},
    {"name" : "The mechanic", "category_id" : 1},
    {"name" : "Narcos", "category_id" : 3}
];;

app
        .service("itemProvider", function(){
           this.getItems = function (){
               return items;
           } 
        });
