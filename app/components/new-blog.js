import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },
    saveBlog() {
      var params = {
        headline: this.get('headline') ? this.get('headline') : "Please update this!",
        author: this.get('author') ? this.get('author') : "Please update this!",
        content: this.get('content') ? this.get('content') : "Please update this!",
      };
      this.set('addNewBlog', false);
      this.sendAction('saveBlog', params);
    }
  },
  beforeModel: function(){
    this._super(...arguments);
    if (typeof tinymce == 'undefined'){
      return Ember.$.getScript('//cdn.tinymce.com/4/tinymce.min.js');
    }
  }
});
