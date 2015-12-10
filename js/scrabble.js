//Variable Declerations 

//Data Structure for the original 7 tiles    
var original_tiles = [
    {"id": "piece0", "letter": "A"},
    {"id": "piece1", "letter": "B"},
    {"id": "piece2", "letter": "C"},
    {"id": "piece3", "letter": "D"},
    {"id": "piece4", "letter": "E"},
    {"id": "piece5", "letter": "F"},
    {"id": "piece6", "letter": "G"}
];

//Data sturcute for the game_board squares (for now only implementing score calculations for the first row.
//Originally when the tile is empty, we will give it the value pieceEmpty
var game_board = [
  {"id": "drop0",  "tile": "pieceEmpty"},
  {"id": "drop1",  "tile": "pieceEmpty"},
  {"id": "drop2",  "tile": "pieceEmpty"},
  {"id": "drop3",  "tile": "pieceEmpty"},
  {"id": "drop4",  "tile": "pieceEmpty"},
  {"id": "drop5",  "tile": "pieceEmpty"},
  {"id": "drop6",  "tile": "pieceEmpty"},
  {"id": "drop7",  "tile": "pieceEmpty"},
  {"id": "drop8",  "tile": "pieceEmpty"},
  {"id": "drop9",  "tile": "pieceEmpty"},
  {"id": "drop10", "tile": "pieceEmpty"},
  {"id": "drop11", "tile": "pieceEmpty"},
  {"id": "drop12", "tile": "pieceEmpty"},
  {"id": "drop13", "tile": "pieceEmpty"},
  {"id": "drop14", "tile": "pieceEmpty"}
];
    
//Data Structure from Professor Heines's notes to display table
var ScrabbleTiles = [] ;
    ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
    ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4  } ;
    ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12 } ;
    ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3  } ;
    ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
    ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
    ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1  } ;
    ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
    ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
    ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8  } ;
    ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
    ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
    ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
    ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
    ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
    ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
    ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
    ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2  } ;

//Data structure for scrabble pieces. Modeled after examples from Piazza.com that were posted by classmates.
//https://piazza.com/class/icm9jynacvn5kx
scrabble_pieces = [
    {"letter":"A", "value":  1,  "amount":  9,  "remaining":  9},
    {"letter":"B", "value":  3,  "amount":  2,  "remaining":  2},
    {"letter":"C", "value":  3,  "amount":  2,  "remaining":  2},
    {"letter":"D", "value":  2,  "amount":  4,  "remaining":  4},
    {"letter":"E", "value":  1,  "amount": 12,  "remaining": 12},
    {"letter":"F", "value":  4,  "amount":  2,  "remaining":  2},
    {"letter":"G", "value":  2,  "amount":  3,  "remaining":  3},
    {"letter":"H", "value":  4,  "amount":  2,  "remaining":  2},
    {"letter":"I", "value":  1,  "amount":  9,  "remaining":  9},
    {"letter":"J", "value":  8,  "amount":  1,  "remaining":  1},
    {"letter":"K", "value":  5,  "amount":  1,  "remaining":  1},
    {"letter":"L", "value":  1,  "amount":  4,  "remaining":  4},
    {"letter":"M", "value":  3,  "amount":  2,  "remaining":  2},
    {"letter":"N", "value":  1,  "amount":  6,  "remaining":  6},
    {"letter":"O", "value":  1,  "amount":  8,  "remaining":  8},
    {"letter":"P", "value":  3,  "amount":  2,  "remaining":  2},
    {"letter":"Q", "value": 10,  "amount":  1,  "remaining":  1},
    {"letter":"R", "value":  1,  "amount":  6,  "remaining":  6},
    {"letter":"S", "value":  1,  "amount":  4,  "remaining":  4},
    {"letter":"T", "value":  1,  "amount":  6,  "remaining":  6},
    {"letter":"U", "value":  1,  "amount":  4,  "remaining":  4},
    {"letter":"V", "value":  4,  "amount":  2,  "remaining":  2},
    {"letter":"W", "value":  4,  "amount":  2,  "remaining":  2},
    {"letter":"X", "value":  8,  "amount":  1,  "remaining":  1},
    {"letter":"Y", "value":  4,  "amount":  2,  "remaining":  2},
    {"letter":"Z", "value": 10,  "amount":  1,  "remaining":  1},
    {"letter":"_", "value":  0,  "amount":  0,  "remaining":  0}    
];

