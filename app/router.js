import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('admin', {path: "/admin/:token"});
  this.route('team', {path: "/team/:id"});
  this.route('game', {path: "/game/:id"});
  this.route('league', {path: "/league/:id"});
  this.route('what', {path: "*path"});
});

export default Router;
