const orderService = require("../services/order.service");

class OrderController {
  async createOrder(req, res) {
    try {
      const order = await orderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getOrders(req, res) {
    try {
      const orders = await orderService.getOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getOrderById(req, res) {
    try {
      const order = await orderService.getOrderById(req.params.id);
      if (!order) return res.status(404).json({ message: "Order not found" });
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateOrder(req, res) {
    try {
      const updatedOrder = await orderService.updateOrder(req.params.id, req.body);
      if (!updatedOrder) return res.status(404).json({ message: "Order not found" });
      res.json(updatedOrder);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteOrder(req, res) {
    try {
      const deletedOrder = await orderService.deleteOrder(req.params.id);
      if (!deletedOrder) return res.status(404).json({ message: "Order not found" });
      res.json({ message: "Order deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new OrderController();
