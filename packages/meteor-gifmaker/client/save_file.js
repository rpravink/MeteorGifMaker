// Read the file and pass the file to insert into GridFs.

Meteor.saveFile = function(blob, name, path, type, callback) {
    var fileReader = new FileReader(),
    path='upload',
        method, encoding = 'binary', type = blob.type || 'binary';
    switch (type) {
        case 'image/png':
            method = 'readAsArrayBuffer';
            break;
        case 'image/jpeg':
            method = 'readAsArrayBuffer';
            break;
        case 'binary':
            method = 'readAsBinaryString';
           // encoding = 'binary';
            break;
        default:
            method = 'readAsArrayBuffer';
           // encoding = 'binary';
            break;
    }
    fileReader.onload = function() {
        console.log('loading');
    }
    fileReader.onloadend =function(){
        console.log('loaded'+fileReader.result);
        let newFile = new FS.File();
        newFile.attachData(fileReader.result, {type: type});    
         Images.insert(newFile, function(error, result) {
      if(error) {
        console.log("Error uploading the image");
      } else {
        console.log("Image upload success! "+result._id);
      }
      return result._id;
    });

    }
    fileReader[method](blob);
}


//To reset GridFs
Meteor.reset=function(){
    Images.find().forEach(function(file) {
    file.remove();
  });
}