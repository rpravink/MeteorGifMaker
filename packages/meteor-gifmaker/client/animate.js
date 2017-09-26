//Get the image from Gridfs and pass it as paramters with interval of time provided in html.
//default interval 2 seconds;

Meteor.animate = function(interval) {
  console.log("In Animate block");
  var images = [];
  //Get all the images
  Images.find().forEach(function(file) {
    images.push(file.url());
  });

  gifshot.createGIF({'images': images, 'interval': interval}, function(obj) {
    if(!obj.error) {
       var animatedImage = obj.image;
      var image = document.createElement('img');
      image.src = animatedImage;
	  //attach the image to hyperlink in the html for download
      var hlink = document.getElementById('display');
      hlink.href= animatedImage;
      hlink.prepend(image)
    } else {
      console.log("Gifshot Error!");
    }
  });
}