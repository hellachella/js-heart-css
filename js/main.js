var $header = $('header');
var $masthead = $('masthead');
var $h1 = $('h1');
var $main = $('main');
var $p = $('main, p');
var $h2 = $('h2');
var $list = $('main, section, ul');
var $img = $('img');
var $first = $('ul, li:first-child');
var $last = $('ul, li:nth-child(3)');
var $dl = $('dl');
var $dt = $('dt');
var $show = $('ul, li:last-child');

$header.addClass($masthead);
$h1.removeClass('big-heading');
$h1.addClass('logo');
$main.addClass('wrapper');
$p.addClass('intro');
$h2.addClass('slug-head');
$list.addClass('slug-list');
$img.addClass('slug-img');
$first.addClass('slug-list-first');
$last.addClass('slug-list-last');
$dl.addClass('classification');
$dt.removeClass('big-label');
$show.attr('visible');

