const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://dinesh:dinesh2089@cluster0.97kxcgc.mongodb.net/")
  .then(() => console.log("Database connected sucessfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//    User model

const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    // create new document
    const newUser = await User.create({
      name: "Soumya",
      age: "23",
      email: "soumya@gmail.com",
      tags: ["Developer", "Designer"],
    });
    const newUser1 = await User({
      name: "Ritesh",
      age: "23",
      email: "ritesh@gmail.com",
      tags: ["Developer", "Designer"],
    });
    await newUser1.save();
    console.log("Created new User", newUser);

    const allUsers = await User.find({});
    console.log(allUsers);

    const findById = await User.findById({ _id: "6a6b7eeb271d1b806763aefe" });
    console.log(findById);

    const findOneUser = await User.findOne({ name: "Ritesh" });
    console.log(findOneUser);

    const LatestUser = await User.findById(newUser._id);
    console.log(LatestUser);

    const findByField = await User.find().select("name email -_id");
    console.log(findByField);

    const limitedUsers = await User.find().limit(2).skip(1);
    console.log(limitedUsers);

    const countUsers = await User.countDocuments();
    console.log(countUsers);

    const DeletedUser = await User.deleteOne({
      _id: "6a6b7eeb271d1b806763aefe",
    });
    console.log("Deleted User ", DeletedUser);

    const UpdateUser = await User.findByIdAndUpdate(
      "6a6b7f011df0a5ff0c923259",
      {
        $set: { name: "Dinesh" },
      },
    );
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