//Variable Declerations
var $tilesGallery = $("#tilesGallery"), 
  $board = $("#singleLineOfBoard");
  $(document).ready( function () {    
      //When the document is loaded, create the tile distribution chart and load seven scrabble pieces randomly. 
      createTileDistribChart();
      loadTiles();
}) ;
    
//This function creates the tile distribution chart that displays the number of tiles, their value, orig dist, and the number left.
//Taken from Professor Heines's Notes: https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-lecs/lecture26.jsp
function createTileDistribChart(){
  //Variable Declarations
  var char ;          // Uppercase character indicated by the loop index
  var newTableRow ;   // Row of the table
  var newTableCell ;  // Cell in a table row
  var nTilesOriginal = 0 ;    // number of tiles in original distribution (to check that all 100 accounted for)
  var nTilesRemaining = 0 ;   // number of tiles remaining during the game

  //Populate the table with tile values
  for ( k = 0 ; k < Object.keys( ScrabbleTiles ).length + 1 ; k++ ) {
    // convert the integer loop index to an uppercase character, which the subscript of the associative array of tile objects
    if ( k < Object.keys( ScrabbleTiles ).length - 1 ) {
      char = String.fromCharCode( 65 + k ) ;
    } else if ( k < Object.keys( ScrabbleTiles ).length ) {
      char = "_" ;
    } else {
      char = "Total" ;
    }

    // create a new table row to hold the info on one tile
    newTableRow = $("<tr></tr>" ) ;

    // create a new table cell to hold the letter of the tile we're looking at
    newTableCell = $("<td></td>" ) ;
    if ( k < Object.keys( ScrabbleTiles ).length ) {  // all rows except the last
      if ( char !== "_" ) {   // handle all tiles except the blank
        // put the letter of the tile into the new table cell
        newTableCell.text( char ) ;
      } else {                // handle the blank
        newTableCell.text( "Blank" ) ;
      }
    } else {  // handle the last row, which will contain the total number of tiles
      newTableCell.attr( "colspan", "2" ) ;   // row title will span 2 columns
      newTableCell.css( {     // format the last row as white text on black background
        "font-weight" : "bold", 
        "font-style" : "italic",
        "background-color" : "purple",
        "color" : "white",
        "text-align" : "right" } ) ;
      newTableCell.text( "Total Tiles:" ) ;   // set title for last row
    }
    // append the new table cell to the new table row
    newTableRow.append( newTableCell ) ;

    // display letter tile values
    if ( k < Object.keys( ScrabbleTiles ).length ) {    // all rows except the last
      // create a new table cell to hold the value of the tile we're looking at
      newTableCell = $("<td></td>" ) ;
      // put the letter of the tile into the new table cell
      // here we can use the dot syntax because "value" is a plain indentifier
      newTableCell.text( ScrabbleTiles[ char ].value ) ;
      // append the new table cell to the new table row
      newTableRow.append( newTableCell ) ;
    }

    // display original letter tile distribution
    if ( k < Object.keys( ScrabbleTiles ).length ) {    // all rows except the last
      // create a new table cell to hold the value of the tile we're looking at
      newTableCell = $("<td></td>" ) ;
      // put the letter of the tile into the new table cell
      // here we can use the dot syntax because "value" is a plain indentifier
      newTableCell.text( ScrabbleTiles[ char ][ "original-distribution" ] ) ;
      // add number of tiles for this letter to the count of the total number of tiles
      nTilesOriginal += ScrabbleTiles[ char ][ "original-distribution" ] ;
      // append the new table cell to the new table row
      newTableRow.append( newTableCell ) ;
    }

    // create a new table cell to hold the number of tiles remaining of the tile 
    //    we're looking at
    newTableCell = $("<td></td>" ) ;
    if ( k < Object.keys( ScrabbleTiles ).length ) {
      // put the numer of tiles for the letter into the new table cell
      // here we must use the 2-D array syntax because "number-remaining" contains a hyphen
      newTableCell.text( ScrabbleTiles[ char ][ "number-remaining" ] ) ;
      // add number of tiles for this letter to the count of the total number of tiles
      nTilesRemaining += ScrabbleTiles[ char ][ "number-remaining" ] ;
      // append the new table cell to the new table row
      newTableRow.append( newTableCell ) ;
    } else {
      // add cell for total number of letter tiles in original distribution
      newTableCell.css( { 
        "font-weight" : "bold", 
        "background-color" : "purple",
        "color" : "white" } ) ;
      newTableCell.text( nTilesOriginal ) ;
      // append the new table cell to the new table row
      newTableRow.append( newTableCell ) ;

      newTableCell = $("<td></td>" ) ;  // create another table cell
      // add cell for total number of letter tiles remaining
      newTableCell.css( { 
        "font-weight" : "bold", 
        "background-color" : "purple",
        "color" : "white" } ) ;
      newTableCell.text( nTilesRemaining ) ;
      // append the new table cell to the new table row
      newTableRow.append( newTableCell ) ;
    }

    // append the complete table row to the table
    $("#tbl").append( newTableRow ) ;
  }
}
    
