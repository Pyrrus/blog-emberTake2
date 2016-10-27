import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blog', params.blog_id);
  },actions: {
    update(blog) {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        content: this.get('content'),
      };

      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          blog.set(key,params[key]);
        }
      });
      blog.save();
      this.transitionTo('/blog/' + blog.id);
    }
  }
});
