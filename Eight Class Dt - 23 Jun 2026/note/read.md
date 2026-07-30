Mongoose CRUD Notes

1. Connect to MongoDB

const mongoose = require("mongoose");

await mongoose.connect("YOUR_MONGODB_URI");

mongoose.connect() returns a Promise.

Use await or .then().

2. Create a Schema

const userSchema = new mongoose.Schema({
name: String,
email: String,
age: Number,
tags: [String],
createdAt: {
type: Date,
default: Date.now,
},
});

A Schema defines the structure of documents.

3. Create a Model

const User = mongoose.model("User", userSchema);

A Model is used to perform CRUD operations.

CREATE

Using create()

const user = await User.create({
name: "Dinesh",
email: "dinesh@gmail.com",
});

Using new + save()

const user = new User({
name: "Ritesh",
email: "ritesh@gmail.com",
});

await user.save();

READ

Find All

const users = await User.find({});

Find By ID

const user = await User.findById("USER_ID");

Find One

const user = await User.findOne({
name: "Ritesh",
});

Select Specific Fields

const users = await User.find()
.select("name email -\_id");

name email → include fields

-\_id → exclude \_id

Limit

const users = await User.find().limit(2);

Skip

const users = await User.find()
.limit(2)
.skip(1);

Useful for pagination.

Count Documents

const total = await User.countDocuments();

UPDATE

Update by ID

const updatedUser = await User.findByIdAndUpdate(
"USER_ID",
{
$set: {
name: "Dinesh",
},
},
{
new: true,
}
);

new: true returns the updated document.

You can also write:

await User.findByIdAndUpdate(
"USER_ID",
{
name: "Dinesh",
},
{
new: true,
}
);

DELETE

Delete One

await User.deleteOne({
\_id: "USER_ID",
});

Delete By ID

await User.findByIdAndDelete("USER_ID");

Common Mistakes

Forgetting await

const user = User.create({...}); // Promise

Correct:

const user = await User.create({...});

Using await outside an async function

Wrong:

await user.save();

Correct:

async function run() {
await user.save();
}

Creating Model After Using It

Wrong:

const user = new User();

const User = mongoose.model("User", schema);

Correct:

const User = mongoose.model("User", schema);

const user = new User();

Wrong findByIdAndUpdate()

Wrong:

User.findByIdAndUpdate({
\_id: "...",
$set: {
name: "Dinesh",
},
});

Correct:

User.findByIdAndUpdate(
"ID",
{
$set: {
name: "Dinesh",
},
}
);

CRUD Summary

Operation Method

Create create() / save()Read All find()Read One findOne()Read By ID findById()Update findByIdAndUpdate()Delete deleteOne() / findByIdAndDelete()Count countDocuments()

Today's Progress

✅ Connected MongoDB Atlas

✅ Created Schema

✅ Created Model

✅ Inserted Documents

✅ Read Documents

✅ Selected Fields

✅ Pagination (limit, skip)

✅ Counted Documents

✅ Updated Documents

✅ Deleted Documents
