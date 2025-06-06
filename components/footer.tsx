import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-12">
          {/* Logo和公司介绍 */}
          <div className="flex flex-col items-center lg:items-start space-y-5">
            <Link 
              href="/" 
              className="group transition-transform duration-300 hover:scale-105"
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                天下亨通
              </span>
            </Link>
            <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center lg:text-left">
              <p className="mb-3">
                河北雄安天下亨通网络科技有限公司致力于为企业提供创新的网络解决方案。
              </p>
            </div>
          </div>

          {/* 快速链接 */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-base font-bold uppercase tracking-wider text-gray-900 dark:text-white text-center lg:text-left">
              快速链接
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>
                <Link 
                  href="/" 
                  className="inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mr-3"></span>
                  首页
                </Link>
              </li>
              <li>
                <Link 
                  href="/news" 
                  className="inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mr-3"></span>
                  新闻中心
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mr-3"></span>
                  产品与解决方案
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="inline-flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 mr-3"></span>
                  关于我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-base font-bold uppercase tracking-wider text-gray-900 dark:text-white text-center lg:text-left">
              联系我们
            </h3>
            <ul className="space-y-3.5 text-gray-600 dark:text-gray-300">
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3.5 group-hover:bg-blue-600 transition-colors duration-200">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  400-888-8888
                </span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3.5 group-hover:bg-blue-600 transition-colors duration-200">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  contact@example.com
                </span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3.5 group-hover:bg-blue-600 transition-colors duration-200">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  河北省雄安新区启动区企业总部区
                </span>
              </li>
            </ul>
          </div>

          {/* 关注我们 */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-base font-bold uppercase tracking-wider text-gray-900 dark:text-white text-center lg:text-left">
              关注我们
            </h3>
            <div className="flex justify-center lg:justify-start space-x-5">
              <a 
                href="javascript:void(0)" 
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </a>
              <a 
                href="javascript:void(0)" 
                aria-label="Twitter"
                className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                </svg>
              </a>
              <a 
                href="javascript:void(0)" 
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-2v-3.158c0-.674-.616-1.842-2-1.842s-2 1.168-2 1.842V16h-2v-6h2v1.183c.669-.815 1.631-.998 2-.998C14.775 10.185 17 11.354 17 14.185V16z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 版权信息 */}
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="py-6 sm:py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Copyright © {new Date().getFullYear()} 河北雄安天下亨通网络科技有限公司 版权所有
            </p>
            <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                隐私政策
              </Link>
              <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
