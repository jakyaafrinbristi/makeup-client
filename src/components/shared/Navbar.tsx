"use client";
import { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { UserCircle, Menu } from "lucide-react";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);  
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "All Products", path: "/allProducts" },
  
    { name: "Reviews", path: "/reviews" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-pink-50 dark:bg-pink-900/80 shadow-sm backdrop-blur-sm w-full">
      <div className="h-16 flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo with integrated SVG */}
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="text-pink-500 dark:text-pink-400"
          >
            {/* Lipstick */}
            <path
              d="M10 8H22V24H10V8Z"
              fill="currentColor"
            />
            <path
              d="M10 16H22V24H10V16Z"
              fill="currentColor"
              className="text-pink-600 dark:text-pink-500"
            />
            <path
              d="M12 10C12 9.44772 12.4477 9 13 9H19C19.5523 9 20 9.44772 20 10V14C20 14.5523 19.5523 15 19 15H13C12.4477 15 12 14.5523 12 14V10Z"
              fill="currentColor"
              className="text-pink-300 dark:text-pink-200"
            />
            {/* Brush */}
            <rect
              x="6"
              y="18"
              width="3"
              height="8"
              rx="1"
              fill="currentColor"
            />
            <path
              d="M6 18L8 15L10 18H6Z"
              fill="currentColor"
              className="text-pink-400 dark:text-pink-300"
            />
          </svg>
          <span className="text-xl font-bold">
            <span className="text-pink-600 dark:text-pink-300">Makeup</span>
            <span className="text-gray-800 dark:text-gray-100">Store</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 dark:text-gray-200 rounded-md focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-300 transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 ml-6">
        
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none">
                    <div className="flex items-center gap-2">
                      {user.image ? (
                        <img
                          src={user.image}
                          alt={user.name}
                          className="h-8 w-8 rounded-full border-2 border-pink-200 dark:border-pink-700"
                        />
                      ) : (
                        <UserCircle className="h-8 w-8 text-pink-500 dark:text-pink-400" />
                      )}
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link
                      href={
                        user.role === "admin"
                          ? "/admin/dashboard"
                          : "/user/dashboard"
                      }
                    >
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/loginPage">
                  <Button
                    size="sm"
                    className="bg-pink-500 hover:bg-pink-600 text-white"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-pink-500 border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/50"
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 pb-4 px-4">
          <div className="flex flex-col space-y-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-pink-900/50"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between px-3">
       
              {user ? (
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10"
                >
                  Log Out
                </Button>
              ) : (
                <div className="flex gap-3 w-full">
                  <Link href="/loginPage" className="flex-1">
                    <Button
                      size="sm"
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/register" className="flex-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-pink-500 border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/50"
                    >
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}