$('.delete').on('click', function(e) {
	e.preventDefault();
	var $self = $(this);
	var url = $self.attr('href');

	$.ajax({
		url: url,
		type: 'delete'
	})
	.done( function() {
		$self.parent().remove();
	})
})

$('.done').on('click', function(e) {
	e.preventDefault();
	var $self = $(this);
	var url = $self.attr('href');
	console.log(url)

	$.ajax({
		url: url,
		type: 'put'
	})
	.done( function() {
		$self.parent().remove();
	})
})