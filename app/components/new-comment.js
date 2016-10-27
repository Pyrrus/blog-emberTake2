import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(blog) {
     var params = {
       author: this.get('author') ? this.get('author') : "You for got something!!",
       rating: this.get('rating') ? this.get('rating') : 1,
       content: this.get('content') ? this.get('content') : "You for got something!!",
       blog: blog
     };
     this.sendAction('saveComment', params, this.get('id'));
   }
  }
});
