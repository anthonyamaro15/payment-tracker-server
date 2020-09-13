exports.seed = function (knex) {
  return knex("tracker").insert([
    { card_type: "amex", account: "lisa", amount: 123, store_name: "walmart" },
    { card_type: "amex", account: "joel", amount: 1233, store_name: "smith" },
    { card_type: "amex", account: "mat", amount: 1323, store_name: "walmart" },
    {
      card_type: "amex",
      account: "raul",
      amount: 1323,
      store_name: "dollar tree",
    },
    { card_type: "amex", account: "rosy", amount: 1223, store_name: "walmart" },
  ]);
};
