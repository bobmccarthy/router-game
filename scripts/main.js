'use strict';

var Router = Backbone.Router.extend({
	routes: {
		'loading' : 'loading',
		'menu' : 'menu',
		'play': 'play',
		'leaders': 'leaders',
		'settings': 'settings'

	},
	loading: function(){
		$('section').hide();
		$('#loading').show();
	},
	menu: function(){
		$('section').hide();
		$('#menu').show();
	},
	play: function(){
		$('section').hide();
		$('#play').show();
	},
	leaders: function(){
		$('section').hide();
		$('#leaders').show();
	},
	settings: function(){
		$('section').hide();
		$('#settings').show();
	}


});

var page = new Router();
Backbone.history.start();


window.onload =function(){
		page.navigate('loading', {trigger: true});
	window.setTimeout(function(){
		page.navigate('menu', {trigger:true})
	}, 3000);

}
