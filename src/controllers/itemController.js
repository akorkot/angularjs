/* 
 * @Controller : categoryController
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

app
        .controller("itemIndex", function($scope){
            
        })
        .controller("itemList", function($scope, itemProvider){
            $scope.items = itemProvider.getItems();
        })
        .controller("itemCreate", function($scope, categoryProvider){
            $scope.categories = categoryProvider.getCategories();
        })
        .controller("itemRemove", function($scope){
            
        })
;