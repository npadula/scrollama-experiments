import "babel-polyfill";
import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';
//import funstonTheme from 'typography-theme-wordpress-2013';
require('intersection-observer');
const scrollama = require("scrollama");
const d3 = require("d3");
const stickyfill = require("stickyfill");
const Stickyfill = stickyfill();
import "./main.css";

window.scrollama = scrollama;
window.d3 = d3;
window.stickyfill = stickyfill;

var typography = new Typography(funstonTheme);

 WebFont.load({
    google: {
      //families: ['Droid Sans', 'Droid Serif']
	  families: ['Patua One', 'Cabin Condensed']
	  //families: ['Source Sans Pro', 'Bitter']
    }
  });


// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

// using d3 for convenience
		const container = d3.select('#scroll');
		const graphic = container.select('.scroll__graphic');
		const chart = graphic.select('.chart');
		const text = container.select('.scroll__text');
		const step = text.selectAll('.step');

		// initialize the scrollama
		const scroller = scrollama();

		// generic window resize listener event
		function handleResize() {
			// 1. update height of step elements
			var stepHeight = Math.floor(window.innerHeight * 0.75);
			step.style('height', stepHeight + 'px');

			// 2. update width/height of graphic element
			var bodyWidth = d3.select('body').node().offsetWidth;
			var textWidth = text.node().offsetWidth;

			var graphicWidth = bodyWidth - textWidth;

			graphic
				.style('width', graphicWidth + 'px')
				.style('height', window.innerHeight + 'px');

			var chartMargin = 32;
			var chartWidth = graphic.node().offsetWidth - chartMargin;

			chart
				.style('width', chartWidth + 'px')
				.style('height', Math.floor(window.innerHeight / 2) + 'px');


			// 3. tell scrollama to update new element dimensions
			scroller.resize();
		}

		// scrollama event handlers
		function handleStepEnter(response) {
			// response = { element, direction, index }

			// add color to current step only
			step.classed('is-active', function (d, i) {
				return i === response.index;
			})

			// update graphic based on step
			chart.select('p').text(response.index + 1)
		}

		function handleContainerEnter(response) {
			// response = { direction }
		}

		function handleContainerExit(response) {
			// response = { direction }
		}

		function setupStickyfill() {
			d3.selectAll('.sticky').each(function () {
				Stickyfill.add(this);
			});
		}

		function init() {
			setupStickyfill();

			// 1. force a resize on load to ensure proper dimensions are sent to scrollama
			handleResize();

			// 2. setup the scroller passing options
			// this will also initialize trigger observations
			// 3. bind scrollama event handlers (this can be chained like below)
			scroller.setup({
				container: '#scroll',
				graphic: '.scroll__graphic',
				text: '.scroll__text',
				step: '.scroll__text .step',
				debug: true,//Comment to disable "step trigger" dashed line
			})
				.onStepEnter(handleStepEnter)
				.onContainerEnter(handleContainerEnter)
				.onContainerExit(handleContainerExit);

			// setup resize event
			window.addEventListener('resize', handleResize);
		}

		// kick things off
		init();