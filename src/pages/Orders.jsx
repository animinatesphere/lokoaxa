import React from 'react';
import DashboardLayout from '../component/DashboardLayout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Orders = () => {
  const orders = [
    {
      id: 1,
      orderNumber: '#LX-B921',
      image: 'https://images.unsplash.com/photo-1515347619362-e9fd0fdd342c?w=100&h=100&fit=crop',
      date: 'Oct 12, 2023',
      itemCount: '3 item',
      price: '₦46,000',
      status: 'Delivered'
    },
    {
      id: 2,
      orderNumber: '#LX-B921',
      image: 'https://images.unsplash.com/photo-1515347619362-e9fd0fdd342c?w=100&h=100&fit=crop',
      date: 'Oct 12, 2023',
      itemCount: '3 item',
      price: '₦46,000',
      status: 'Delivered'
    },
    {
      id: 3,
      orderNumber: '#LX-B921',
      image: 'https://images.unsplash.com/photo-1515347619362-e9fd0fdd342c?w=100&h=100&fit=crop',
      date: 'Oct 12, 2023',
      itemCount: '3 item',
      price: '₦46,000',
      status: 'Delivered'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8 pb-12">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Purchase History</h1>
        </div>

        {/* Orders List */}
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <Link
              key={order.id}
              to={`/order/${order.id}`}
              className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  src={order.image}
                  alt="Order item"
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>

              {/* Order Details */}
              <div className="flex-1">
                <h3 className="text-gray-900 font-semibold mb-2">Order {order.orderNumber}</h3>
                <p className="text-gray-500 text-sm">
                  <svg className="inline mr-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="1"/><path d="M12 1v22M4.22 4.22l15.56 15.56M1 12h22M4.22 19.78l15.56-15.56"/>
                  </svg>
                  {order.date} • {order.itemCount} • <span className="font-semibold text-gray-900">{order.price}</span>
                </p>
              </div>

              {/* Status Badge */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${getStatusColor(order.status)}`}>
                <span className="text-sm font-medium">{order.status}</span>
              </div>

              {/* Chevron */}
              <ChevronRight size={20} className="text-gray-400 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Orders;
