import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
