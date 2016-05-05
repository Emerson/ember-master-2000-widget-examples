import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fm-widgets/hotselect', 'Integration | Component | fm widgets/hotselect', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fm-widgets/hotselect}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fm-widgets/hotselect}}
      template block text
    {{/fm-widgets/hotselect}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
