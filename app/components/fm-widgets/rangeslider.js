import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    this.$slider = this.$('input')[0];
    this.$slider.oninput = this.updateValue.bind(this);
  },

  updateValue(e) {
    this.set('value', e.target.value);
  },

  max() {
    return parseInt(this.get('widgetAttrs.max'));
  },

  scale: Ember.computed('widgetAttrs.max', 'value', function() {
    return this.max() / 2;
  }),

  happyScale: Ember.computed('value', function() {
    let val = parseInt(this.get('value'));
    return (100 + val - 50) * 0.01;
  }),

  sadScale: Ember.computed('value', function() {
    let val = parseInt(this.get('value'));
    return (100 - val + 50) * 0.01;
  }),

  step: Ember.computed('widgetAttrs.step', function() {
    return this.get('widgetAttrs.step') || '1';
  })

});
