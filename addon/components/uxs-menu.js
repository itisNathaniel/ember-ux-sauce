import Component from '@ember/component';
import layout from '../templates/components/uxs-menu';
import Alignable from 'ember-ux-sauce/mixins/alignable';
import Visible from 'ember-ux-sauce/mixins/visible';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  set
} from '@ember/object';

/**
  Display lists of links and actions in a menu

  ```hbs
  {{#uxs-menu as |menu|}}
    {{menu.link "Home" "index"}}
    {{menu.item "Maps"}}
    {{menu.item "Books"}}
    {{menu.item "Flights"}}
    {{menu.item "Apps"}}
  {{/uxs-menu}}
  ```

  @class UXSMenu
  @yield {Hash} menu
  @yield {Component} menu.subheading uxs-subheading
  @yield {Component} menu.item uxs-menu/item
  @yield {Component} menu.link uxs-menu/link
  @yield {Component} menu.div uxs-div
*/
export default Component.extend(BEMComponent, Alignable, Testable, Visible, {
  layout,
  //
  // Arguments
  // ---------
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-menu"
    @public
   */
  base: 'uxs-menu',
  /**
    If true, the menu will include a border

    @argument bordered
    @type     boolean
    @default  true
    @public
   */
  bordered: true,
  /**
    If true, the menu will be displayed horizontally

    @argument horizontal
    @type     boolean
    @default  false
    @public
   */
  horizontal: false,
  /**
    Set the style of the component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  /**
    The text align direction, "left", "center", "right" or "justified". Defaults to no alignment (inheret)

    @argument align
    @default  null
    @type     String
  */
  /**
    If set to true the menu items will be rendered small (detail) size

    @argument detail
    @default false
    @type Boolean
  */
  detail: false,
  /**
    If set to true the menu items & links will include a left padding to account for icons.

    @argument hasLeftIcon
    @default false
    @type Boolean
  */
  hasLeftIcon: false,
  /**
    If set to true the menu items & links will include a right padding to account for icons.

    @argument hasRightIcon
    @default false
    @type Boolean
  */
  hasRightIcon: false,
  /**
    If set to true the menu items & links will include padding to account for secondary text.

    @argument hasSecondaryText
    @default false
    @type Boolean
  */
  hasSecondaryText: false,

  /**
    The css display value of the root element
    when it is visible.

    Defaults to _flex-

    @argument visibleDisplayType
    @default  'flex'
    @type     String
    @public
  */
  visibleDisplayType: 'flex',

  /**
    Set to true to set a display class on the root.
    The class used will depend on the value of _visibleDisplayType_
    Default is _flex_

    Pass in a media query code to display visible at a break point.
    e.g. visible="md" will add the md:flex class
    @argument visible
    @default  null
    @type     String
    @public
  */
  visible: null,

  /**
    Set to true to set a hidden class on the root.
    e.g. _hidden_

    Pass in a media query code to hide at a break point.
    e.g. visible="lg" will add the lg:hidden class
    @argument hidden
    @default  null
    @type     String
    @public
  */
  hidden: null,
  // Methods
  init() {
    this.registerModifiers([
      'detail',
      'horizontal',
      'bordered',
      '*style'
    ])
    this._super(...arguments);
  },
  // Actions
  actions: {
    closeMobileNav() {
      set(this, 'isShowingNav', false);
      return true
    }
  }
});