"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type News = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
};

const categories = ['全部', '公司新闻', '活动动态', '产品资讯'];

export default function News() {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('全部');

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        setNewsData(data);
      });
  }, []);

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
                  <span className="text-sm text-gray-500">{news.date?.slice(0, 10)}</span>
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
