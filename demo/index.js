//demo

// set global prompt string defaults
$.xPrompt.defaults = {
  placeholder: "test",
  error: "error"
};

// set global prompt boolean defaults
$.xPromptQ.defaults = {
  speed: 'slow'
};

//prompt string
$('.ptest').on('click', function(){
  $.xPrompt({header: 'header', placeholder: 'enter text'}, function(i){
    // do something with data
    console.log(i)
  })
})

//prompt boolean
$('.ptestQ').on('click', function(){
  $.xPromptQ({header: 'are you sure'}, function(i){
    // do something with data
    console.log(i)
  })
})
