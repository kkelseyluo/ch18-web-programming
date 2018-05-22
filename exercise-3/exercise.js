'use strict';
//d3 has already been "imported"

//Add an event listener to the image so that when the mouse enters ('mouseenter')
//its attribute `src` changes to 'img/surprised.png'
var img = d3.select('#face');
img.on('mouseenter',function(){
    img.attr('src','img/surprised.png');
});


//Add an event listener to the image so that when the mouse leaves ('mouseleave')
//its source changes back to `img/happy.png'
img.on('mouseleave',function(){
    img.attr('src','img/happy.png');
});


//Add an event listener to the `#purplize` button to respond to user clicks.
//When the user clicks the button, add the CSS style class `purple` to the 
//`<body>` element. Use the `classed()` method: 
//https://github.com/d3/d3-selection#selection_classed
d3.select('#purplize').on('click',function(){
    d3.select('body').classed('purple',true);
});


//Add an event listener to the `#addButton` so that when it is clicked,
//the text inside the <input> element is added as a NEW <li> item to the list.
//NOTE: You can get what value is typed into the <input> using the `property()`
//method, passing it 'value' as the property to access.
d3.select('#addButton').on('click',function(){
    var inputText = d3.select('input').property('value');
    var newList = d3.select('ul').append('li');
    newList.text(inputText);

    //Bonus: In the above event callback, add an event listener to EACH new <li>
//so that when that item is clicked, it is removed from the page.
//Hint: Don't overthink it!
//Hint: If you create a variable inside a function, that variable will remain
//available by unique to any OTHER functions defined at the same scope. This
//is called a "closure".

    newList.on('click',function(){
        newList.remove()
    });
})



