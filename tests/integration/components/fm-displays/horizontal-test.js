import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fm-displays/horizontal', 'Integration | Component | fm displays/horizontal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fm-displays/horizontal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fm-displays/horizontal}}
      template block text
    {{/fm-displays/horizontal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
