const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("DataBase Connected Successfully!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DBURL);
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = new mongoose.model("User", UserSchema);

module.exports = User;
