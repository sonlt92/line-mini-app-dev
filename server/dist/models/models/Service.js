"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceModel = void 0;
const mongoose_1 = require("mongoose");
const ServiceSchema = new mongoose_1.Schema({
    nameService: {
        type: String,
        require: true,
        unique: true,
    },
    price: {
        type: Number,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
});
exports.ServiceModel = (0, mongoose_1.model)('Service', ServiceSchema);
