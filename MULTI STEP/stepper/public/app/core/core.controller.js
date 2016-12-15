(function () {
	"use strict";

	angular
		.module('coreModule')
		.controller('MainCtrl', MainCtrl);
<<<<<<< Updated upstream

	MainCtrl.$inject = ['$scope', '$q', '$timeout', '$state'];
	function MainCtrl($scope, $q, $timeout, $state) {

		var vm = this;
		$scope.myDate = new Date();

		$scope.choices = [];

		vm.states = ['destination', 'package', 'userinfo', 'payment'];
		vm.stateIdx = 0;

		$scope.addNewChoice = function () {
			var newItemNo = $scope.choices.length + 1;
=======
		
		MainCtrl.$inject = ['$window','$scope', '$q', '$timeout'];
		function MainCtrl($window, $scope, $q, $timeout){
			
			var vm = this;
			$scope.choices = [];
		  
		  $scope.addNewChoice = function() {
			var newItemNo = $scope.choices.length+1;
>>>>>>> Stashed changes
			$scope.choices.push($scope.choices.length);
		};

		$scope.removeChoice = function () {
			var lastItem = $scope.choices.length - 1;
			$scope.choices.splice(lastItem);
		};

		  $scope.userCount = function(){
			  var brKorisnika = vm.polisa.brOdraslih + vm.polisa.brDece;
			  vm.listaKorisnika = [];
			  
			  for(var i=1; i<brKorisnika; i++){
				  vm.listaKorisnika.push({ime: '', prezime: '', myDate: '', pasos: '', jmbg: '', pol: '', email: ''});
			  }
		  }
		  
			$scope.savePolicy = function(){
				$window.localStorage.polisy = vm.polisa;
	
			}
			
			vm.selectedStep = 0;
			vm.stepProgress = 1;
			vm.maxStep = 4;
			vm.showBusyText = false;
			vm.stepData = [
				{ step: 1, completed: false, optional: false, data: {} },
				{ step: 2, completed: false, optional: false, data: {} },
				{ step: 3, completed: false, optional: false, data: {} },
				{ step: 4, completed: false, optional: false, data: {} },

			];

		vm.enableNextStep = function nextStep() {
			//do not exceed into max step
			if (vm.selectedStep >= vm.maxStep) {
				return;
			}
			//do not increment vm.stepProgress when submitting from previously completed step
			if (vm.selectedStep === vm.stepProgress - 1) {
				vm.stepProgress = vm.stepProgress + 1;
			}
			vm.selectedStep = vm.selectedStep + 1;
			$state.go(vm.states[++vm.stateIdx]);
			
		}

		vm.moveToPreviousStep = function moveToPreviousStep() {
			if (vm.selectedStep > 0) {
				vm.selectedStep = vm.selectedStep - 1;
				$state.go(vm.states[--vm.stateIdx]);
			}
		}

			vm.submitCurrentStep = function submitCurrentStep(stepData, isSkip) {
				var deferred = $q.defer();
				vm.showBusyText = true;
				$scope.userCount();
				console.log('On before submit');
				//if (!stepData.completed && !isSkip) {
					if(!isSkip){
					//simulate $http
					$timeout(function () {
						vm.showBusyText = false;
						console.log('On submit success');
						deferred.resolve({ status: 200, statusText: 'success', data: {} });
						//move to next step when success
					   // stepData.completed = true;
						vm.enableNextStep();
					}, 1000)
				} else {
					vm.showBusyText = false;
					vm.enableNextStep();
				}
			}
		
			 paypal.Button.render({

					env: 'sandbox', // Specify 'sandbox' for the test environment //'production'

					style: {
						size: 'small',
						color: 'blue',
						shape: 'pill'
					},

					 client: {
								sandbox:    'AUlcGuyTEzEq-YB7nmrCi8MDumqrghQIlID387O1SFkEyVNSDvXoB7gpapZdDcSUmK5z_n6tQUcBWPa7',
								production: 'xxxxxxxxx'
					 },

					//TODO - redirections
					//https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/script-options/

					payment: function() {
						// Set up the payment here, when the buyer clicks on the button

						 var env    = this.props.env;
						 var client = this.props.client;

						return paypal.rest.payment.create(env, client, {
							transactions: [
								{
									amount: { total: vm.polisa.paket, currency: 'USD' }
								}
							]
						});

					},


					//commit: true, // Optional: show a 'Pay Now' button in the checkout flow

					onAuthorize: function(data, actions) {
						// Execute the payment here, when the buyer approves the transaction
						// Optional: display a confirmation page here
						return actions.payment.execute().then(function() {
							// Show a success page to the buyer
							console.log(">>> SUCCESS!");
							console.log(data);



						});

				   },

					onCancel: function(data, actions) {
						 // Show a cancel page or return to cart
						console.log(">>> CANCELED!");
						console.log(data);
					}

				}, '#paypal-button');
			
		}
	
})();