var model = require('./model');
var Schema = model.Schema;
var cipher = require('../util/cipher');
var incomeBillSchema = new Schema({
        time: Date,
        amount: String,
        platform: String,
        content: String
});

incomeBillSchema.methods.getAmount = function(price) {
       return this.amount;
}

incomeBillSchema.methods.encryptImportance = function() {

}



var IncomeBill = model.model('IncomeBill', incomeBillSchema);
module.exports.add = (income, callback) => {
        const newincomeitem = new IncomeBill(income);
        newincomeitem.encryptImportance();
        newincomeitem.save().then(() => {
                callback(null, '新的收入记录已储存');
        });

}
module.exports.update = (target, update, callback) => {
        IncomeBill.update(target, update, (err, raw) => {
                if (err) callback(err, null);
                callback(null, '更新成功');
        });
}
module.exports.list = (query, callback) => {
        IncomeBill.find(query, (err, bills) => {
                if (err) callback(err, null);
                callback(null, bills);
        });
}

module.exports.del = (query, callback) => {
        IncomeBill.remove(query, (err) => {
                if (err) callback(err, null);
                callback(null, '删除成功');
        });
}

module.exports.cleanAllIncomeBill = () => {
        IncomeBill.remove("'IncomeBill'", (err) => {
                if (err) callback(err, null);
                callback(null, '删除所有book成功');
        });

}

module.exports.getModelQuery = (query) => {
        return IncomeBill.find(query);
}

module.exports.findOneIncomeBillById = (id, callback) => {
        IncomeBill.findById(id, (err, book) => {
                if (err) callback(err, null);
                callback(null, book);
        });
}
