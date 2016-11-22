/* 
 * @Controller : categoryController
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';


app
        .controller("categoryIndex", function($scope){
            
        })
        .controller("categoryList", function($scope, categoryProvider){
            $scope.categories = categoryProvider.getCategories();
        })
        .controller("categoryCreate", function($scope){
            
        })
        .controller("categoryRemove", function($scope){
            
        })
;