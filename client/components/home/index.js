import Angular from 'angular';
import homeComponent from './home.component';
import homeService from './home.service';

const homeModule = Angular
	.module('home', [])
	.service('HomeService', homeService)
	.component('home', homeComponent);

export default homeModule;