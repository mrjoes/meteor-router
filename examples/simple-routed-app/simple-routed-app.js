if (Meteor.is_client) {
  
//         this.filter(this.require_login, {only: ['welcome']});
  
// require_login: function(page) {
//   var username = Session.get('username');
//   if (username) {
//     return page;
//   } else {
//     return 'sign_in';
//   }
// },
  
  Meteor.Router.add({
    '/': 'home',
    '/welcome': 'welcome'
  });
  
  Template.sign_in.events = {
    'submit form': function(e) {
      e.preventDefault();
      Session.set('username', $(e.target).find('[name=username]').val())
    }
  }
  
  Template.home.events = {
    'click .welcome': function(e) {
      e.preventDefault();
      Meteor.Router.to('/welcome');
    }
  }
  
  Template.welcome.username = function() { return Session.get('username'); }
  Template.welcome.events = {
    'click .logout': function(e) {
      e.preventDefault();
      Session.set('username', false);
    },
    'click .home': function(e) { 
      e.preventDefault();
      Meteor.Router.to('/');
    }
  }

}
