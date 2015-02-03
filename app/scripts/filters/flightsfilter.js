'use strict';

angular.module('thoughtworksApp')
  .filter('filterFlights',['$filter',function ($filter) {
    return function (items, keyObj) {
      var filterObj = {
          data:items,
          filteredData:[],
          applyFilter : function(query,key){
            var fData = [];
            //unfiltered data at the start
            if(this.filteredData.length === 0){
              this.filteredData = this.data;
            }
            if(query){              
              var fObj = {};         
              if(!angular.isArray(query)){
                fObj[key] = query;
                angular.forEach(fObj, function(fObj, i){
                        fData = fData.concat(
                          $filter('filter')
                          (this.filteredData,fObj));
                    }, this);
                console.log(this.filteredData);
              }
              else if(angular.isArray(query)){
                console.log(query);
                if(query.length > 0){ 
                  for(var i=0;i<obj.length;i++){
                    if(angular.isDefined(query[i])){
                      fObj[key] = query[i];
                      //fData = fData.concat($filter('filter')(this.filteredData,fObj));
                      angular.forEach(fObj, function(fObj, i){
                              fData = fData.concat(
                                $filter('filter')
                                (this.filteredData,fObj));
                          }, this);
                    }
                  }
                  
                }                   
              }                 
              if(fData.length > 0){
                this.filteredData = fData;
              }
              else{
                this.filteredData;
              }
            }
          }
      };

      if(keyObj){
        angular.forEach(keyObj,function(query,key){
          filterObj.applyFilter(query,key);          
        });     
      }
      
      return filterObj.filteredData;      
    }
  }])