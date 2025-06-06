"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const routerList = [
  { path: "/", name: "home", label: "首页" },
  { path: "/news", name: "news", label: "新闻中心" },
  { path: "/products", name: "products", label: "产品与解决方案" },
  { path: "/about", name: "about", label: "关于我们" },
];

export default function Header() {
  const pathname = usePathname();
  const currentRouter = routerList.find((e) => e.path === pathname)?.name;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 关闭菜单当路由变化时
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // 当菜单打开时禁止滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md dark:bg-slate-800/90' 
        : 'bg-transparent [box-shadow:0_1px_8px_rgba(255,255,255,0.1)] dark:[box-shadow:0_1px_8px_rgba(0,0,0,0.2)]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 左侧 logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className={`text-2xl font-bold cursor-pointer transition-opacity duration-300 ${
                isScrolled ? 'text-gray-600 dark:text-gray-100' : 'text-white'
              }`}>
                天下亨通
              </span>
            </Link>
          </div>
          {/* 右侧导航 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 h-16">
              {routerList.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`${
                    isScrolled
                      ? 'text-gray-600 dark:text-gray-100 hover:bg-gray-200/70 hover:dark:bg-gray-500/70'
                      : 'text-white hover:bg-white/10'
                  } ${
                    currentRouter === route.name 
                      ? isScrolled 
                        ? 'bg-gray-200/70 dark:bg-gray-500/70' 
                        : 'bg-white/20'
                      : ''
                  } px-3 py-2 rounded-md text-sm font-medium transition-all`}
                >
                  {route.label}
                </Link>
              ))}
              <div className={`flex items-center space-x-2 ${
                isScrolled ? 'text-gray-600 dark:text-gray-100' : 'text-white'
              } ml-6`}>
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  className="w-4 h-4"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm font-medium">全国服务热线：400-888-8888</span>
              </div>
            </div>
          </div>
          {/* 移动端折叠导航 */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className={`${
                isScrolled 
                  ? 'bg-gray-200/70 hover:bg-gray-300/70'
                  : 'bg-white/10 hover:bg-white/20'
              } inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-600 dark:text-gray-100'
                  : 'text-white'
              } focus:outline-none transition-all duration-150 ease-in-out`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">
                {isOpen ? 'Close main menu' : 'Open main menu'}
              </span>
              {/* 汉堡菜单动画 */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span 
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  }`}
                />
                <span 
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* 移动端折叠菜单 */}
      <div 
        className={`md:hidden fixed inset-0 top-16 z-50 transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div 
          className={`min-h-screen px-2 pt-2 pb-3 sm:px-3 ${
            isScrolled 
              ? 'bg-white/95 dark:bg-slate-800/95' 
              : 'bg-black/90 backdrop-blur-md'
          }`}
        >
          {routerList.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`block ${
                isScrolled
                  ? 'text-gray-600 dark:text-gray-100 hover:bg-gray-200/70 hover:dark:bg-gray-500/70'
                  : 'text-white hover:bg-white/10'
              } ${
                currentRouter === route.name
                  ? isScrolled
                    ? 'bg-gray-200/70 dark:bg-gray-500/70'
                    : 'bg-white/20'
                  : ''
              } px-3 py-4 rounded-md text-lg font-medium transition-all`}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
