const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    addresses: [
      {
        line: { type: String, required: true },
        area: { type: String, required: false },
        city: { type: String, required: true },
        state: { type: String, required: true },
        address_type: { type: String, required: false },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {  //readymade hook in mongoose its a middleware
  //let modifiedPassword = this.passowrd + xyz;
  //this.password  = modifedPassword;
  
    if (!this.isModified("password")) return next();
  
    // secret , salt => sdkfhsdkfh , secret + sdkfhsdkfh => dskfgkcskdfgsdkfsdf
    // salt
    // hashing rounds =>
    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
  });
  
  userSchema.methods.checkPassword = function (password) {    //method
    return bcrypt.compareSync(password, this.password);
  };

const User = mongoose.model("user", userSchema);

module.exports = User;