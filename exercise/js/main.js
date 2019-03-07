/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
* Answer the following questions. This practice set gets progressively harder.
* Remember to test each question, before moving on. Once you're achieved the desired outcome, comment out the code and 
* move on to the next question.
 */


//SECTION 1: REPLACE THE SECTIONS THAT SAY REPLACE ME WITH THE CORRECT CODE.

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the font color to blue.
 * We've started you off, ONLY replace everything instance of "replaceMe" with correct code.
 */

function colorBlue() {
	$("p").css("color", "blue");
}

$("#button1").on('click', colorBlue);

/**s
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 * Uncomment the code below and solve the problem
 */

	function userName(){
	$("h2").text("Areej");
	 }

	$("#button1").on('click', userName);

/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact".
 * Using jQuery change the content to read "True Fact".
 * Uncomment the code below and solve the problem
 */

	function orderedList(){
	$("falseFact").html("True Fact");
	}

    $("#button1").on('click', orderedList);


//SECTION 2: Now you are on your own. Write the necessary code to accomplish the following.

/**
 * Question 4:
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */
function backGround(){
	$('body').css('background-color','pink');
}
$('#button2').on('click',backGround);
 

/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */

function headColor(){
	$('h2').css('color','green');
}
$('#button2').on('click',headColor);


/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */

function blockQuotes(){
	$('blokquotes').html('<span>no quote</span>');
}
$('#button2').on('click',blockQuotes);



//SECTION 3: This section is more difficult. Try your hand at the next 3 questions.

/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */
function headColor2(){
	$('h2').css('color','red');
}
$('#button3').on('click',headColor2);

/**
 * Question 8:
 * Have the following code execute when button 3 is clicked.
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */
function changeImg() {
	
	$(".city").attr('src", "http://lorempixel.com/g/500/400/food');
	$('#button3').click(changeImg);
	return true;
	}
   

  
/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 */

function paraGraph(){
	$('p').css('color','blue');
	$('p').css('font-family','Georgia');
}
$('#button2').on('click',paraGraph);
/**
 * Question 10:
 * Try to do Question 9 but with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"})
 */

//$("p").css({color: "blue", fontFamily: "Georgia"});


