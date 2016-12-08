describe('Users factory', function() {
  var Users;

  // The array od users our factory with provide us

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
  // Before each test load our api.users module
  beforeEach(angular.mock.module('api.users'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_Users_) {
    Users = _Users_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(Users).toBeDefined();
  });

  // A set of test for our Users.all() method
  describe('.all()', function() {
    // A simple test to verify the method all exists
    it('should exist', function() {
      expect(Users.all).toBeDefined();
    });

    // A test to verify that calling all() returns the array of users above
    it('should return a hard-coded list of users', function() {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById()', function() {
    // A simple test to verify the method findById exists
    it('should exist', function() {
      expect(Users.findById).toBeDefined();
    });
  });

});