import { Template } from 'meteor/templating';
import './main.html';
import { Meteor } from 'meteor/meteor';

Template.hello.events({
  'click button'() {
    Meteor.call("underscoreTest")
  },
});
