const ObjectId = require("mongodb").ObjectID;
const config = require("config");

function toObjectID(string) {
  return new ObjectId(string) ?? new Error("Cannot convet to ObjectID");
}

exports.toObjectID = toObjectID;
