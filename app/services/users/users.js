(function() {
  'use strict';

  // Creating the module and factory we referenced in the beforeEach blocks in our test file
  angular.module('api.users', [])
  .factory('Users', function() {
    var Users = {};
    var userList = [
      {
        id: '1',
        name: 'Chad',
        role: 'Software Engineer',
        location: 'Salt Lake City',
        twitter: 'gryffs'
      },
      {
        id: '2',
        name: 'Jill',
        role: 'Domestic Engineer',
        location: 'Salt Lake City',
        twitter: 'householdsix'
      },
      {
        id: '3',
        name: 'Haley',
        role: 'Artist',
        location: 'Salt Lake City',
        twitter: 'hintohaley'
      },
      {
        id: '4',
        name: 'Bill',
        role: 'Software Engineer',
        location: 'Springfield',
        twitter: 'toomanybills'
      }
    ];

    Users.all = function() {

      // Returning the array of users.  Eventually this will be an API call.
      return userList;
    };

    return Users;
  })
})();