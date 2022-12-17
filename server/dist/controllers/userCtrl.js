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
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = require("./../models/User.model");
const userCtrl = {
    createUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newUser = new User_model_1.UserModel(Object.assign({}, req.body));
            if (!newUser)
                return res.status(400).json({ msg: 'Invalid data' });
            yield newUser.save();
            return res.status(200).json({ msg: 'Create user success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    geaAllUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield User_model_1.UserModel.find();
            if (!users)
                return res.status(400).json({ msg: 'User not found' });
            res.status(200).json(users);
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    getUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User_model_1.UserModel.findById(req.query.id);
            if (!user)
                return res.status(400).json({ msg: 'User not found' });
            res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User_model_1.UserModel.findByIdAndDelete(req.params.id);
            if (!user)
                return res.status(400).json({ msg: 'User not found' });
            res.status(200).json({ msg: 'Delete user success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User_model_1.UserModel.findByIdAndUpdate(req.params.id, req.body);
            if (!user)
                return res.status(400).json({ msg: 'User not found' });
            return res.status(200).json({ msg: 'Update user success' });
        }
        catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    })
};
exports.default = userCtrl;
