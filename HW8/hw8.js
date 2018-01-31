// Code goes here

/*function changeColor(ele){
	if(ele.childNodes[0].getAttribute("class") == "glyphicon glyphicon-star-empty"){
		ele.childNodes[0].setAttribute("class", "glyphicon glyphicon-star");
	}
	else{
		ele.childNodes[0].setAttribute("class", "glyphicon glyphicon-star-empty");
	}
	
}*/


//var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);
var myApp = angular.module('myApp', []);

var kw_is_none = "";

var lat0;
var lng0;
window.onload=function(){
	getLocation();
}
function getLocation(){

	navigator.geolocation.getCurrentPosition(function(position){
		lat0 = position.coords.latitude;
		lng0 = position.coords.longitude;

	});
}


function MyController($scope, $http, $window) {
	//alert($window.localStorage.length);


	$scope.style_unstarred = {"color": "black", "text-shadow": "0 0 4px white"};
	$scope.style_starred = {"color": "yellow", "text-shadow": "0 0 4px yellow"};


	function showNextButton(x){
		if(x == "user") {
			document.getElementById("usernext").style.display = 'inline';
			//document.getElementById("next").style.margin = 'auto 0';
		}
		if(x == "page") {
			document.getElementById("pagenext").style.display = 'inline';
			//document.getElementById("next").style.margin = 'auto 0';
		}
		if(x == "event") {
			document.getElementById("eventnext").style.display = 'inline';
			//document.getElementById("next").style.margin = 'auto 0';
		}
		if(x == "place") {
			document.getElementById("placenext").style.display = 'inline';
			//document.getElementById("next").style.margin = 'auto 0';
		}
		if(x == "group") {
			document.getElementById("groupnext").style.display = 'inline';
			//document.getElementById("next").style.margin = 'auto 0';
		}
	}

	function hidNextButton(x){
		if(x == "user") {
			document.getElementById("usernext").style.display = 'none';
		}
		if(x == "page") {
			document.getElementById("pagenext").style.display = 'none';
		}
		if(x == "event") {
			document.getElementById("eventnext").style.display = 'none';
		}
		if(x == "place") {
			document.getElementById("placenext").style.display = 'none';
		}
		if(x == "group") {
			document.getElementById("groupnext").style.display = 'none';
		}
	}

	function showPreviousButton(x){
		if(x == "user") {
			document.getElementById("userprevious").style.display = 'inline';
		}
		if(x == "page") {
			document.getElementById("pageprevious").style.display = 'inline';
		}
		if(x == "event") {
			document.getElementById("eventprevious").style.display = 'inline';
		}
		if(x == "place") {
			document.getElementById("placeprevious").style.display = 'inline';
		}
		if(x == "group") {
			document.getElementById("groupprevious").style.display = 'inline';
		}
	}

	function hidPreviousButton(x){
		if(x == "user") {
			document.getElementById("userprevious").style.display = 'none';
		}
		if(x == "page") {
			document.getElementById("pageprevious").style.display = 'none';
		}
		if(x == "event") {
			document.getElementById("eventprevious").style.display = 'none';
		}
		if(x == "place") {
			document.getElementById("placeprevious").style.display = 'none';
		}
		if(x == "group") {
			document.getElementById("groupprevious").style.display = 'none';
		}
	}

	function showTitle() {
		if(document.getElementById("title_head").style.display == 'none') {
			document.getElementById("title_head").style.display = 'inline';
		}
	}

//$scope.sideBarDisplay = true;
	//$scope.toggleSideBar=function(){
	//	$scope.sideBarDisplay = $scope.sideBarDisplay == true ? false : true;
	//}
	//$scope.legStars = new Object();
	//$scope.billStars = new Object();
	//$scope.comStars = new Object();
	//Get all required data
	$scope.atDetail = 0;
	$scope.kwFunc = function(flag) {
		var kw = $scope.keyword;
		if(kw == null) {
			//alert("Please inpute keyword.");
			$(function () {
				$('[data-toggle="tooltip"]').tooltip('show');
			})
		} else if (kw == "") {
			//alert("Please inpute keyword.");

			$(function () {
				$('[data-toggle="tooltip"]').tooltip('show');
			})
		} else {

			$(function () {
				$('[data-toggle="tooltip"]').tooltip('destroy');
			})
			//
			hidden_main_bar();
			if($window.localStorage.length == 0) {
				//alert($window.localStorage.length);
				document.getElementById("favorites-show").style.display = 'none';
				//alert(document.getElementById("favorites-show").style.display);
			} else {
				document.getElementById("favorites-show").style.display = 'block';
			}

			//document.getElementById("title_head").style.display = 'block';
			document.getElementById("users-show").style.display = 'block';
			document.getElementById("pages-show").style.display = 'block';
			document.getElementById("events-show").style.display = 'block';
			document.getElementById("places-show").style.display = 'block';
			document.getElementById("groups-show").style.display = 'block';
			document.getElementById("favorites-show").style.display = 'block';
			getLocation();
			//showNextButton();
			//showPreviousButton();
			showTitle();

			//navigator.geolocation.getCurrentPosition(showPosition);

			if(flag == 1) {
				//alert(flag);
				$.ajax({
					url:'http://www-scf.usc.edu/~junbow/wangjunbohw/HW8/index.html',
					type:'GET',
				}).done(function() {
					document.getElementById("go_back").click();
					$scope.atDetail = 0;
				});
			}



			var lat = lat0;
			var lng = lng0;
			//alert('lat:' + lat+',long:'+lng);

			//--------------------users--------------------------
			$http({
				url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
				method: "GET",
				params: {users : 1, keywords : kw}
			}).then(function successCallback(response) {
				//$scope.userPage = response.data.paging;
				$scope.userJson = response.data.data;
				//$scope.userJson = $scope.userJson;
				//$scope.legStars = new Object()s;
				//alert(response.data);
				//console.log(response.data.data);
				//console.log(response.data.paging.next);
				//$scope.userJson = [1,2,3];
				//alert(response.data.data.data);
				//alert("hehe");
				//console.log(response.data.paging);
				//$scope.time = response.getTime()
					if(response.data.paging.next) {
						$scope.user_next_page_url = response.data.paging.next;
						showNextButton("user");
					} else {
						hidNextButton("user");
					}
					if(response.data.paging.previous) {
						$scope.user_pre_page_url = response.data.paging.previous;
						showPreviousButton("user");
					} else {
						hidPreviousButton("user");
					}
			}, function errorCallback(response) {
				//$scope.userJson = "users data access fail";
				//alert("users data access fail");
			});

			//--------------------pages---------------------------
			$http({
				url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
				method: "GET",
				params: {pages : 1, keywords : kw}
			}).then(function successCallback(response) {

				$scope.pageJson = response.data.data;
				$scope.user_id = response.data.data.id;
				console.log(response.data.data);
				console.log(response.data.data[0].id);

				if(response.data.paging.next) {
					$scope.page_next_page_url = response.data.paging.next;
					showNextButton("page");
				} else {
					hidNextButton("page");
				}
				if(response.data.paging.previous) {
					$scope.page_pre_page_url = response.data.paging.previous;
					showPreviousButton("page");
				} else {
					hidPreviousButton("page");
				}
			}, function errorCallback(response) {
				//$scope.userJson = "users data access fail";
				//alert("pages data access fail");
			});

			//--------------------events---------------------------
			$http({
				url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
				method: "GET",
				params: {events : 1, keywords : kw}
			}).then(function successCallback(response) {
//alert("event");
				$scope.eventJson = response.data.data;
				console.log(response.data.paging.next);
				if(response.data.paging != null) {

					if(response.data.paging.next) {
						$scope.event_next_page_url = response.data.paging.next;
						showNextButton("event");

					} else {
						hidNextButton("event");
					}
					if(response.data.paging.previous) {
						$scope.event_pre_page_url = response.data.paging.previous;
						showPreviousButton("event");
					} else {
						hidPreviousButton("event");
					}
				}

			}, function errorCallback(response) {
				//$scope.userJson = "users data access fail";
				//alert("events data access fail");
			});
//--------------------places---------------------------
			$http({
				url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
				method: "GET",
				params: {places : 1, keywords : kw, latitude:lat, longitude:lng }
			}).then(function successCallback(response) {

				$scope.placeJson = response.data.data;
				if(response.data.paging.next) {
					$scope.place_next_page_url = response.data.paging.next;
					showNextButton("place");
				} else {
					hidNextButton("place");
				}
				if(response.data.paging.previous) {
					$scope.place_pre_page_url = response.data.paging.previous;
					showPreviousButton("place");
				} else {
					hidPreviousButton("place");
				}
			}, function errorCallback(response) {
				//$scope.userJson = "users data access fail";
				//alert("places data access fail");
			});
			//--------------------groups---------------------------
			$http({
				url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
				method: "GET",
				params: {groups : 1, keywords : kw }
			}).then(function successCallback(response) {

				$scope.groupJson = response.data.data;
				//$scope.userJson = $scope.userJson;
				//$scope.legStars = new Object()s;
				//alert(response.data);
				//console.log(response.data.data);
				//$scope.userJson = [1,2,3];
				//alert(response.data.data.data);
				//alert("hehe");
				if(response.data.paging.next) {
					$scope.group_next_page_url = response.data.paging.next;
					showNextButton("group");
				} else {
					hidNextButton("group");
				}
				if(response.data.paging.previous) {
					$scope.group_pre_page_url = response.data.paging.previous;
					showPreviousButton("group");
				} else {
					hidPreviousButton("group");
				}
			}, function errorCallback(response) {
				//$scope.userJson = "users data access fail";
				//alert("groups data access fail");
			});
		}

	}


	$scope.resetForm = function(at_detail_flag) {
		document.getElementById('input_kw').value = "";
		$scope.keyword = "";
		$scope.userJson = {};
		$scope.pageJson = {};
		$scope.eventJson = {};
		$scope.placeJson = {};
		$scope.groupJson = {};
		$scope.favoriteInfo = {};
		$window.localStorage.clear();

		hidNextButton("user");
		hidNextButton("page");
		hidNextButton("event");
		hidNextButton("place");
		hidNextButton("group");
		hidPreviousButton("user");
		hidPreviousButton("page");
		hidPreviousButton("event");
		hidPreviousButton("place");
		hidPreviousButton("group");
		document.getElementById("users-show").style.display = 'none';
		document.getElementById("pages-show").style.display = 'none';
		document.getElementById("events-show").style.display = 'none';
		document.getElementById("places-show").style.display = 'none';
		document.getElementById("groups-show").style.display = 'none';
		document.getElementById("favorites-show").style.display = 'none';
		if(at_detail_flag == 1) {
			//alert(at_detail_flag);
			$.ajax({
				url:'http://www-scf.usc.edu/~junbow/wangjunbohw/HW8/index.html',
				type:'GET',
			}).done(function() {
				document.getElementById("go_back").click();
				$scope.atDetail = 2;
				//resetForm(at_detail_flag);
			});
		}
	}

	<!-- -------------usernextPage--------------- -->
	$scope.user_nextPage = function() {
		var kw = $scope.keyword;
		var user_next_url = $scope.user_next_page_url;
		//--------------------users--------------------------
		$http({
			url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
			method: "GET",
			params: {users : 1, keywords : kw, user_next_page : user_next_url}
		}).then(function successCallback(response) {
			//$scope.userPage = response.data.paging;
			$scope.userJson = response.data.data;
			//alert("usernext");
			console.log(user_next_url+"kkkkkkkk");

			if(response.data.paging.next != null) {
				$scope.user_next_page_url = response.data.paging.next;
				showNextButton("user");
			} else {
				hidNextButton("user");
			}
			if(response.data.paging.previous != null) {
				$scope.user_pre_page_url = response.data.paging.previous;
				showPreviousButton("user");
			} else {
				hidPreviousButton("user");
			}
		}, function errorCallback(response) {
			//$scope.userJson = "users data access fail";
			//alert("users data access fail");
		});
	}
	<!-- -------------userprePage--------------- -->
	$scope.user_prePage = function() {
		var kw = $scope.keyword;
		var user_pre_url = $scope.user_pre_page_url;

		$http({
			url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
			method: "GET",
			params: {users : 1, keywords : kw, user_pre_page : user_pre_url}
		}).then(function successCallback(response) {
			//$scope.userPage = response.data.paging;
			$scope.userJson = response.data.data;

			if(response.data.paging.next != null) {
				$scope.user_next_page_url = response.data.paging.next;
				showNextButton("user");
			} else {
				hidNextButton("user");
			}
			if(response.data.paging.previous != null) {
				$scope.user_pre_page_url = response.data.paging.previous;
				showPreviousButton("user");
			} else {
				hidPreviousButton("user");
			}
		}, function errorCallback(response) {
			//$scope.userJson = "users data access fail";
			//alert("users data access fail");
		});
	}

	<!-- -------------pagenextPage--------------- -->
	$scope.page_nextPage = function() {
		var kw = $scope.keyword;
		var page_next_url = $scope.page_next_page_url;

		$http({
			url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
			method: "GET",
			params: {pages : 1, keywords : kw, page_next_page : page_next_url}
		}).then(function successCallback(response) {
			//$scope.userPage = response.data.paging;
			$scope.pageJson = response.data.data;
			//console.log(user_next_url+"kkkkkkkk");

			if(response.data.paging.next != null) {
				$scope.page_next_page_url = response.data.paging.next;
				showNextButton();
			} else {
				hidNextButton("page");
			}
			if(response.data.paging.previous != null) {
				$scope.page_pre_page_url = response.data.paging.previous;
				showPreviousButton("page");
			} else {
				hidPreviousButton("page");
			}
		}, function errorCallback(response) {
			//$scope.userJson = "users data access fail";
			//alert("users data access fail");
		});
	}
	<!-- -------------pageprePage--------------- -->
	$scope.page_prePage = function() {

		var kw = $scope.keyword;
		var page_pre_url = $scope.page_pre_page_url;

		$http({
			url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
			method: "GET",
			params: {pages : 1, keywords : kw, page_pre_page : page_pre_url}
		}).then(function successCallback(response) {
			//$scope.userPage = response.data.paging;
			$scope.pageJson = response.data.data;

			if(response.data.paging.next != null) {

				$scope.page_next_page_url = response.data.paging.next;
				showNextButton("page");
			} else {
				hidNextButton("page");
			}
			if(response.data.paging.previous != null) {

				$scope.page_pre_page_url = response.data.paging.previous;
				showPreviousButton("page");
			} else {
				hidPreviousButton("page");
			}
		}, function errorCallback(response) {
			//$scope.userJson = "users data access fail";
			//alert("users data access fail");
		});
	}


	<!-- -------------eventnextPage--------------- -->
	$scope.event_nextPage = function() {
		var kw = $scope.keyword;
		var event_next_url = $scope.event_next_page_url;
		//--------------------users--------------------------
		$http({
			url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
			method: "GET",
			params: {events : 1, keywords : kw, event_next_page : event_next_url}
		}).then(function successCallback(response) {
			//$scope.userPage = response.data.paging;
			$scope.eventJson = response.data.data;
			//console.log(user_next_url+"kkkkkkkk");

			//console.log(event_next_url);

			//if(response.data.paging != null) {
				console.log(response.data.paging.next);
				if(response.data.paging.next != null) {
					$scope.event_next_page_url = response.data.paging.next;
					showNextButton("event");

					//alert("ddddddddddd");
				} else {
					//alert("mmmmm");
					hidNextButton("event");
				}
				if(response.data.paging.previous != null) {
					$scope.event_pre_page_url = response.data.paging.previous;
					showPreviousButton("event");
				} else {

					hidPreviousButton("event");
				}
			//}
		}, function errorCallback(response) {
			//$scope.userJson = "users data access fail";
			//alert("users data access fail");
		});
	}
	<!-- -------------eventprePage--------------- -->
	$scope.event_prePage = function() {
		var kw = $scope.keyword;
		var event_pre_url = $scope.event_pre_page_url;
		//--------------------users--------------------------
		$http({
			url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
			method: "GET",
			params: {events : 1, keywords : kw, event_pre_page : event_pre_url}
		}).then(function successCallback(response) {
			//$scope.userPage = response.data.paging;
			$scope.eventJson = response.data.data;

			if(response.data.paging.next != null) {
				$scope.event_next_page_url = response.data.paging.next;
				showNextButton("event");
			} else {
				hidNextButton("event");
			}
			if(response.data.paging.previous != null) {
				$scope.event_pre_page_url = response.data.paging.previous;
				showPreviousButton("event");
			} else {
				hidPreviousButton("event");
			}
		}, function errorCallback(response) {
			//$scope.userJson = "users data access fail";
			//alert("users data access fail");
		});
	}


	<!-- -------------placenextPage--------------- -->
	$scope.place_nextPage = function() {
		getLocation();
		var lat = lat0;
		var lng = lng0;
		var kw = $scope.keyword;
		var place_next_url = $scope.place_next_page_url;
		//--------------------users--------------------------
		$http({
			url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
			method: "GET",
			params: {places : 1, keywords : kw, latitude:lat, longitude:lng, place_next_page : place_next_url}
		}).then(function successCallback(response) {
			//$scope.userPage = response.data.paging;
			$scope.placeJson = response.data.data;
			console.log(place_next_url);

			if(response.data.paging.next) {

				$scope.place_next_page_url = response.data.paging.next;
				showNextButton("place");
			} else {
				hidNextButton("place");
			}
			if(response.data.paging.previous) {
				//alert("place");
				$scope.place_pre_page_url = response.data.paging.previous;
				showPreviousButton("place");
			} else {
				hidPreviousButton("place");
			}
		}, function errorCallback(response) {
			//$scope.userJson = "users data access fail";
			//alert("users data access fail");
		});
	}
	<!-- -------------placeprePage--------------- -->
	$scope.place_prePage = function() {
		getLocation();
		var lat = lat0;
		var lng = lng0;
		var kw = $scope.keyword;
		var place_pre_url = $scope.place_pre_page_url;
		//--------------------users--------------------------
		$http({
			url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
			method: "GET",
			params: {places : 1, keywords : kw, latitude:lat, longitude:lng, place_pre_page : place_pre_url}
		}).then(function successCallback(response) {
			//$scope.userPage = response.data.paging;
			$scope.placeJson = response.data.data;

			if(response.data.paging.next) {
				$scope.place_next_page_url = response.data.paging.next;
				showNextButton("place");
			} else {
				hidNextButton("place");
			}
			if(response.data.paging.previous) {
				$scope.place_pre_page_url = response.data.paging.previous;
				showPreviousButton("place");
			} else {
				hidPreviousButton("place");
			}
		}, function errorCallback(response) {
			//$scope.userJson = "users data access fail";
			//alert("users data access fail");
		});
	}

	<!-- -------------groupnextPage--------------- -->
	$scope.group_nextPage = function() {
		var kw = $scope.keyword;
		var group_next_url = $scope.group_next_page_url;
		//--------------------users--------------------------
		$http({
			url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
			method: "GET",
			params: {groups : 1, keywords : kw, group_next_page : group_next_url}
		}).then(function successCallback(response) {
			//$scope.userPage = response.data.paging;
			$scope.groupJson = response.data.data;
			console.log(group_next_url);
			//alert("usernext");
			//console.log(user_next_url+"kkkkkkkk");

			if(response.data.paging.next) {
				$scope.group_next_page_url = response.data.paging.next;
				showNextButton("group");
			} else {
				hidNextButton("group");
			}
			if(response.data.paging.previous) {
				$scope.group_pre_page_url = response.data.paging.previous;
				showPreviousButton("group");
			} else {
				hidPreviousButton("group");
			}
		}, function errorCallback(response) {
			//$scope.userJson = "users data access fail";
			//alert("users data access fail");
		});
	}
	<!-- -------------groupprePage--------------- -->
	$scope.group_prePage = function() {
		var kw = $scope.keyword;
		var group_pre_url = $scope.group_pre_page_url;

		$http({
			url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
			method: "GET",
			params: {groups : 1, keywords : kw, group_pre_page : group_pre_url}
		}).then(function successCallback(response) {
			//$scope.userPage = response.data.paging;
			$scope.groupJson = response.data.data;

			if(response.data.paging.next) {
				$scope.group_next_page_url = response.data.paging.next;
				showNextButton("group");
			} else {
				hidNextButton("group");
			}
			if(response.data.paging.previous) {
				$scope.group_pre_page_url = response.data.paging.previous;
				showPreviousButton("group");
			} else {
				hidPreviousButton("group");
			}
		}, function errorCallback(response) {
			//$scope.userJson = "users data access fail";
			//alert("users data access fail");
		});
	}
	<!-- -------------detail--------------- -->
	$scope.viewDetail =function(json) {
		$scope.json_for_detail_star = json;
		var kw = $scope.keyword;
		var id_for_detail = json.id;
		$scope.id_for_detail_star = id_for_detail;
		//var id_for_detail = $scope.user_id;
//alert(id_for_detail);
		$http({
			url: 'http://sample-env.5e5thfsm44.us-west-2.elasticbeanstalk.com/hw8.php',
			method: "GET",
			params: {details : 1, keywords : kw, id : id_for_detail}
		}).then(function successCallback(response) {
			//$scope.userPage = response.data.paging;
			if(response.data == "") {
				$scope.atDetail = 1;
				//alert("places");
				showNoDetail();
			} else {
	//alert($scope.atDetail);
				$scope.detailJson = response.data;
				$scope.atDetail = 1;
				//console.log(response);
				//console.log(response.data.posts.data.length);
				if(response.data.albums != null) {
					var count_albums = response.data.albums.data.length;
					closeAlbum(count_albums);
					document.getElementById("main_albums").style.display = 'none';
					document.getElementById("no_main_albums").style.display = 'none';
					show_album_detail_bar("yes");
					//////////////////////////
				} else {
					document.getElementById("no_main_albums").style.display = 'none';
					document.getElementById("main_albums").style.display = 'none';
					show_album_detail_bar("no");
				}
				if(response.data.posts != null) {
					var count_posts = response.data.posts.data.length;
					closePost(count_posts);

					document.getElementById("main_posts").style.display = 'none';
					document.getElementById("no_main_posts").style.display = 'none';
					show_post_detail_bar("yes");
					$scope.timeArray = [];
					console.log(response.data.posts);
					for(var i = 0; i < 5; i++) {
						if(response.data.posts.data[i] != null) {
							var temp_time = response.data.posts.data[i].created_time;
							var exact_time = temp_time.substring(0, 10) + " " + temp_time.substring(11, 19);
							console.log(exact_time);
							$scope.timeArray.push(exact_time);
						} else {
							$scope.timeArray.push("");
						}
						//console.log($scope.timeArray);
					}
				} else {
					document.getElementById("no_main_posts").style.display = 'none';
					document.getElementById("main_posts").style.display = 'none';
					show_post_detail_bar("no");
				}

				//var count_posts = response.data.posts.data.length;
				//alert(count_albums);

				//showDetail();

				//closePost(count_posts);
			}

			//console.log(response);

//alert(count_albums);
			//console.log($scope.detailJson);
		}, function errorCallback(response) {
			//$scope.userJson = "users data access fail";
			alert("detail data access fail");
		});
	}

	$scope.resetAtDetail = function() {
		$scope.atDetail = 2;
	}


	$scope.favoriteSave = function(favJson, favType) {
		//console.log(favJson);
		//console.log(favType);
		$scope.type = favType;
		if($window.localStorage.getItem(favJson.id) == null) {
			var storeJson = {"id":favJson.id, "name": favJson.name, "photo_profile": favJson.picture.data.url, "type": favType };
			console.log(storeJson);
			$window.localStorage.setItem(favJson.id, JSON.stringify(storeJson));

		} else {
			$window.localStorage.removeItem(favJson.id);
		}
	}

	$scope.getFavInfo = function() {
		//alert("dd");
		$scope.favoriteInfo = [];
		var i = 0;
		for(j in $window.localStorage) {
			var storeJson = JSON.parse($window.localStorage.getItem(j));
			var temp = {};
			temp.id = storeJson['id'];
			temp.name = storeJson['name'];
			temp.photo_profile = storeJson['photo_profile'];
			temp.type = storeJson['type'];
			$scope.favoriteInfo[i++] = temp;
			//console.log($scope.favoriteInfo);
		}
	}

	$scope.removeFav = function(json) {

		if($window.localStorage.getItem(json.id) != null) {
			var index = $scope.favoriteInfo.indexOf(json);
			$window.localStorage.removeItem(json.id);
			//alert(index);
			//alert(json.id);
			$scope.favoriteInfo.splice(index, 1);
		}
	}

	$scope.checkLight = function(id) {
		if($window.localStorage.getItem(id) != null) {
			//console.log("ddddddd");
			return $scope.style_starred;
		} else {
			return $scope.style_unstarred;
		}
	}

	$scope.pop_up = function(pic_url, pic_name) {
		FB.ui({
			app_id: 1207432259353304,
			method: 'feed',
			link: 'https://developers.facebook.com/docs/',
			picture: pic_url,
			name: pic_name,
			caption: 'FB SEARCH FROM USC CSCI571',
		}, function(response){
			if (response && !response.error_message)
				Success:alert("Posted Successfully");
			else
				Failed : alert("Not Posted");
		});
	}

}

