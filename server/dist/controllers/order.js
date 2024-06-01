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
exports.updateOrder = exports.postOrder = exports.completeOrder = exports.getOrdersCompleted = exports.getOrders = void 0;
const order_1 = __importDefault(require("../models/order"));
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listOrders = yield order_1.default.findAll();
    res.json({
        listOrders
    });
});
exports.getOrders = getOrders;
const getOrdersCompleted = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listOrders = yield order_1.default.findAll({
            where: {
                delivered: false,
                deleted: false
            }
        });
        res.json({
            listOrders
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error fetching completed orders',
            error
        });
    }
});
exports.getOrdersCompleted = getOrdersCompleted;
const completeOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const order = yield order_1.default.findByPk(id);
    if (order) {
        yield order.update({ delivered: true });
        res.json({
            msg: "The order was updated succesfully"
        });
    }
    else {
        res.status(404).json({
            msg: "Not found"
        });
    }
});
exports.completeOrder = completeOrder;
const postOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const newOrder = yield order_1.default.create(body);
        res.json({
            msg: 'Order Created',
            order: newOrder
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error creating order',
            error
        });
    }
});
exports.postOrder = postOrder;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const product = yield order_1.default.findByPk(id);
    if (product) {
        yield product.update(body);
        res.json({
            msg: "The order was updated succesfully"
        });
    }
    else {
        res.status(404).json({
            msg: "Not found"
        });
    }
});
exports.updateOrder = updateOrder;
