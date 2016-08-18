import Angular from 'angular';
import Home from './home';
import Item from './item';

export default Angular.module('app.components', [
	Home.name,
	Item.name
])
