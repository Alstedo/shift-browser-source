var match = {
  'blue': {
    'name': '',
    'score': '0'
  },
  'orange': {
    'name': '',
    'score': '0'
  },
  'round': 'R1',
  'bestOf': '3'
}

var socket = io();

socket.on('scoreboard', function(data){
  match['blue']['name'] = data['blue']['name'];
  match['blue']['score'] = data['blue']['score'];

  match['orange']['name'] = data['orange']['name'];
  match['orange']['score'] = data['orange']['score'];

  match['round'] = data['round'];
  match['bestOf'] = data['bestOf'];

  $('#blueName').text(match['blue']['name']);

  $('#orangeName').text(match['orange']['name']);

  $('#round').text(match['round']);
  $('#bestOf').text(match['bestOf']);

  bestOfPath = '/assets/img/bo' + match['bestOf'] + '/';

  scoreboardPath = bestOfPath + 'scoreboard.png';
  $('#scoreboard').attr('src', scoreboardPath);

  var score, bestOf;

  max = parseInt(match['bestOf']) - 1;

  score = parseInt(match['blue']['score']);
  if ( score >= max )
    score = max

  var html = '';
  var path;
  for ( var i = 1; i <= score; i++ )
  {
    path = bestOfPath + 'Blue' + i + '.png'
    img = '<img class="overlay" src="' + path + '" />'
    html = html + img
  }
  $('#blueScore').html(html);


  score = parseInt(match['orange']['score']);
  if ( score >= max )
    score = max

  var html = '';
  var path;
  for ( var i = 1; i <= score; i++ )
  {
    path = bestOfPath + 'Orange' + i + '.png'
    img = '<img class="overlay" src="' + path + '" />'
    html = html + img
  }
  $('#orangeScore').html(html);

  console.log(match);
});
