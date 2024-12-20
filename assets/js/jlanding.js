// matrix
var tileSize = 20;
// a higher fade factor will make the characters fade quicker
var fadeFactor = 0.05;

// switch color on click
var lettercollors;
let buttonWAsClicked = 0;
let buttonTimer = 0;
let buttonDelay = 2000;

// special Array
var specArray = false;

var canvas;
var ctx;

var columns = [];
var maxStackHeight;


function init()
{
    canvas = document.getElementById( 'canvas' );
    ctx = canvas.getContext( '2d' );

    initMatrix();

    // start the main loop
    tick();
}

function initMatrix()
{
    maxStackHeight = Math.ceil(canvas.height/tileSize);

    // divide the canvas into columns
    for ( let i = 0 ; i < canvas.width/tileSize ; ++i )
    {
        var column = {};
        // save the x position of the column
        column.x = i*tileSize;
        // create a random stack height for the column
        column.stackHeight = 10+Math.random()*maxStackHeight;
        // add a counter to count the stack height
        column.stackCounter = 0;
        // add the column to the list
        columns.push( column );
    }
}

function draw()
{
    // draw a semi transparent black rectangle on top of the scene to slowly fade older characters
    ctx.fillStyle = "rgba( 0 , 0 , 0 , "+fadeFactor+" )";
    ctx.fillRect( 0 , 0 , canvas.width , canvas.height );

    // pick a font slightly smaller than the tile size
    ctx.font = (tileSize-2)+"px monospace";
    ctx.fillStyle = lettercollors;
    for ( let i = 0 ; i < columns.length ; ++i )
    {
      // here i could just show binary or a special array like my name
        if ( specArray == true )
        {
          var textArray = [
              '0',
              '1'
            ];
            var randomIndex = Math.floor(Math.random() * textArray.length);
            var randomCharacter = textArray[randomIndex];
        } else
        {
          var randomCharacter = String.fromCharCode( 33+Math.floor(Math.random()*94) );
        }

        // pick a random ascii character (change the 94 to a higher number to include more characters)
        ctx.fillText( randomCharacter , columns[i].x , columns[i].stackCounter*tileSize+tileSize );

        // if the stack is at its height limit, pick a new random height and reset the counter
        if ( ++columns[i].stackCounter >= columns[i].stackHeight )
        {
            columns[i].stackHeight = 10+Math.random()*maxStackHeight;
            columns[i].stackCounter = 0;
        }
    }
}

// MAIN LOOP
function tick()
{
  document.getElementById("button").onclick = function() {

    if (buttonWAsClicked == 0)
    {
      typeSentence("Hello World!", "#sentence")
      buttonWAsClicked = 1;
      buttonDelay = 1800;
    } else if (buttonWAsClicked == 1)
    {
      typeSentence("My name is Dieter Cho", "#sentence")
      buttonWAsClicked = 2;
      buttonDelay = 3600;
    } else if (buttonWAsClicked == 2)
    {
      typeSentence("I am a Software Developer", "#sentence")
      buttonWAsClicked = 3;
      buttonDelay = 4000;
    } else if (buttonWAsClicked == 3)
    {
      typeSentence("Do you have problems with your Code ?", "#sentence")
      buttonWAsClicked = 4;
      buttonDelay = 4000;
    } else if (buttonWAsClicked == 4)
    {
      typeSentence("Coding can be easy.", "#sentence")
      buttonWAsClicked = 5;
      buttonDelay = 2200;
    } else if (buttonWAsClicked == 5)
    {
      typeSentence("Just make it binary.", "#sentence")
      buttonWAsClicked = 6;
      specArray = true;
      buttonDelay = 3000;
    }
     else if (buttonWAsClicked == 6)
    {
      setTimeout(function() {
        location.href = "/dc/2017/01/01/welcome.html";
        // location.href = "https://miahub.github.io/dc/2017/01/01/welcome.html";
            // location.href = '{{ "/2017/01/01/welcome.html" | relative_url }}';
    }, 900);

    }
  }

  switch(buttonWAsClicked)
  {
    case 1:
    lettercollors = "rgb( 0, 0, 255 )";
    break;
    case 2:
    lettercollors = "rgb( 255, 0,  0)";
    break;
    case 3:
    lettercollors = "rgb( 165, 47, 178 )";
    break;
    case 4:
    lettercollors = "rgb( 255, 255, 255 )";
    break;
    case 5:
    lettercollors = random_rgba();
    case 6:
    lettercollors = random_rgba();
    break;
    default:
    lettercollors = "rgb( 125, 255, 0 )";
  }

    draw();
    setTimeout( tick , 50 );
}


// type Effect
async function typeSentence(sentence, eleRef, delay = 100) {
  deleteSentence("#sentence");

  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// button Click effect
$(function() {
  $('.btnblue').click(function() {

    if ($(this).hasClass("is-clicked"))
    {
      $(this).removeClass("is-clicked");
      $(this).addClass("is-clickedd");
    } else
    {
      $(this).removeClass("is-clickedd");
      $(this).addClass("is-clicked");
    }

    document.getElementById("button").disabled = true;

    setTimeout(function() {
      document.getElementById("button").disabled = false;
    }, buttonDelay);
  });
});

// random Color
function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// button Red click effect
// button Click effect
$(function() {
  $('.btn').click(function() {

    if ($(this).hasClass("is-clicked"))
    {
      $(this).removeClass("is-clicked");
      $(this).addClass("is-clickedd");
    } else
    {
      $(this).removeClass("is-clickedd");
      $(this).addClass("is-clicked");
    }


    document.getElementById("button").disabled = true;

    setTimeout(function() {
      document.getElementById("button").disabled = false;
      location.href = "/dc/2017/01/01/welcome.html";
    }, 900);

  });
});

