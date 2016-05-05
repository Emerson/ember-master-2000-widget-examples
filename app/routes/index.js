import Ember from 'ember';

function options() {
  return [
    {label: 'Toronto', value: 'TOR'},
    {label: 'Montréal', value: 'MTL'},
    {label: 'Vancouver', value: 'VAN'}
  ];
}

export default Ember.Route.extend({
  setupController(controller){
    controller.set('model1', Ember.Object.create({
      record: {
        name: '',
        hotselect: [],
        startDate: null,
        howHappy: 50
      },
      options: options()
    }));

    controller.set('model2', Ember.Object.create({
      record: {
        name: '',
        hotselect: [],
        startDate: null,
        howHappy: 50
      },
      options: options()
    }));
  },
});
