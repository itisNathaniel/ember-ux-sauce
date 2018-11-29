import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  items: computed(function() {
    return [{
        title: "Item One",
        location: "United Kingdom",
        email: "foo@example.com",
        count: 7,
      },
      {
        title: "Item Two",
        location: "United Kingdom",
        email: "bar@example.com",
        count: 99,
      },
      {
        title: "Item Three",
        location: "France",
        email: "boop@example.com",
        count: 36,
      },
    ]
  }),
});