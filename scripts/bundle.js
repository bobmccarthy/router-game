(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Router = Backbone.Router.extend({
	routes: {
		'loading': 'loading',
		'menu': 'menu',
		'play': 'play',
		'leaders': 'leaders',
		'settings': 'settings'

	},
	loading: function loading() {
		$('section').hide();
		$('#loading').show();
	},
	menu: function menu() {
		$('section').hide();
		$('#menu').show();
	},
	play: function play() {
		$('section').hide();
		$('#play').show();
	},
	leaders: function leaders() {
		$('section').hide();
		$('#leaders').show();
	},
	settings: function settings() {
		$('section').hide();
		$('#settings').show();
	}

});

var page = new Router();
Backbone.history.start();

window.onload = function () {
	page.navigate('loading', { trigger: true });
	window.setTimeout(function () {
		page.navigate('menu', { trigger: true });
	}, 3000);
};

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map