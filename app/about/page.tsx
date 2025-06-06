"use client";

import Image from 'next/image';
import { useState } from 'react';
import MapComponent from '@/components/Map';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 这里可以添加实际的表单提交逻辑
      await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟提交
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅 */}
      <div className="relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0 bg-black">
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">关于我们</h1>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <p className="text-base md:text-lg font-medium">ABOUT US</p>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* 公司简介 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">公司简介</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                我们是一家致力于创新和卓越的科技公司，专注于为客户提供最优质的解决方案。自成立以来，我们始终坚持以客户需求为导向，以技术创新为驱动，不断突破自我，追求卓越。
              </p>
              <p className="text-lg text-gray-600">
                在快速发展的数字时代，我们持续投入研发，打造符合未来需求的产品和服务，帮助企业实现数字化转型，提升运营效率。
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/banner.jpeg"
                alt="公司环境"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 核心价值观 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">核心价值观</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '创新驱动',
                description: '持续创新，引领行业发展',
                icon: '🚀'
              },
              {
                title: '客户至上',
                description: '以客户需求为导向，提供优质服务',
                icon: '🤝'
              },
              {
                title: '团队协作',
                description: '凝聚团队力量，共创美好未来',
                icon: '👥'
              },
              {
                title: '追求卓越',
                description: '精益求精，追求极致体验',
                icon: '✨'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 发展历程 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">发展历程</h2>
          <div className="space-y-12">
            {[
              {
                year: '2023',
                title: '全球化布局',
                description: '开启国际化战略，业务覆盖多个国家和地区'
              },
              {
                year: '2022',
                title: '技术突破',
                description: '获得多项技术专利，产品创新能力获得行业认可'
              },
              {
                year: '2021',
                title: '快速发展',
                description: '完成B轮融资，团队规模突破100人'
              },
              {
                year: '2020',
                title: '品牌创立',
                description: '公司成立，发布首款产品'
              }
            ].map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 联系我们 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">联系我们</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-lg text-gray-600 mb-8">
                  如果您对我们的产品和服务感兴趣，或者有任何问题需要咨询，欢迎随时与我们联系。
                </p>
                <div className="space-y-6">
                  <p className="flex items-center gap-4 text-gray-700">
                    <span className="text-2xl">📍</span>
                    <span>地址：河北省雄安新区启动区企业总部区</span>
                  </p>
                  <p className="flex items-center gap-4 text-gray-700">
                    <span className="text-2xl">📞</span>
                    <span>电话：400-888-8888</span>
                  </p>
                  <p className="flex items-center gap-4 text-gray-700">
                    <span className="text-2xl">📧</span>
                    <span>邮箱：contact@example.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <MapComponent
                address="河北省雄安新区启动区企业总部区"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* 在线留言 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">在线留言</h2>
          <div className="max-w-8xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      姓名
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      邮箱
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="请输入您的邮箱"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      电话
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="请输入您的联系电话"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      主题
                    </label>
                    <select
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">请选择主题</option>
                      <option value="商务合作">商务合作</option>
                      <option value="产品咨询">产品咨询</option>
                      <option value="技术支持">技术支持</option>
                      <option value="其他问题">其他问题</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    留言内容
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 resize-none"
                    placeholder="请输入您的留言内容"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-3 px-6 border border-transparent rounded-lg text-base font-medium text-white transition-all duration-150 ${
                      isSubmitting
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    }`}
                  >
                    {isSubmitting ? '提交中...' : '提交留言'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="rounded-lg bg-green-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">留言提交成功！我们会尽快与您联系。</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="rounded-lg bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">提交失败，请稍后重试。</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
