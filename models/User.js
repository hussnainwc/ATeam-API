const Base = require("./Base.js");
const mongoose = require("mongoose");
const {salt, hash} = require("../hash.js");
const userSchema = require("../schemas/user.js");
const config = require("config");
const jwt = require("jsonwebtoken");

class User extends Base {
  constructor() {
    super();
    this.User = mongoose.model("User", userSchema);
  }

  async generateTokens(_user) {
    return Promise.all([
      await this.accessToken(_user),
      await this.refreshToken(_user),
    ]);
  }

  async accessToken(_user) {
    return jwt.sign(
      {
        sub: _user.id,
      },
      config.get("jwtAccessKey"),
      {
        expiresIn: "1h",
      }
    );
  }

  async refreshToken(_user) {
    return jwt.sign(
      {
        jti: mongoose.Types.ObjectId(),
        sub: _user.id,
      },
      config.get("jwtRefreshKey"),
      {
        expiresIn: "5d",
      }
    );
  }

  async checkUniqueEmail(_user) {
    const user = await this.findUser(_user);
    if (user) throw new Error("User with the given email already exists");
    return null;
  }

  async checkUserExists(_user) {
    const user = await this.findUser(_user);
    if (!user) throw new Error("Invalid email or password");
    return user;
  }

  async findUser(_user) {
    return await this.User.findOne({email: _user.email});
  }

  async createUser(_user) {
    const user = new this.User({
      name: _user.name,
      email: _user.email,
      password: await hash(_user.password, await salt()),
    });

    return await user.save();
  }

  async updateUser(_id, _user) {
    return await this.User.findByIdAndUpdate(id, _user, this.updateOptions);
  }

  async deleteUser(_id) {
    return await this.User.findByIdAndDelete(_id, this.deleteOptions);
  }
}

module.exports = new User();
