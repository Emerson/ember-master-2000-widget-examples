import Ember from 'ember';
const {oneWay} = Ember.computed;

export default Ember.TextField.extend({

  options: oneWay('widgetAttrs.options'),

  didInsertElement() {
    this.$select = $(this.element).selectize({
      options: this.get('options'),
      dataAttr: 'value',
      labelField: 'label'
    })[0];
  },

  didUpdateAttrs(attrs) {
    if(this.$select.selectize.getValue() !== this.get('value')) {
      this.$select.selectize.setValue(this.get('value'))
    }
  },

  willDestroyElement() {
    this.$select.selectize.destroy()
  }

});
