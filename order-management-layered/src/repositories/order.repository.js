const Order = require("../models/order.model");

class OrderRepository {
  async createOrder(orderData) {
    return await Order.create(orderData);
  }

  async getOrders() {
    return await Order.find();
  }

  async getOrderById(id) {
    return await Order.findById(id);
  }

  async updateOrder(id, updateData) {
    return await Order.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteOrder(id) {
    return await Order.findByIdAndDelete(id);
  }
}

module.exports = new OrderRepository();
