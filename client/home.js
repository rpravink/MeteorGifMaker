
//Get the file when user uploads in html and call saveFile method.
Template.gifmaker.events({
	//event will be triggered when input is changed.
    'change input': function(event) {
    var files = event.target.files;
    _.each(files, function(file) {
         var id= Meteor.saveFile(file, file.name);
        });
    }
});

//Get the file when user drop the files in html and call saveFile method.
Template.testDataTransfer.events({
	//raix:ui-dropped-event package added from atmosphere to enable the drag functionality and to get the dragged input
  'dropped #drop-zone': function(event, instance){
    var files = event.originalEvent.dataTransfer.files;
    _.each(files, function(file) {
          var id= Meteor.saveFile(file, file.name);
        });
  },
 
});

Template.body.events({
	// user clicks create Gif button get the time duration  and call animate emethod.
 'click #animate':function(){
     var timeDuration = document.getElementById('duration');
	 var interval = timeDuration.value;
	  interval = interval ? interval/1000 : 2;
      Meteor.animate(interval);
  },
  // to clear File storage and reset the html contents. GridFs package added from collectionFs for storage functionality
  'click #reset': function(){
        Meteor.reset();
		//clear the Gif created
        var elementToRemove = document.getElementById('display');
        if(elementToRemove.childNodes){
            elementToRemove.innerHTML='';
        }
		//reset input files
        var inputFiles = document.querySelectorAll('.fileupload');
        inputFiles.forEach(function(file){
            file.value='';
        })

  },
});

