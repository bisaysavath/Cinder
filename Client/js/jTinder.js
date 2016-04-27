/**
 * jTinder initialization
 */

var likedComments = ["Good choice", "Probably", "Yay"];
var dislikedComments = ["Whattt?", "Whatever", "Ouch.."];

$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
	    // set the status text
		var text = _.sample(dislikedComments, 1);
        $('#status').html(text);
    },
	// like callback
    onLike: function (item) {
	    // set the status text
		var text = _.sample(likedComments, 1);
        $('#status').html(text);
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#tinderslide").jTinder($(this).attr('class'));
});