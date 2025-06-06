"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// 模拟新闻数据
const newsData = [
  {
    id: 1,
    title: '公司荣获2024年度科技创新企业奖',
    category: '公司新闻',
    date: '2024-03-20',
    image: '/images/news1.jpg',
    summary: '在最新举办的2024年度科技创新大会上，我司凭借在人工智能领域的突出贡献，荣获"年度科技创新企业奖"。',
  },
  {
    id: 2,
    title: '成功举办2024技术开放日活动',
    category: '活动动态',
    date: '2024-03-15',
    image: '/images/news2.jpg',
    summary: '公司在北京总部成功举办了2024技术开放日活动，展示了最新的技术成果和创新方案。',
  },
  {
    id: 3,
    title: '新一代产品发布会圆满结束',
    category: '产品资讯',
    date: '2024-03-10',
    image: '/images/news3.jpg',
    summary: '公司在上海成功举办新一代产品发布会，展示了多款创新产品，获得了业界广泛关注。',
  },
  {
    id: 4,
    title: '公司与某知名高校达成战略合作',
    category: '公司新闻',
    date: '2024-03-05',
    image: '/images/news4.jpg',
    summary: '我司与某知名高校签署战略合作协议，共同推进产学研一体化发展。',
  },
  {
    id: 5,
    title: '2024年度客户服务大会召开',
    category: '活动动态',
    date: '2024-02-28',
    image: '/images/news5.jpg',
    summary: '公司在广州召开2024年度客户服务大会，分享服务创新经验，探讨服务升级方向。',
  },
  {
    id: 6,
    title: '新技术研发中心正式投入使用',
    category: '公司新闻',
    date: '2024-02-20',
    image: '/images/news6.jpg',
    summary: '公司斥资建设的新技术研发中心正式投入使用，将进一步提升公司的研发实力。',
  }
];

const categories = ['全部', '公司新闻', '活动动态', '产品资讯'];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredNews = selectedCategory === '全部'
    ? newsData
    : newsData.filter(news => news.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅 */}
      <div className="relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-black">
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">新闻资讯</h1>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <p className="text-base md:text-lg font-medium">NEWS INFORMATION</p>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* 分类标签 */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 新闻列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium">{news.category}</span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.summary}
                </p>
                <Link 
                  href={`/news/${news.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  查看详情
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
