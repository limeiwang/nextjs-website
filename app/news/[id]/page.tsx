"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// 定义类型
interface RelatedNews {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface NewsDetail {
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  content: string;
  relatedNews: RelatedNews[];
}

interface NewsDetails {
  [key: number]: NewsDetail;
}

// 模拟新闻详情数据
const newsDetails: NewsDetails = {
  1: {
    title: '公司荣获2024年度科技创新企业奖',
    category: '公司新闻',
    date: '2024-03-20',
    author: '新闻中心',
    image: '/images/news1.jpg',
    content: `
      <p class="mb-4">在最新举办的2024年度科技创新大会上，我司凭借在人工智能领域的突出贡献，荣获"年度科技创新企业奖"。这是对公司技术创新能力的高度认可，也是对我们长期以来在科技创新领域努力的肯定。</p>

      <p class="mb-4">本次大会汇聚了来自全国各地的科技企业代表，共同探讨科技创新发展趋势。我司作为人工智能领域的领军企业，展示了最新的技术成果和创新方案，得到了与会专家的一致好评。</p>

      <h3 class="text-xl font-bold mb-4">创新成果展示</h3>
      <p class="mb-4">在大会现场，我司展示了多项具有自主知识产权的创新技术，包括：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>新一代智能语音识别系统</li>
        <li>基于深度学习的图像处理技术</li>
        <li>智能决策支持系统</li>
        <li>企业级人工智能解决方案</li>
      </ul>

      <h3 class="text-xl font-bold mb-4">未来展望</h3>
      <p class="mb-4">获得此次奖项后，公司将继续加大研发投入，推动技术创新，为客户提供更优质的产品和服务。我们相信，通过持续的创新和努力，必将在未来的市场竞争中占据更加有利的地位。</p>

      <p class="mb-4">公司总经理在获奖致辞中表示："这个奖项不仅是对我们过去工作的肯定，更是对未来的鞭策。我们将继续秉持创新精神，不断突破技术边界，为行业发展贡献更多力量。"</p>
    `,
    relatedNews: [
      {
        id: 2,
        title: '成功举办2024技术开放日活动',
        date: '2024-03-15',
        image: '/images/news2.jpg'
      },
      {
        id: 3,
        title: '新一代产品发布会圆满结束',
        date: '2024-03-10',
        image: '/images/news3.jpg'
      }
    ]
  },
  2: {
    title: '公司荣获2024年度科技创新企业奖',
    category: '公司新闻',
    date: '2024-03-20',
    author: '新闻中心',
    image: '/images/news1.jpg',
    content: `
      <p class="mb-4">在最新举办的2024年度科技创新大会上，我司凭借在人工智能领域的突出贡献，荣获"年度科技创新企业奖"。这是对公司技术创新能力的高度认可，也是对我们长期以来在科技创新领域努力的肯定。</p>

      <p class="mb-4">本次大会汇聚了来自全国各地的科技企业代表，共同探讨科技创新发展趋势。我司作为人工智能领域的领军企业，展示了最新的技术成果和创新方案，得到了与会专家的一致好评。</p>

      <h3 class="text-xl font-bold mb-4">创新成果展示</h3>
      <p class="mb-4">在大会现场，我司展示了多项具有自主知识产权的创新技术，包括：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>新一代智能语音识别系统</li>
        <li>基于深度学习的图像处理技术</li>
        <li>智能决策支持系统</li>
        <li>企业级人工智能解决方案</li>
      </ul>

      <h3 class="text-xl font-bold mb-4">未来展望</h3>
      <p class="mb-4">获得此次奖项后，公司将继续加大研发投入，推动技术创新，为客户提供更优质的产品和服务。我们相信，通过持续的创新和努力，必将在未来的市场竞争中占据更加有利的地位。</p>

      <p class="mb-4">公司总经理在获奖致辞中表示："这个奖项不仅是对我们过去工作的肯定，更是对未来的鞭策。我们将继续秉持创新精神，不断突破技术边界，为行业发展贡献更多力量。"</p>
    `,
    relatedNews: [
      {
        id: 2,
        title: '成功举办2024技术开放日活动',
        date: '2024-03-15',
        image: '/images/news2.jpg'
      },
      {
        id: 3,
        title: '新一代产品发布会圆满结束',
        date: '2024-03-10',
        image: '/images/news3.jpg'
      }
    ]
  },
};

export default function NewsDetail() {
  const params = useParams();
  const newsId = Number(params.id);
  const news = newsDetails[newsId];

  if (!news) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">未找到相关新闻</h1>
          <Link href="/news" className="text-blue-600 hover:text-blue-700">
            返回新闻列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅 */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{news.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <span>{news.date}</span>
              <span>•</span>
              <span>{news.category}</span>
              <span>•</span>
              <span>{news.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          {/* 新闻内容 */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* 分享按钮 */}
          <div className="flex items-center space-x-4 mt-8 pt-8 border-t">
            <span className="text-gray-600">分享到：</span>
            <button className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
              </svg>
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 相关新闻 */}
        {news.relatedNews && news.relatedNews.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">相关新闻</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {news.relatedNews.map((relatedNews) => (
                <Link
                  key={relatedNews.id}
                  href={`/news/${relatedNews.id}`}
                  className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedNews.image}
                      alt={relatedNews.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {relatedNews.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">{relatedNews.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 返回按钮 */}
        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            返回新闻列表
          </Link>
        </div>
      </div>
    </div>
  );
} 
