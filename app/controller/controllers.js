function searchcontroller($scope,$http){
		$http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
		$http.get("data/DataDetails.json").
		success(function(data) 
		{
			$scope.docs=data;			
		});
		
		$scope.Details=function(index){
			$scope.Preview=$scope.docs[index].docURL;
			}
	}