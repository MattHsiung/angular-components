export default class service {
	constructor($http) {
		this.name = 'Home Service';
		this.$http = $http;
	}
}
service.$inject = ['$http'];