
import { Request, Response } from "express"
import Order from "../models/order"



export const getOrders = async (req:Request, res:Response) => {
    const listOrders = await Order.findAll()
    res.json({
        listOrders
    })
}
export const getOrdersCompleted = async (req: Request, res: Response) => {
    try {
        const listOrders = await Order.findAll({
            where: {
                delivered: false,
                deleted: false
            }
        });
        res.json({
            listOrders
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching completed orders',
            error
        });
    }
}

export const completeOrder = async (req:Request, res:Response) => {
    const { id } = req.params
    const { body } = req
    const order = await Order.findByPk(id);
    if(order){
        await order.update({delivered: true});
        res.json({
            msg: "The order was updated succesfully"
        })
    }else{
        res.status(404).json({
            msg : "Not found"
        })
    }

}


export const postOrder = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const newOrder = await Order.create(body);
        res.json({
            msg: 'Order Created',
            order: newOrder
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error creating order',
            error
        });
    }
};


export const updateOrder = async (req:Request, res:Response) => {
    const { id } = req.params
    const { body } = req
    const product = await Order.findByPk(id);
    if(product){
        await product.update(body);
        res.json({
            msg: "The order was updated succesfully"
        })
    }else{
        res.status(404).json({
            msg : "Not found"
        })
    }
}
