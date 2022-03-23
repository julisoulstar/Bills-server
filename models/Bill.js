const mongoose = require("mongoose");
var AutoIncrement = require('mongoose-sequence')(mongoose);
const BillSchema = mongoose.Schema({
    items: [{
        name: String,
        price: Number,
        iva: Number
    }],
    totalValue: {
        type: Number
    },
    totalIva: {
        type: Number
    },
    paid: {
        type: Boolean
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
})
BillSchema.plugin(AutoIncrement, {inc_field: 'code' });

module.exports = mongoose.model('Bill', BillSchema)