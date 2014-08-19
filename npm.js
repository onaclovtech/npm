//https://registry.npmjs.org/keyword will return the json of all results containing keyword
/*
   npm.js v0.0.1
   npm angular service
   Written by Tyson Bailey
*/
  angular.module('npm', []).factory('$npm', ['$http',
      function($http) {
          return {
              search: function(query, page_limit) {
                  var method = 'GET';
                  var url = "https://registry.npmjs.org/-/_view/byKeyword?startkey=[" + query + "]&endkey=[" + query + ",{}]&group_level=4";
                  return $http({
                      method: method,
                      url: url +
                           query // +
                          //"&page_limit=" + page_limit // Page Limit not implemented yet
                  });
              }
          };
      }
  ]);
  
  // needs rearranging to pm.search.keyword() and pm.search.package I think
  
//https://registry.npmjs.org/-/_view/byKeyword?startkey=[%22roku%22]&endkey=[%22roku%22,{}]&group_level=3
