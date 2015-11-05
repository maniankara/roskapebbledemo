/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

//Pebble.addEventListener('appmessage',
//  function(e) {
//    console.log('Received message: ' + JSON.stringify(e.payload));
//  }
//);

var main = new UI.Card({
  title: 'RoskaProject',
  icon: 'images/menu_icon.png',
  subtitle: 'Clearing trashes',
  body: 'Press down button.'
});

Pebble.addEventListener('ready', function(e) {
  console.log('JavaScript app ready and running!');
});

/* if(Pebble.getActiveWatchInfo) {
  console.log("pebble is ready to use");

} else {
  console.log("pebble is not active");

}
*/
main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var transactionId = Pebble.sendAppMessage( 
    { '0': 42, '1': 'String value' },
    function(e) {
      console.log('Successfully delivered message with transactionId=' +
        e.data.transactionId);
    },
    function(e) {
      console.log('Unable to deliver message with transactionId=' +
        e.data.transactionId +
        ' Error is: ' + e.error.message);
    }
  );
    
  
  var card = new UI.Card();
  card.title('Confirmation!');
  card.subtitle('Trash plotted');
  card.body('Press back button to resume');
  card.show();
});
