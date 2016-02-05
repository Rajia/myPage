/*
File: http://weblab.cs.uml.edu/~rabdelaz/weblab/assn8.js
Rajia M. Abdelaziz, Rajia.Abdelaziz@gmail.com, UMass Lowell Undergraduate 
    Enrolled in 91.461 GUI Programming
Created by RMA on November 27, 2015 at 11:10 AM
Last Updated: 11/27/15 at 11:10 a.m
This page contains the JavaScript and jQuery for Assignment 8. 
*/
$(function() {
  //Tab Manipulations are modeled after code found at: https://jqueryui.com/tabs/#manipulation
  //Variable Declerations
  var a; 
  var b;
  var c; 
  var d;
  var table;
  var th; 
  var tr;
  
  
  //Create variable for tab title, content and a template.   
  var tabTitle = $( "#tab_title" ),
    tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
    tabCounter = 2;

  //Create Tabs
  var tabs = $( "#tabs" ).tabs();

  //Configure the slider options so that each slider has values between -15 - 15. 
  var sliderOpts = {
      min: -15,
      max: 15,
      animate: true,
      change: function(){
          //Change the value in the input field when the slider position changes. 
          a = $("#multiplier1_slider").slider("value");
          $("#multiplier1").val(a);
          b = $("#multiplier2_slider").slider("value");
          $("#multiplier2").val(b);
          c = $("#multiplicand1_slider").slider("value");
          $("#multiplicand1").val(c);
          d = $("#multiplicand2_slider").slider("value");
          $("#multiplicand2").val(d);
      }
  };

  //Create the sliders based on the configured options. 
  $('#multiplier1_slider').slider(sliderOpts);
  $('#multiplier2_slider').slider(sliderOpts);
  $('#multiplicand1_slider').slider(sliderOpts);
  $('#multiplicand2_slider').slider(sliderOpts);

  //Change the slider positions when the value in the input field changes.
  $("#multiplier1").change(function(){
      $("#multiplier1_slider").slider("value", $(this).val());
  });
  $("#multiplier2").change(function(){
      $("#multiplier2_slider").slider("value", $(this).val());
  });
  $("#multiplicand1").change(function(){
      $("#multiplicand1_slider").slider("value", $(this).val());
  });
  $("#multiplicand2").change(function(){
      $("#multiplicand2_slider").slider("value", $(this).val());
  });

  //Validate Form 
  $('#myForm').validate({
      //Rules: Mulipliers and Multiplicands are required and must be numbers between -15 and 15. 
      rules : {
        multiplier1 : {
          required : true,
          number : true,
          min : -15, 
          max : 15
        },
        multiplier2 : {
          required : true,
          number : true,
          min : -15,
          max : 15
        }, 
        multiplicand1 : {
          required : true,
          number : true,
          min : -15, 
          max : 15
        }, 
        multiplicand2 : {
          required : true,
          number : true,
          min : -15,
          max : 15
        }
      }, 
      //Messages: Print out the appropriate meessage regarding the error. 
      messages : {
          multiplier1 : {
              required: "Multiplier 1 is a required field.",
              number : "Multiplier 1 must be a valid number.",
              min : "Multiplier 1 cannot be smaller than -15", 
              max : "Multiplier 1 cannot be larger than 15."
          },
          multiplier2 : {
              required: "Multiplier 2 is a required field.",
              number : "Multiplier 2 must be a valid number.",
              min : "Multiplier 2 cannot be smaller than -15", 
              max : "Multiplier 2 cannot be larger than 15."
          },
          multiplicand1 : {
              required: "Multiplicand 1 is a required field.",
              number : "Multiplicand 1 must be a valid number.",
              min : "Multiplicand 1 cannot be smaller than -15", 
              max : "Multiplicand 1 cannot be larger than 15."
          },
          multiplicand2 : {
              required: "Multiplicand 2 is a required field.",
              number : "Multiplicand 2 must be a valid number.",
              min : "Multiplicand 2 cannot be smaller than -15", 
              max : "Multiplicand 2 cannot be larger than 15."
          }
      }
  });
  
  /*This function creatse a table to display the data.
      It uses the functions createElement, createTextNode and appendChild
      These were modeled after tutorials from w3schools.com . 
      Source: http://www.w3schools.com/jsref/met_document_createelement.asp */
  function createAndDisplayTable(tabIndex, rowStart, rowEnd, columnStart, columnEnd){
      table = document.createElement('table');
      table.id = tabIndex.toString();
      th = document.createElement('tr');
      //Create the header row
      for (var k = columnStart-1; k <= columnEnd; k++){
              if(k>=columnStart){
                  var tdh = document.createElement('td');
                  var headerText = document.createTextNode(' ' + k + ' ');
                  tdh.appendChild(headerText);
                  th.appendChild(tdh);
                  th.id = "header";
              }else{ //This is the first cell, it should be empty.
                  var tdh = document.createElement('td');
                  var headerText = document.createTextNode(' ');
                  tdh.appendChild(headerText);
                  th.appendChild(tdh);
                  th.id = "header";
              }
      }
      table.appendChild(th);
      //Create the Table Rows 
      for (var i = rowStart; i <= rowEnd; i++){
          tr = document.createElement('tr');
          var tIndex = document.createElement('td');
          var indexText = document.createTextNode(' ' + i + ' ');
          tIndex.appendChild(indexText);
          tIndex.id = "header";
          tr.appendChild(tIndex);
          //Every other row should be styled differently
          if(i % 2){
              tr.id = "normal";
          }else{
              tr.id = "alt";
          }
          //Create Columns
          for(var j=columnStart; j<=columnEnd; j++){
              var td1 = document.createElement('td');
              var text1 = document.createTextNode( " " + i*j + " ");
              td1.appendChild(text1);
              tr.appendChild(td1);
          }
          table.appendChild(tr);
      }
      jQuery("#tab_content").html( table ) ;
  }        
  //Create a dialog box with our form that contains two buttons: Add and Cancel. 
  var dialog = $( "#dialog" ).dialog({
    autoOpen: false,
    modal: true,

    //Butons: Add and Cancel, Add calls addTab. Cancel closes the dialog.
    buttons: {
      Add: function() {
        //Check to see if the input is valid, if so addTab and close dialog.
        if( $("#myForm").valid() ) {
            addTab();
            $( this ).dialog( "close" );
        }
      },
      Cancel: function() {
        $( this ).dialog( "close" );
      }
    },
    close: function() {
      form[ 0 ].reset();
    }
  });

  //Submit Function (Add Button) inside the form. 
  var form = dialog.find( "form" ).submit(function( event ) {
    //When the user presses the submit button, add the tab, and then close the dialog box containing the form.   
    addTab();
    dialog.dialog( "close" );
    event.preventDefault();
  });

  //resetValues
  function resetValues(){
     a = 0;
     b = 0;
     c = 0;
     d = 0;
     $("#multiplier1").val(a);
     $("#multiplier2").val(b);
     $("#multiplicand1").val(c);
     $("#multiplicand2").val(d);
     $("#multiplicand1_slider").slider("value", 0);
     $("#multiplicand2_slider").slider("value", 0);
     $("#multiplier2_slider").slider("value", 0);
     $("#multiplier1_slider").slider("value", 0);
  }

  //addTab function: adds new tab using the input from the form.
  function addTab() {
      //Display the Multipliers and Multiplicands in the content of the tab
      multiplierHtml = "The multipliers you entered were: " + a + " and " + b; 
      multiplicandsHtml = "The multiplicands you entered were: " + c + " and " + d; 

      //Check to see if multiplicand1 is less than multiplicand2, if so swap them. 
      if(a > b){
          multiplierAlertHtml = "<br>" + " Multiplier 1 was larger than Multiplier 2, so there values were swapped. " + "<br>" ;
          var temp1;
          temp1 = a;
          a = b;
          b = temp1;
      }else{
         multiplierAlertHtml = " ";
      }

      //Check to see if multiplier1 is less than multiplier2, if so swap them.
      if(c > d){
          multiplicandAlertHtml = "<br>" + " Multiplicand 1 was larger than Multiplicand 2, so there values were swapped. " + "<br>" ;
          var temp2;
          temp2 = c;
          c = d;
          d = temp2;
      }else{
         multiplicandAlertHtml = " ";
      }

     //Create and Display the table
     createAndDisplayTable(tabCounter, a, b, c, d);        

      //Create the Tab's Label
      var label = a + ' ' + b + ' ' + c + ' ' + d, 
      id = "tabs-" + tabCounter,
      li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) );

     //Add the tab to the last tab and increase the tab counter. 
     tabs.find( ".ui-tabs-nav" ).append( li );
     $("div#tabs").append( "<div id='" + id + "'>" + multiplierAlertHtml + multiplicandAlertHtml + "<br>" + multiplierHtml + "<br><br>" + multiplicandsHtml + "<br><br>" + $("#tab_content").html() + "</div>" );
     $("#tabs").tabs( "refresh" );
     tabCounter++;
     
     //Hide the table so we dont see it, except in the tabs. 
      $("#tab_content").hide();
     
     //Reset the Sliders and the Text Inputs:
     resetValues(); 
  }

  // Input Data button: Opens the Form so the user can enter data.
  $( "#add_tab" )
    .button()
    .click(function() {
      dialog.dialog( "open" );
  });

  // Delete All Tabs Button: Deletes all the open tabs.
  $( "#delete_tabs" )
    .button()
    .click(function() {
        //Clears all the tabs
        $("#tabs ul").empty();
        tabsCounter = 0;
        
        //Clears all the data
        $("#tabs div").each(function()
        {
            if($(this).is("div"))
            {
                $(this).remove();
            }
        });
  });
  //Close Icon: Removes the tab on click
  tabs.delegate( "span.ui-icon-close", "click", function() {
    var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
    $( "#" + panelId ).remove();
    tabs.tabs( "refresh" );
  });

  //Close a tab when the user presses Alt-Backspace 
  tabs.bind( "keyup", function( event ) {
    if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE ) {
      var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
      $( "#" + panelId ).remove();
      tabs.tabs( "refresh" );
    }
  });
});