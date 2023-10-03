var masterP = document.getElementById('poly'),
  svg = document.getElementById('svg');

var backgroundPoints = {
  'Frontend': '294,30 555,223 459,537 188,475 210,275',
  'Backend': '294,110 461,250 454,534 180,474 35,225',
  'UiDesign': '294,50 480,250 354,404 170,474 130,244'
};

var animation = false;
var change = function(id, $button) {

  if ($button) {
    clearButtonStates();
    activeButtonState($button);
  }

  hideLabels();
  showLabel(id);

  var points = backgroundPoints[id];

  if (animation) {
    animation.pause('#polyGraph');
  }

  animation = anime({
    targets: '#polyGraph',
    points: [points],
    easing: 'easeOutQuad',
    duration: 600,
    loop: false
  });
};

function hideLabels() {
  var $labels = document.getElementsByClassName('labels');
  for (var $l of $labels) {
    $l.classList.remove('show');
  }
}

function showLabel(id) {
  document.getElementById(id).classList.add('show');
}

function activeButtonState($button) {
  $button.classList.add('active');
}

function clearButtonStates() {
  var $nav = document.getElementsByTagName('nav')[0];
  var $buttons = $nav.getElementsByTagName('button');
  for (var $b of $buttons) {
    $b.classList.remove('active');
  }
}
