var connection = require('./connection.js');

var orm = {

    all: function (tableInput, orderBy, cb) {
        var queryString = "SELECT * FROM ?? ORDER BY ?? asc";
        connection.query(queryString, [tableInput, orderBy], function (err, res) {
            if (err) throw err;
            cb(res)
        });
    },

    create: function (tableInput, val, cb) {
        var queryString = "INSERT INTO ?? ( ??) VALUES (?) ";
        connection.query(queryString, [tableInput, val], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    update: function (tableInput, condition, cb) {
    var queryString ="UPDATE ?? SET ?? = ? WHERE id = ?";
connection.query(queryString, [tableInput, condition],
    function (err, result) {
        if (err) throw err;
        cb(result)
    }
);
}

};

module.exports = orm;

