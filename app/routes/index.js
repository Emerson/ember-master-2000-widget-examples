import Ember from 'ember';

function options() {
  return [
    {label: 'Toronto', value: 'TOR'},
    {label: 'Montréal', value: 'MTL'},
    {label: 'Vancouver', value: 'VAN'}
  ];
}

export default Ember.Route.extend({
  model: ()=> {
    return Ember.Object.create({
      record: {
        name: '',
        hotselect: [],
        startDate: null,
        howHappy: 50
      },
      options: options()
    });
  },

  actions: {
    setHotselect() {
      this.currentModel.set('record.hotselect', 'TOR');
    },
    setStartDate() {
      this.currentModel.set('record.startDate', '06/22/1983');
    },
    setHowHappy() {
      this.currentModel.set('record.howHappy', 78);
    },
    submit() {
      this.transitionTo('thanks');
    }
  }
});