function showNoDetail() {
	document.getElementById("main_albums").style.display = 'none';
	document.getElementById("no_main_albums").style.display = 'block';
	document.getElementById("main_posts").style.display = 'none';
	document.getElementById("no_main_posts").style.display = 'block';
}

function showDetail() {
	document.getElementById("main_albums").style.display = 'block';
	document.getElementById("no_main_albums").style.display = 'none';
	document.getElementById("main_posts").style.display = 'block';
	document.getElementById("no_main_posts").style.display = 'none';
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('MyController', ['$scope', '$http', '$window', MyController]);
myApp.controller('OtherController', OtherController);

function closeAlbum(j) {
	if(j == 4) {
		document.getElementById("album5").style.display = 'none';
	} else if(j == 3) {
		document.getElementById("album5").style.display = 'none';
		document.getElementById("album4").style.display = 'none';
	} else if(j == 2) {
		document.getElementById("album5").style.display = 'none';
		document.getElementById("album4").style.display = 'none';
		document.getElementById("album3").style.display = 'none';
	} else if(j == 1) {
		document.getElementById("album5").style.display = 'none';
		document.getElementById("album4").style.display = 'none';
		document.getElementById("album3").style.display = 'none';
		document.getElementById("album2").style.display = 'none';
	}
}

function closePost(k) {
	if(k == 4) {
		document.getElementById("post5").style.display = 'none';
	} else if(k == 3) {
		document.getElementById("post5").style.display = 'none';
		document.getElementById("post4").style.display = 'none';
	} else if(k == 2) {
		document.getElementById("post5").style.display = 'none';
		document.getElementById("post4").style.display = 'none';
		document.getElementById("post3").style.display = 'none';
	} else if(k == 1) {
		document.getElementById("post5").style.display = 'none';
		document.getElementById("post4").style.display = 'none';
		document.getElementById("post3").style.display = 'none';
		document.getElementById("post2").style.display = 'none';
	}
}

function showBody(i) {
	if(i == "album1") {
		//alert("hhh");
		document.getElementById("album2_pic").style.display = 'none';
		document.getElementById("album3_pic").style.display = 'none';
		document.getElementById("album4_pic").style.display = 'none';
		document.getElementById("album5_pic").style.display = 'none';
		if(document.getElementById("album1_pic").style.display == 'none') {
			document.getElementById("album1_pic").style.display = 'block';
		}
		else if(document.getElementById("album1_pic").style.display == 'block') {
			document.getElementById("album1_pic").style.display = 'none';
		}
	}
	else if(i == "album2") {
		document.getElementById("album1_pic").style.display = 'none';
		document.getElementById("album3_pic").style.display = 'none';
		document.getElementById("album4_pic").style.display = 'none';
		document.getElementById("album5_pic").style.display = 'none';
		if(document.getElementById("album2_pic").style.display == 'none') {
			document.getElementById("album2_pic").style.display = 'block';
		}
		else if(document.getElementById("album2_pic").style.display == 'block') {
			document.getElementById("album2_pic").style.display = 'none';
		}
	}
	else if(i == "album3") {
		document.getElementById("album2_pic").style.display = 'none';
		document.getElementById("album1_pic").style.display = 'none';
		document.getElementById("album4_pic").style.display = 'none';
		document.getElementById("album5_pic").style.display = 'none';
		if(document.getElementById("album3_pic").style.display == 'none') {
			document.getElementById("album3_pic").style.display = 'block';
		}
		else if(document.getElementById("album3_pic").style.display == 'block') {
			document.getElementById("album3_pic").style.display = 'none';
		}
	}
	else if(i == "album4") {
		document.getElementById("album2_pic").style.display = 'none';
		document.getElementById("album3_pic").style.display = 'none';
		document.getElementById("album1_pic").style.display = 'none';
		document.getElementById("album5_pic").style.display = 'none';
		if(document.getElementById("album4_pic").style.display == 'none') {
			document.getElementById("album4_pic").style.display = 'block';
		}
		else if(document.getElementById("album4_pic").style.display == 'block') {
			document.getElementById("album4_pic").style.display = 'none';
		}
	}
	else if(i == "album5") {
		document.getElementById("album2_pic").style.display = 'none';
		document.getElementById("album3_pic").style.display = 'none';
		document.getElementById("album4_pic").style.display = 'none';
		document.getElementById("album1_pic").style.display = 'none';
		if(document.getElementById("album5_pic").style.display == 'none') {
			document.getElementById("album5_pic").style.display = 'block';
		}
		else if(document.getElementById("album5_pic").style.display == 'block') {
			document.getElementById("album5_pic").style.display = 'none';
		}
	}
}

function hidden_main_bar() {
	document.getElementById("main_page_info").style.display = 'none';
	document.getElementById("main_progress_bar").style.display = 'block';
	setTimeout("sub_hidden_bar()",2500);
}

function sub_hidden_bar() {
	document.getElementById("main_progress_bar").style.display = 'none';
	document.getElementById("main_page_info").style.display = 'block';

}

function show_album_detail_bar(x) {
	document.getElementById("album_progress_bar").style.display = 'block';
	if(x == "yes") {
		setTimeout("album_hidden_bar()",1000);
	} else {
		setTimeout("no_album_hidden_bar()",1000);
	}

}

function album_hidden_bar() {
	document.getElementById("album_progress_bar").style.display = 'none';
	document.getElementById("main_albums").style.display = 'block';
	document.getElementById("no_main_albums").style.display = 'none';
}

function no_album_hidden_bar() {
	document.getElementById("album_progress_bar").style.display = 'none';
	document.getElementById("main_albums").style.display = 'none';
	document.getElementById("no_main_albums").style.display = 'block';
}


function show_post_detail_bar(x) {
	document.getElementById("post_progress_bar").style.display = 'block';
	if(x == "yes") {
		setTimeout("post_hidden_bar()",1000);
	} else {
		setTimeout("no_post_hidden_bar()",1000);
	}

}

function post_hidden_bar() {
	document.getElementById("post_progress_bar").style.display = 'none';
	document.getElementById("main_posts").style.display = 'block';
	document.getElementById("no_main_posts").style.display = 'none';
}

function no_post_hidden_bar() {
	document.getElementById("post_progress_bar").style.display = 'none';
	document.getElementById("main_posts").style.display = 'none';
	document.getElementById("no_main_posts").style.display = 'block';
}
/*
 $scope.favoriteSave = function(favJson) {
 console.log(favJson);
 //console.log(favType);
 //$scope.type = favType;
 var itemIndex = $scope.$storage.favoriteInfo.indexOf(favJson);
 if (itemIndex == -1) {
 $scope.$storage.favoriteInfo.push(favJson);
 } else {
 $scope.$storage.favoriteInfo.splice(itemIndex, 1);
 }
 }

 $scope.checkLight = function(json) {
 if($scope.favoriteInfo.indexOf(json) != -1) {
 console.log("ddddddd");
 return $scope.style_starred;
 } else {
 return $scope.style_unstarred;
 }

 }

 */