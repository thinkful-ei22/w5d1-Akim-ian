// // Write a MongoDB query to display all the documents in the collection notes.
db.notes.find().pretty();

// // Write a MongoDB query to display all the documents in the collection notes 
// and format the results to be 'pretty'.
db.notes.find().pretty();

// // Write a MongoDB query to display the fields title and content for all the 
// documents in the collection notes.
db.notes.find({},{
    title: 1,
    content: 1
}).pretty();

// // Write a MongoDB query to display the fields title and content but exclude 
// the field _id for all the documents in the collection notes.
db.notes.find({},{
    title: 1,
    content: 1,
    _id: 0
}).pretty();


// // Write a MongoDB query to display only the title field for all the documents 
// in the collection notes and sort the results by _id in descending order.
db.notes.find({},{
    title: 1,
    _id: -1
}).sort({_id: -1}).pretty();

// // Write a MongoDB query to display all the documents from the collection notes 
// which contain the title '5 life lessons learned from cats'.
db.notes.find({title: {$regex: /5 life lessons learned from cats/}}).pretty();

// // Write a MongoDB query to display the first 5 documents from the collection notes.
db.notes.find().limit(5).pretty();

// // Write a MongoDB query to display the next 5 documents from the collection notes 
// after skipping the first 5.
db.notes.find().skip(5).limit(5).pretty();

// // Write a MongoDB query to display the total number of documents in the collection notes.
db.notes.find().count();

// // Write a MongoDB query to display the documents from the collection notes which 
// have an _id that is greater than "000000000000000000000007".
db.notes.find({"_id": {$gt: "000000000000000000000007"}}).pretty();

// // Write a MongoDB query to display the documents from the collection notes which have an 
// _id which is greater than or equal to "000000000000000000000009" but less than or equal to 
// "000000000000000000000017".

db.notes.find({ "_id": {$gte: "000000000000000000000009", $lte:"000000000000000000000017"} }).pretty();

// // Write a MongoDB query to display the documents from the collection notes which have an _id
//  which is less than or equal to "000000000000000000000007".
db.notes.find({ "_id": {$lte:"000000000000000000000007"} }).pretty();

// // Write a MongoDB query to display only one document from the collection notes.
db.notes.findOne();

// // Write a MongoDB query to display only the title of one document from the collection notes 
// (_id can be included).
db.notes.findOne({},{title: 1});

// // Write a MongoDB query to display only the title of one document from the collection notes (_id excluded).
db.notes.findOne({},{title: 1, _id: 0});

// // Write a MongoDB query to insert one document into the collection notes. The title and 
// content fields can be whatever you like.
db.notes.insertOne({title: "favorite sandwich", content: "roastbeef"});

// // Write a MongoDB query to insert two note documents into the collection notes. The title and 
// content fields can be whatever you like.
db.notes.insertMany([{_id: "000000000000000000000021", title: "hello", content: "the first note!!"},{_id: "000000000000000000000022", title: "goodbye", content: "the second"}]);

// // Write a MongoDB query to modify the title and content fields of the document from the collection 
// notes with _id "000000000000000000000003". Change the tdb.itle and content to be whatever you like.
db.notes.updateOne({_id: "000000000000000000000003"},{$set: {title: "new title!!!", content: "hey this is new"}});

// // Write a MongoDB query to modify only the title field of the document from the collection notes with 
// _id "000000000000000000000007". The content field should remain unchanged.
db.notes.updateOne({_id: "000000000000000000000007"},{$set: {title: "new title!!!"}});

// // Write a MongoDB query to modify the title and content fields of all the documents in the collection 
// notes that have an _id field greater than "000000000000000000000014".
db.notes.updateMany({"_id": {$gt: "000000000000000000000014"}},{$set: {title: "newere titles", content: "newer content"}});

// // Write a MongoDB query to remove only the title field from the document in the collection notes with 
// _id "000000000000000000000008".
db.notes.updateOne({_id: "000000000000000000000008"},{$unset: {title: ""}});

// // Write a MongoDB query to remove the content fields from all documents in the collection notes with 
// _id less than or equal to "000000000000000000000006".
db.notes.updateMany({"_id": {$lte: "000000000000000000000006"}},{$unset: {content: ""}});

// // Write a MongoDB query to remove the title fields from all documents in the collection notes with 
// _id less than or equal to "000000000000000000000003".
db.notes.updateMany({"_id": {$lte: "000000000000000000000003"}},{$unset: {title: ""}});

// // Write a MongoDB query to remove the document from the collection notes that has an _id 
// "000000000000000000000017".
db.notes.deleteOne({_id: "000000000000000000000017"});

// // Write a MongoDB query to remove the documents from the collection notes that have an _id which is 
// not less than "000000000000000000000018".
db.notes.deleteMany({"_id": {$not: {$lte: "000000000000000000000018"}}});

// // Write a MongoDB query to remove the documents from the collection notes that have an _id which is 
// greater than or equal to "000000000000000000000013" and contain the string 'dogs' in the title.
db.notes.deleteMany({"_id": {$gte: "000000000000000000000013"}}, {title: {$regex: /dogs/ }});

// // Write a MongoDB query to display all the documents from the collection notes which do not have a 
// title field.
db.notes.find({title: null}).pretty();

// // Write a MongoDB query to remove all the documents from the collection notes which contain the string 
// 'cat' in the title but not the string 'the'.

db.notes.find({$and: [{title: {$not: /the/ }}, {title:{$exists: /cat/ }}]});

// // Write a MongoDB query to display all the documents from the collection notes that have a title field
//  which does not contain the string 'dogs' and does contain a title field.

db.notes.find({$and: [{title: {$not: /dogs/ }},{title: {$not: ""}}]});