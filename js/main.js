$(function() {
	$('.logo').midnight();

	var $projectHeader = $('.projectHeader'),
			$projectContainer = $('.projects'),
			$projectList = $('.projectContent')
			$listHeight = $('.projectContent'),
			$headerTop = $projectContainer.offset().top;



	var stickyHeader = function() {
		var $scrollTop = $(window).scrollTop(),
				$listStop = $listHeight.offset().top + $listHeight.height(),
				$projects= $('.projects'),
				$projectsHeight = $projects.offset().top;
				$projectStop = $projectsHeight + $projects.height() - 155;
		if ($scrollTop > $headerTop && $scrollTop < $projectStop) {
			$projectHeader.addClass('fixed');
			$projectHeader.removeClass('scroll');
			$projectList.addClass('fixedList');
			$projectHeader.css({
				'top' : 0
			});
		} else if ($scrollTop > $headerTop && $scrollTop > $projectStop) {
			$projectHeader.removeClass('fixed');
			$projectList.removeClass('fixedList');
			$projectHeader.addClass('scroll');
			$projectHeader.css({
				'top' : $projects.height() - 150
			});
		} else {
			$projectHeader.removeClass('fixed');
			$projectList.removeClass('fixedList');
		}
	}
	stickyHeader();
	$(window).on('scroll', function() {		
			stickyHeader();
	});

	objectFit.polyfill({
        selector: 'img', // this can be any CSS selector
        fittype: 'cover', // either contain, cover, fill or none
        disableCrossDomain: 'true' // either 'true' or 'false' to not parse external CSS files.
    });

		var year = new Date().getFullYear();
		document.getElementById('year').innerHTML = year;

});