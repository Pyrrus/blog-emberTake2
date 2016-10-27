import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteBlog(blog) {
      this.sendAction('deleteBlog', blog);
    }
  }
});
