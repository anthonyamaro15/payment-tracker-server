const db = require("../data/config-db");

function getAll() {
  return db("tracker");
}
function add(obj) {
  return db("tracker").insert(obj, "id");
}

function getById(id) {
  return db("tracker").where({ id }).first();
}
function findBy(filter) {
  return db("tracker").where(filter).first();
}
function update(id, changes) {
  return db("tracker").where({ id }).update(changes);
}

function remove(id) {
  return db("tracker").where({ id }).del();
}

module.exports = {
  getAll,
  add,
  getById,
  findBy,
  update,
  remove,
};
