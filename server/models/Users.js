import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timeStamps: true }
);

userSchema.pre("save", async function nxt() {
  if (!this.isModified("password")) {
    nxt();
  } else {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

userSchema.methods.comparePwd = async function (pwd) {
  return bcrypt.compare(pwd, this.password);
};

const userModel = mongoose.model("Users", userSchema);

export default userModel;
