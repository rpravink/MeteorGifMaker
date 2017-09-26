# MeteorGifMakerTest

### Requirements
Accept 5 images as input via browse or drag and drop
Accept a numeric input in milliseconds 
Given the 5 images, create an animated gif that changes images at the specified millisecond input in step 2
Once the gif is created, display on a web page 
And then give the user the ability to download the gif to store it on their local computer.


### Methods

#### Meteor.saveFile()
Accepts the file using input change or dragged and dropped.
Uses collectionFS package to store the files


#### Meteor.animate()
Accepts milliseconds as input (default 1000) and passed to Gifshot to create Gif.
Created gif will be attached to hyperlink for downlaod

#### Meteor.reset()
Clear the CollectionFS and reset input values to default.

### Dependencies
1. gifShot - [gifShot](https://yahoo.github.io/gifshot/)
2. cfs:standard-packages - [cfs:standard-packages](https://github.com/CollectionFS/Meteor-CollectionFS)
3. cfs:gridfs - [cfs:gridfs](https://github.com/CollectionFS/Meteor-CollectionFS/tree/devel/packages/gridfs)
4. raix:ui-dropped-event - [raix:ui-dropped-event](https://atmospherejs.com/raix/ui-dropped-event)
	optional
5. user accounts - [user accounts] (https://www.meteor.com/tutorials/blaze/adding-user-accounts) 