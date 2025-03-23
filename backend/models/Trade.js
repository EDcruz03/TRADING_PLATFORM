const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    asset: { type: String, required: true },
    type: { type: String, enum: ['buy', 'sell'], required: true },
    amount: { type: Number, required: true },
    price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Trade', TradeSchema);
