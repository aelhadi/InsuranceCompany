(function(){
	"use strict";
	
	angular
		.module('app', ['ngMaterial', 'md-steppers','ngMessages', 'coreModule', 'policyModule'])
		.config(function($mdThemingProvider) {
				$mdThemingProvider.theme('docs-dark')
				});

})();


