$(document).ready(function() {
	// Load the initial list box with the names of all of the stores 
    $.ajax({ url: "https://github.com/BestBuyAPIs/open-data-set/blob/master/stores.json" }).then(function(data) {
    	for(store in data) {
    		var opt = document.createElement("option");
    		opt.value = store.name;
    		opt.innerHTML = store.name;
    		$("#storesList").appendChild(opt);
    	}
    });
    
    $("#storesLList").click(function(event) {
    	var selectedStoreName = $("#storesList").value;
    	$.ajax({ url: "/stores/search/findByName?name=" + selectedStoreName }).then(function(data) {
    		$("#id").value = data.id;
    		$("#name").value = data.name;
    		$("#type").value = data.type;
    		$("#address").value = data.address;
    		$("#address2").value = data.address2;
    		$("#city").value = data.city;
    		$("#state").value = data.state;
    		$("#zip").value = data.zip;
    		$("#lat").value = data.location.lat;
    		$("#lon").value = data.location.lon;
    		$("#hours").value = data.hours;
    		$("#services").value = data.services;
    	})
    });
    
    $("#insertStore").click(function(event) {
    	var dataStr = getData();
    	$.ajax({ url: "/stores", type: 'PUT', data: dataStr }).then(function(data) {
    		alert("The new store was successfully inserted.");
    	})
    });
    
    $("updateStore").click(function(event) {
    	var dataStr = getData();
    	var idVal = $("#id").value;
    	$.ajax({ url: "/stores/" + idVal, type: 'PUT', data: dataStr }).then(function(data) {
    		alert("The selected store was successfully updated.");
    	})
    });
    
    $("updateStore").click(function(event) {
    	if(confirm("Are you sure you want to delete the selected store?")) {
    		var idVal = $("#id").value;
    		$.ajax({ url: "/stores/" + idVal, type: 'DELETE' }).then(function(data) {
        		alert("The selected store was successfully deleted.");
        	})
    	}
    });
    
})

function getData() {
	return "name=\"" + $("#name").value + "\"&type=\"" +
		$("#type").value + "\"&address=\"" + $("#address").value +
		"\"&address2=\"" + $("#address2").value + "\"&city=\"" +
		$("#city").value + "\"&state=\"" + $("#state").value +
		"\"&zip=\"" + $("#zip").value + "\"&location.lat=" +
		$("#lat").value + "&location.lon=" + $("#lon").value +
		"&hours=\"" + $("#hours").value + "\"&services=\"" +
		$("#services").value + "\"";
}
