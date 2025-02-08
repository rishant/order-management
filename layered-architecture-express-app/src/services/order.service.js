const orderRepository = require("../repositories/order.repository");

class OrderService {
  async createOrder(orderData) {
    return await orderRepository.createOrder(orderData);
  }

  async getOrders() {
    return await orderRepository.getOrders();
  }

  async getOrderById(id) {
    return await orderRepository.getOrderById(id);
  }

  async updateOrder(id, updateData) {
    return await orderRepository.updateOrder(id, updateData);
  }

  async deleteOrder(id) {
    return await orderRepository.deleteOrder(id);
  }
}

module.exports = new OrderService();
