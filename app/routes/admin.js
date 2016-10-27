import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },
  actions: {
    deleteBlog(blog) {
      if(confirm("Are you sure you want to delete this blog?")) {
        var comment_deletions = blog.get('comments').map(function(comment) {
          return comment.destroyRecord();
        });
        Ember.RSVP.all(comment_deletions).then(function() {
          return blog.destroyRecord();
        });
        this.transitionTo('admin');
      }
    },
    saveBlog(params) {
      var newBlog = this.store.createRecord('blog', params);
      newBlog.save();
      this.transitionTo('admin');
    }
  }
});
