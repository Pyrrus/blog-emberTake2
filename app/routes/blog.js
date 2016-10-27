import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      blogs: this.store.findRecord('blog', params.blog_id),
      comments: this.store.findAll('comments')
    });
  },
  actions: {
    saveComment(params, id) {
      var newComment = this.store.createRecord('comments', params);
      newComment.save();
      this.transitionTo('/blog/' + id);
    }
  }
});