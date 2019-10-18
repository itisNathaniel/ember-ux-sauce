import Component from '@ember/component';
import layout from '../templates/components/uxs-content';
import Textable from '../mixins/textable';
import {
  computed
} from '@ember/object';

/**
  A typographic component to render content text

  ```hbs
  {{uxs-content "Lorem ipsum dolar" 2}}

  {{#uxs-content scale=2}}Lorem ipsum dolar"{{/uxs-content}}
  ```

  @class UXSHeading
*/
export default Component.extend(Textable, {
  //
  // Properties
  // ---------
  /**
    The BEM base name for this component: "subtitle-x"

    @property base
    @type     String
    @default  "content"
    @public
   */
  base: computed('scale', function() {
    return `body-${this.scale}`;
  }),

  scale: 1,
  layout
}).reopenClass({
  positionalParams: ['text', 'scale'],
});