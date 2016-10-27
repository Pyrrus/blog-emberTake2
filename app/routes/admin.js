import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },
  actions: {
    deleteBlog(blog) {
      if(confirm("Are you sure you want to delete this blog?")) {
        blog.destroyRecord();
        this.transitionTo('admin');
      }
    }
  }
});
