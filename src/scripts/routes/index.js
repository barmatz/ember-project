(function () {
  'use strict';

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return [ 'red', 'yellow', 'blue' ];
    }
  });
}());