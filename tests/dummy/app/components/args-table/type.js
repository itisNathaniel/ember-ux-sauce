import Component from '@ember/component';

export default Component.extend({
  tagName: 'td',
}).reopenClass({
  positionalParams: ['type'],
});