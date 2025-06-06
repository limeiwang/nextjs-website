'use client';

import Link from 'next/link';
import { Target, BarChart, Users, Building, Hospital, ShoppingBag } from 'lucide-react';

const products = [
  {
    title: 'AI决策平台',
    description: '智能分析系统，辅助企业决策',
    icon: Target,
    link: '/products/ai'
  },
  {
    title: '数据中台',
    description: '统一数据管理，释放数据价值',
    icon: BarChart,
    link: '/products/data'
  },
  {
    title: '协同办公平台',
    description: '提升团队协作效率',
    icon: Users,
    link: '/products/office'
  }
];

const solutions = [
  {
    title: '智慧金融解决方案',
    description: '为金融机构提供智能风控、数据分析等全套解决方案',
    icon: Building,
    link: '/solutions/finance'
  },
  {
    title: '智慧医疗解决方案',
    description: '助力医疗机构实现数字化转型，提升诊疗效率',
    icon: Hospital,
    link: '/solutions/medical'
  },
  {
    title: '智慧零售解决方案',
    description: '打造全渠道零售解决方案，提升用户购物体验',
    icon: ShoppingBag,
    link: '/solutions/retail'
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅 */}
      <div className="relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-black">
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">产品与解决方案</h1>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <p className="text-base md:text-lg font-medium">PRODUCTS & SOLUTIONS</p>
          </div>
        </div>
      </div>

      {/* 产品部分 */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">核心产品</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            创新产品，助力企业数字化转型
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.link}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <product.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-gray-600">{product.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* 解决方案部分 */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">行业解决方案</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              针对不同行业特点，提供定制化的解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.link}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <solution.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
