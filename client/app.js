import angular from 'angular';
import Components from './components';
import appComponent from './app.component';
angular
	.module('app', [
		Components.name
	])
	.component('app', appComponent);

angular
	.element(document)
		.ready(() => {
			angular.bootstrap(document, ['app'], {strictDi: true})
		});