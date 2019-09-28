// for example, if calling the API http://example.com/messages that returns this JSON:
// [
// 	{ id: 1, from: "alice", message: "the car was a blueish-green color" },
// 	{ id: 2, from: "bob", message: "I like hamburgers, I'm going to eat twenty" },
// 	{ id: 3, from: "cathy", message: "under the clear blue sky I drove my truck to the toyota dealership" },
// 	{ id: 4, from: "alice", message: "I'm selling truck parts from some of my old trucks" },
// 	{ id: 5, from: "bob", message: "I took a ride in my blue toyota truck yesterday" }
// ]

// then the function when given the string "blue toyota truck" should return a promise for the following messages (in order):
// [
// 	{ id: 5, from: "bob", message: "I took a ride in my blue toyota truck yesterday" },
// 	{ id: 3, from: "cathy", message: "under the clear blue sky I drove my truck to the toyota dealership" },
// 	{ id: 4, from: "alice", message: "I'm selling truck parts from some of my old trucks" },
// 	{ id: 1, from: "alice", message: "the car was a blueish-green color" }
// ]

//return JSON from API get request 
var apiResponse = 
[
	{ id: 1, from: "alice", message: "the car was a blueish-green color" },
	{ id: 2, from: "bob", message: "I like hamburgers, I'm going to eat twenty" },
	{ id: 3, from: "cathy", message: "under the clear blue sky I drove my truck to the toyota dealership" },
	{ id: 4, from: "alice", message: "I'm selling truck parts from some of my old trucks" },
	{ id: 5, from: "bob", message: "I took a ride in my blue toyota truck yesterday" }
]

var searchString = "blue toyota truck"

function filterData(data, searchValue){
    //split the search string into an array for each word
    var splitSearchString = searchValue.split(" ");    
    //loop through each word against message string
    function stringSearch(str, list){
        for (let i = 0; i < splitSearchString.length; i++){
            if(str.indexOf(list[i]) > -1) {
                return true;
            }
        }
        return false;
    }
    //filter the data using our stringSearch helper function
    return data.filter(function(el){
        return stringSearch(el.message, splitSearchString);
    });
}

console.log(filterData(apiResponse, searchString)); //returns matches based on search string