import Component from '@ember/component';
import layout from '../templates/components/uxs-nav-item';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

const NavItem = Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-nav__item',
  layout,
});

NavItem.reopenClass({
  positionalParams: ['textLabel']
});

export default NavItem;