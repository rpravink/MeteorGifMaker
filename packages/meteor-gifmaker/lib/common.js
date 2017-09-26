// Instatiates Collection to store images

var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection('Images', {
  stores: [imageStore],
  filter: {
    allow: {
      contentTypes: ['image/*']
    },
    onInvalid: function(message) {
      console.log(message);
    }
  }
});
//To allow users to submit files to the FS Collection
Images.allow({
  insert: function(){return true;},
});