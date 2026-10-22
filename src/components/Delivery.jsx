import React from 'react'

function Delivery({ order, status }) {
  return (
    <div>
      <h3>Order: {order}</h3>

      <p>
        {status === "pending"
          ? "Your order is pending."
          : status === "on-the-way"
          ? "Your order is on the way."
          : status === "delivered"
          ? "Your order has been delivered."
          : "Unknown status."}
      </p>
    </div>
  );
}

export default Delivery