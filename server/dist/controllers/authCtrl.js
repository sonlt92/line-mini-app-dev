"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_model_1 = require("../models/User.model");
const generateToken_1 = require("./../config/generateToken");
const CLIENT_BASE_URL = `${process.env.BASE_URL}`;
const authCtrl = {
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { account, password } = req.body;
            const user = yield User_model_1.UserModel.findOne({ account });
            if (!user)
                return res.status(400).json({ msg: 'This account does not exists.' });
            loginUser(user, password, res);
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    logout: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return res.status(200).json({ msg: 'Logged out!' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    })
};
const loginUser = (user, password, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isMatch = yield bcrypt_1.default.compare(password, user.password);
    if (!isMatch)
        return res.status(400).json({ msg: 'Password is incorrect.' });
    const access_token = (0, generateToken_1.generateAccessToken)({ id: user._id });
    const refresh_token = (0, generateToken_1.generateRefreshToken)({ id: user._id });
    //set cookie when logged
    res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        path: `/api/refresh_token`,
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30days
    });
    res.json({
        msg: 'Login success',
        access_token,
        user: Object.assign(Object.assign({}, user._doc), { password: '' })
    });
});
exports.default = authCtrl;
