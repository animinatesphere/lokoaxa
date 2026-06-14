import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../component/DashboardLayout';

const initialCartItems = [
  {
    id: 1,
    name: "Gagnon Rosepink Dress",
    size: "M",
    price: 46000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop"
  },
  {
    id: 2,
    name: "Gagnon Rosepink Dress",
    size: "M",
    price: 46000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1515347619362-e9fd0fdd342c?w=500&h=500&fit=crop"
  }
];

const formatPrice = (price) => {
  return "₦" + price.toLocaleString();
};

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingFee = cartItems.length > 0 ? 6000 : 0;
  const total = subTotal + shippingFee;

  return (
    <DashboardLayout>
      <div className="py-4">
        {cartItems.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-20 h-20 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
               <ShoppingBag size={40} className="text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Wardrobe is Empty</h2>
            <p className="text-gray-500 text-center mb-8 max-w-sm text-sm">
              No looks selected. Explore Gowns, High Jewelry, and designer items to craft your aesthetic
            </p>
            <Link to="/dashboard" className="px-12 py-3 bg-[#B000FF] text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Examine Catalog
            </Link>
          </div>
        ) : (
          // Filled State
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="flex-1 flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 p-4 border border-gray-100 bg-white rounded-xl shadow-sm">
                  <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex flex-col justify-between flex-1 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-500">Size: {item.size}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-gray-200 rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <div className="w-8 h-8 flex items-center justify-center text-sm font-medium border-x border-gray-200">
                          {item.quantity}
                        </div>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="font-bold text-gray-900">
                        {formatPrice(item.price)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[350px]">
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm sticky top-28">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Sub-total</span>
                    <span className="font-bold text-gray-900">{formatPrice(subTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping fee</span>
                    <span className="font-bold text-gray-900">{formatPrice(shippingFee)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-[#B000FF]">{formatPrice(total)}</span>
                  </div>
                </div>

                <Link to="/checkout" className="w-full py-3 bg-[#B000FF] text-white rounded-lg font-medium hover:bg-purple-700 transition-colors mb-4 flex justify-center items-center">
                  Check out
                </Link>

                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  By checking out, you agree to our Terms of Service and Privacy Policy. Secure payment guaranteed
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Cart;
