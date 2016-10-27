import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },
    saveBlog() {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        content: this.get('content'),
      };
      this.set('addNewBlog', false);
      this.sendAction('saveBlog', params);
    }
  }
});
