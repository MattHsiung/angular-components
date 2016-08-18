class controller {
	constructor(HomeService) {
		this.HomeService = HomeService;
	}
	$onInit() {
		this.name = 'Home';
		this.isConnected = this.HomeService.name;
	}
}
controller.$inject = ['HomeService']

export default {
	template:`
		<div>
			{{$ctrl.name}} component!
			<br/>
			{{$ctrl.isConnected}} is connected.
		</div>
	`,
	controller
}