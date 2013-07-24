$(function(){

	// jquery ajax request
	$.ajax({
        url: "http://sandbox28.thismoment.com/v2/api/gallery/get.jsonp", // test url
        dataType: 'jsonp', // use jsonp to get around cross domain restrictions.
        data: {
        	environment: 1, // dont't change this one
            gallery_id: 1, // your projects gallery ID will be provided to you.
            category_id: 6, // category IDs will be provided. categories will be text (Twitter), photo (Instagram), video (Instagram), or all.
            start: 1, // starting index for paging
            total: 10, // page size, 40 maximum.
            active: 1, // only pull approved content.
        },   
        success: function(data){ 
            console.log(data.results);
            // do something cool!
        }
	});

});