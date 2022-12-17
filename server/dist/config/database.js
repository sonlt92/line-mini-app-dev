"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URL = 'mongodb+srv://admin:Gitec123@gitecvn.ake6ycf.mongodb.net/Gas-Station?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
};
mongoose_1.default.set('strictQuery', false);
mongoose_1.default
    .connect(`${URL}`, options)
    .then(() => {
    console.info('Mongoose connection done');
})
    .catch((e) => {
    console.info('Mongoose connection error');
    console.error(e);
});