/* This function loads seven scrabble tiles randomly and puts them on top of the rack.
It also makes the tiles draggable and the board droppable.*/ 
function loadTiles(){
    //Variable Declerations
    var tile_url = "tiles/Scrabble_Tile_";
    var random_letter = "";
    var piece = "";
    var piece_ID = "";

    //Randomly load 7 pieces and append them to the rack.
    for(var i=0; i < 7; i++){
        random_letter = getRandomTile();
        //Create the piece url now that we have a random_letter 
        piece = "<img class='pieces' id='piece" + i + "' src='" + tile_url + random_letter + ".jpg" + "' height='50' width='50'></img>";
        piece_ID = "#piece" + i;

        //Set the letter of the original game tiles to the random letter
        original_tiles[i].letter = random_letter;

        //Find the location of the rack on the screen
        var position_of_rack = $("#_rack").position();

        //Place board pieces 
        var img_left = position_of_rack.left + 150 + (50 * i);
        var img_top = position_of_rack.top + 60;

        //Add the pieces to the screen
        $("#rack").append(piece);

        // Move the piece relative to where the rack is located on the screen.
        $(piece_ID).css("left", img_left).css("top", img_top).css("position", "absolute");

        // Make the piece draggable.
        $(piece_ID).draggable({
          appendTo: $board,
          revert: "invalid",           
          start: function(ev, ui) {
            startPos = ui.helper.position();
          },
          stop: function() {
            $(this).draggable('option','revert','invalid');
          }
        });

        //Make the scrabble board droppable and identify which piece was dropped onto which tile.
        $("#scrabble_board td").droppable({
           accept: ".ui-draggable",
           appendTo: "body",
           drop: function(event, ui){
               //Identify which letter tile is dropped onto which square. 
               //StackOverflow Tutorial regarding how to identify which item was dragged and which item was dropped: 
               //http://stackoverflow.com/questions/5562853/jquery-ui-get-id-of-droppable-element-when-dropped-an-item
               var draggableId = ui.draggable.attr("id");
               var droppableId = $(this).attr("id");
               $("#identifier").html("You just dragged the letter " + find_letter(draggableId) + " onto the square of the board with ID: " + droppableId);
               console.log("You just dragged the letter " + find_letter(draggableId) + " onto the square of the board with ID: " + droppableId);
               game_board[findPosition(droppableId)].tile = draggableId;
               find_word(droppableId);

           },
           //Handle the situation that the tile was removed.
           out: function(event, ui) {
                var draggableId = ui.draggable.attr("id");
                var droppableId = $(this).attr("id");

                //Tell the user that you removed that tile.
               $("#identifier").html("You just removed the letter " + find_letter(draggableId) + " from the square of the board with ID: " + droppableId);
               console.log("You just removed the letter " + find_letter(draggableId) + " from the square of the board with ID: " + droppableId);

                //Show that a tile was removed from the game_board variable
                game_board[findPosition(droppableId)].tile = "pieceEmpty";

                // Update the word and score
                find_word();
              }
            });

        //Make the Rack droppable so letters can be returned to it. 
        $("#_rack").droppable({
           accept: ".ui-draggable",
           appendTo: "body" 
        });
    }
}

