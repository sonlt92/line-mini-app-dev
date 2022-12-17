"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        require: true,
        unique: true,
    },
    name: {
        type: String,
    },
    furigana: {
        type: String,
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});
exports.UserModel = (0, mongoose_1.model)('User', UserSchema);
