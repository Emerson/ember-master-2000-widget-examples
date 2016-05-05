import Ember from 'ember';

export default Ember.TextField.extend({

  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, 'setupDatepicker');
  },

  setupDatepicker() {
    this.$datepicker = $(this.element).datepicker();
  },

  willDestroyElement() {
    this.$datepicker.datepicker('destroy');
  }

});
