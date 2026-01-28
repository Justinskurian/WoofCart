import React from "react";

const checkout = {
  _id: "12324",
  createdAt: new Date(),
  checkoutItems: [
    {
      name: "BarkBites Chicken Dry Food (3kg)",
      image: "https://picsum.photos/300/400?random=1",
      size: "3kg",
      color: "N/A",
      quantity: 1,

      price: 899,
    },
    {
      name: "Dental Chew Sticks",
      image: "https://picsum.photos/300/400?random=2",
      size: "Pack of 12",
      color: "N/A",
      quantity: 1,
      price: 349,
    },
    {
      name: "KONG Rubber Chew Toy",
      image: "https://picsum.photos/300/400?random=3",
      size: "Medium",
      color: "Red",
      quantity: 1,
      price: 799,
    },
  ],
};

const OrderConfirmation = () => {
  const subtotal = checkout.checkoutItems.reduce(
    (acc, item) => acc + item.price,
    0
  );
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8 mt-6">
        Thank You For Your Order
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border border-gray-500 mb-10">
          <div className="flex justify-between mb-6">
            {/* Order id and date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date:{" "}
                {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Order Items */}
          <div className="border-t  border-gray-400 pt-4">
            {checkout.checkoutItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between py-4 border-b border-gray-300">
                <div className="flex items-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-md font-medium">{item.name}</h3>
                    <p className="text-gray-500">Size: {item.size}</p>
                    <p className="text-gray-500">Color: {item.color}</p>
                  </div>
                </div>
                <p className="text-lg font-medium">
                  ₹{item.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>

<div className="mt-6 flex justify-between items-start">
  {/* Payment Method */}
  <div>
    <p className="text-gray-600">Payment Method</p>
    <p className="font-medium">PayPal</p>
  </div>

  {/* Price Summary */}
  <div className="space-y-2 text-right">
    <p className="text-gray-600">
      Subtotal: ₹{subtotal.toLocaleString()}
    </p>
    <p className="text-gray-600">
      Shipping: ₹{shipping.toLocaleString()}
    </p>
    <p className="text-xl font-bold">
      Total: ₹{total.toLocaleString()}
    </p>
  </div>
</div>

        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
