"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userCtrl_1 = __importDefault(require("../controllers/userCtrl"));
const router = express_1.default.Router();
router.post('/user', userCtrl_1.default.createUser);
router.get('/user', userCtrl_1.default.geaAllUser);
router
    .route('/user/:id')
    .get(userCtrl_1.default.getUser)
    .delete(userCtrl_1.default.deleteUser)
    .patch(userCtrl_1.default.updateUser);
exports.default = router;
