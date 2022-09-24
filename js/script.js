/*---------- ロード ---------- */
var bar = new ProgressBar.Line(splash_text, {
  easing: 'easeInOut',
  duration: 2000,
  strokeWidth: 0.4,
  color: '#00a7ea',
  trailWidth: 0.4,
  trailColor: '#fff',
  text: {
    style: {
      position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',
      transform:'translate(-50%,-50%)',
      'font-size':'2vw',
      color: '#000',
		},
    autoStyleContainer: false
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0, function () {
  $("#splash").delay(500).fadeOut(800);
});
