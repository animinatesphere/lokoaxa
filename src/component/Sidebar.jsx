import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Compass,
  ShoppingBag,
  ShoppingCart,
  Heart,
  Package,
  Headphones,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import logo from "../assets/f6d9e4caf0e8582f0a13e8be68aa9331d2e489b1.png";
const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Discover", path: "/discover", icon: Compass },
    { name: "Categories", path: "/categories", icon: ShoppingBag },
    { name: "Cart", path: "/cart", icon: ShoppingCart },
    { name: "Whichlist", path: "/wishlist", icon: Heart }, // Kept spelling from image
    { name: "Orders", path: "/orders", icon: Package },
    { name: "Help Center", path: "/help", icon: Headphones },
    { name: "Profile", path: "/profile", icon: User },
  ];

  const bottomItems = [
    { name: "Settings", path: "/settings", icon: Settings },
    { name: "Logout", path: "/login", icon: LogOut }, // Redirects to login for now
  ];

  return (
    <div className="w-64 bg-white h-screen flex flex-col fixed left-0 top-0 border-r border-gray-100 font-sans">
      {/* Logo Area */}
      <div className="h-24 flex items-center px-8 border-b border-gray-50">
        <div className="flex items-center gap-2">
          {/* Mock Logo */}
          <img src={logo} alt="" className="w-[56px] h-[58px]" />
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors duration-200 ${
                isActive
                  ? "bg-[#BD00FF] text-[#FBFBFB] shadow-md shadow-purple-500/20 hat"
                  : "text-[#4F4A52]  hover:bg-gray-50 hover:text-gray-900 hat"
              }`}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.5 : 2}
                className={isActive ? "text-white" : "text-gray-400"}
              />
              <span className={`text-sm ${isActive ? "font-medium" : ""}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Menu */}
      <div className="p-4 flex flex-col gap-2 border-t border-gray-50 mb-4">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
            >
              <Icon size={20} strokeWidth={2} className="text-gray-400" />
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
