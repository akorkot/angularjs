/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

app
        .directive("itemDecorate", function(){
            return {
                "template" : "<b>{{ item.name}}</b> dans la catégorie {{ item.category_id }}"
            }
        })
;