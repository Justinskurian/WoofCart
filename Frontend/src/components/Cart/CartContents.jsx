import React, { useState } from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const [cartProducts, setCartProducts] = useState([
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
  ]);

  const increaseQty = (index) => {
    setCartProducts((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (index) => {
    setCartProducts((prev) =>
      prev.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (index) => {
    setCartProducts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size} | Color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => decreaseQty(index)}
                  className="border rounded-2xl px-2.5 py-1 text-xl font-medium"
                >
                  −
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button
                  onClick={() => increaseQty(index)}
                  className="border rounded-2xl px-2 py-1 text-xl font-medium"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p>₹{(product.price * product.quantity).toLocaleString()}</p>
            <button onClick={() => removeItem(index)}>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;


// The normal File is below, in case if you are connecting backend

// import React from "react";
// import { RiDeleteBin3Line } from "react-icons/ri";

// const CartContents = () => {
//   const cartProducts = [
//     {
//       name: "BarkBites Chicken Dry Food (3kg)",
//       image: "https://picsum.photos/300/400?random=1",
//       size: "3kg",
//       color: "N/A",
//       quantity: 1,

//       price: 899,
//     },
//     {
//       name: "Dental Chew Sticks",
//       image: "https://picsum.photos/300/400?random=2",
//       size: "Pack of 12",
//       color: "N/A",
//       quantity: 1,
//       price: 349,
//     },
//     {
//       name: "KONG Rubber Chew Toy",
//       image: "https://picsum.photos/300/400?random=3",
//       size: "Medium",
//       color: "Red",
//       quantity: 1,
//       price: 799,
//     },
//   ];
//   return (
//     <div>
//       {cartProducts.map((product, index) => (
//         <div
//           key={index}
//           className="flex items-start justify-between py-4 border-b"
//         >
//           <div className="flex items-start">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-20 h-24 object-cover mr-4 rounded"
//             />
//             <div>
//               <h3>{product.name}</h3>
//               <p className="text-sm text-gray-500">
//                 Size:{product.size} | color: {product.color}
//               </p>
//               <div className="flex items-center mt-2">
//                 <button className="border rounded-2xl px-2.5 py-1 text-xl font-medium">
//                   -
//                 </button>
//                 <span className="mx-4">{product.quantity}</span>
//                 <button className="border rounded-2xl px-2 py-1 text-xl font-medium">
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p>₹{product.price.toLocaleString()}</p>

//             <button>
//               <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartContents;
