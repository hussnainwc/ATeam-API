const Base = require("./Base.js");
const mongoose = require("mongoose");
const clubSchema = require("../schemas/club.js");

class Club extends Base {
  constructor() {
    super();
    this.Club = mongoose.model("Club", clubSchema);
  }

  async getClubs() {
    return await this.Club.find({});
  }

  async getClub(_id) {
    return await this.Club.findOne(_id);
  }

  async addClub(_club) {
    const club = new this.Club({
      name: _club.name,
    });

    return await club.save();
  }

  async updateClub(_id, _club) {
    return await this.Club.findByIdAndUpdate(_id, _club, this.updateOptions);
    _;
  }

  async deleteClub(_id) {
    return await this.Club.findByIdAndDelete(_id, this.deleteOptions);
  }
}

module.exports = new Club();
