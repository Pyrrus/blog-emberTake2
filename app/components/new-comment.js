import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(blog) {
     var params = {
       author: this.get('author'),
       rating: this.get('rating'),
       content: this.get('content'),
       blog: blog
     };
     this.sendAction('saveComment', params, this.get('id'));
   }
  }
});
