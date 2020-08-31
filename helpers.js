const ObjectId = require("mongodb").ObjectID;

function toObjectID(string) {
  return new ObjectId(string) ?? new Error("Cannot convet to ObjectID");
}

exports.toObjectID = toObjectID;