//This function gets a random tile.
function getRandomTile(){
    //Variable Declerations
    var all_letters = [];
    var total_letters = 0;

    for (var i = 0; i < 26; i++) {
      //Starting at 0 (the first letter) loop through all the letters to keep track of how many of each letter are remaining.  
      var current_letter = scrabble_pieces[i].letter;    
      var remaining = scrabble_pieces[i].remaining;      
      total_letters += remaining;               

      for (var x = 0; x < remaining; x++) {
        all_letters.push(current_letter);       
      }
    }
    
    //Get a random number
    var random_num = getRandomInt(0, total_letters - 1);  
    var letter = all_letters[random_num];       

    // Find the letter choosen and decrement the number remaining.
    for (var i = 0; i < 26; i++) {
      if (scrabble_pieces[i].letter === letter) {
        scrabble_pieces[i].remaining--;                 
        return letter;                          
      }
    }
    return -1;
}
    
/*This function takes two numbers and returns a random number in that range.*/ 
/*StackOverflow: http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function find_word() {
    //Variable Declerations
    var word = "";
    var score = 0;
    
    //Go through the first line of the game board and generate a possible word.
    for(var i = 0; i < 15; i++) {
        if(game_board[i].tile !== "pieceEmpty") {
            word += find_letter(game_board[i].tile);
            score += find_score(game_board[i].tile);
        }
    }
    
    //Account for double and triple word tiles.
    score += (score * double_triple_word());

    //Display the score.
    $("#score").html("Score: " + score);
}

//This function takes a letter's id and returns its score
function find_score(given_id) {
  //Variable Declerations  
  var score = 0;
  
  //Find out which letter the id represents
  var letter = find_letter(given_id);
  
  //Determine which letter the id belongs to and determine whether to double or triple the letter
  for(var i = 0; i < 27; i++) {
    var obj = scrabble_pieces[i];
    if(obj.letter == letter) {
      score = obj.value;
      var bonus = score * double_triple_letter(given_id);
      score = score + bonus;
      return score;
    }
  }
  return -1;
}

//This function returns 0, 1, or 2 depending on the class the board_space has.
function double_triple_letter(given_id) {
  var board_space;

  //Determine the board_space the tile is on.
  for(var i = 0; i < game_board.length; i++) {
    if(game_board[i].tile == given_id){
      board_space = "#" + game_board[i].id;
    }
  }

  //Check to see if it's a double or triple letter
  if ( $(board_space).hasClass("double_letter") == true ) {
    return 1;
  }
  else if ( $(board_space).hasClass("triple_letter") == true ) {
    return 2;
  }
  return 0;
}

//This function determines which letter an id belongs to.
function find_letter(given_id) {
    
  //Loop through the original tiles
  for(var i = 0; i < 7; i++) {
    if(original_tiles[i].id == given_id) {
      return original_tiles[i].letter;
    }
  }
  alert("letter invalid, it's id is: " + given_id);
  return -1;
}

//This function determines which position in the array an id belongs to.
function findPosition(given_id) {
  for(var i = 0; i < 15; i++){
    if(game_board[i].id == given_id) {
      return i;
    }
  }
  return -1;
}

//This function determines which drop_id a tile belongs to
function find_drop_id(given_id) {
  for(var i = 0; i < 15; i++){
    if(game_board[i].tile == given_id) {
      return game_board[i].id;
    }
  }
  return -1;
}

//Check whether we have a double or triple word tile. Return 1 for double, Return 2 for triple.
function double_triple_word() {
  //Variable Declerations
  var gameboard_length = game_board.length;
  
  //Check to see if the tile isn't empty and if it has the class double_word or the class triple_word
  for (var i = 0; i < gameboard_length; i++) {
    var space_ID = "#" + game_board[i].id;
    if (game_board[i].tile !== "pieceEmpty"){
        if ( $(space_ID).hasClass('double_word') == true ) {
          //Double Word!
          return 1;
        }
        else if ( $(space_ID).hasClass('triple_word') == true ) {
          //Triple Word!
          return 2;
        }
    }
  }
  return 0;
}