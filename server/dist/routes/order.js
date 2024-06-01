"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_1 = require("../controllers/order");
const router = (0, express_1.Router)();
router.get('/', order_1.getOrdersCompleted);
router.post("/", order_1.postOrder);
router.put("/:id", order_1.completeOrder);
exports.default = router;
