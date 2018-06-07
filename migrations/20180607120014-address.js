'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('address', {
    address_id: {
      type: 'int',
      primaryKey: true
    },
    charity_id: {
      type: 'int',
      // foreign key
    },
    number: {
      type: 'int',
    },
    street: {
      type: 'string'
    }
  })
  return callback();
};

exports.down = function(db, callback) {
  db.dropTable('address', callback);
};

exports._meta = {
  "version": 1
};
