import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Users, BarChart, ChevronRight, Building2, Trophy, Clock } from 'lucide-react';
import Carousel from "@/components/Carousel";


const capabilities = [
  {
    title: '智能数据分析',
    description: '利用AI技术，深度挖掘数据价值，为企业决策提供精准洞察',
    icon: BarChart,
  },
  {
    title: '安全防护',
    description: '全方位的安全解决方案，保护您的业务免受威胁',
    icon: Shield,
  },
  {
    title: '高性能计算',
    description: '强大的云计算平台，为您的业务提供无限算力支持',
    icon: Zap,
  }
];

interface Solution {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    title: '智慧金融',
    description: '为金融机构提供智能风控、数据分析等全套解决方案',
    image: '/solution-1.jpg',
    features: ['智能风控', '数据分析', '金融科技', '区块链技术']
  },
  {
    title: '智慧医疗',
    description: '助力医疗机构实现数字化转型，提升诊疗效率',
    image: '/solution-2.jpg',
    features: ['远程诊疗', '智能影像', '医疗物联网', '健康管理']
  },
  {
    title: '智慧零售',
    description: '打造全渠道零售解决方案，提升用户购物体验',
    image: '/solution-3.jpg',
    features: ['全渠道销售', '智能库存', '会员管理', '数字营销']
  }
];

const companyStats = [
  {
    number: '10+',
    label: '年行业经验',
    icon: Building2
  },
  {
    number: '1000+',
    label: '服务客户',
    icon: Users
  },
  {
    number: '50+',
    label: '荣誉资质',
    icon: Trophy
  },
  {
    number: '24h',
    label: '专业服务',
    icon: Clock
  }
];

const cases = [
  {
    title: '某大型银行智能风控系统',
    description: '帮助客户建立全面的风险管理体系，显著提升风险识别准确率',
    image: '/case-1.jpg'
  },
  {
    title: '某三甲医院智慧医疗平台',
    description: '实现医疗资源智能调配，提升患者就医体验',
    image: '/case-2.jpg'
  },
  {
    title: '某连锁零售企业数字化转型',
    description: '打造全渠道零售体系，实现线上线下一体化运营',
    image: '/case-3.jpg'
  }
];

const latestNews = [
  {
    title: '公司荣获2024年度科技创新企业奖',
    date: '2024-03-20',
    category: '公司新闻'
  },
  {
    title: '成功举办2024技术开放日活动',
    date: '2024-03-15',
    category: '活动动态'
  },
  {
    title: '新一代产品发布会圆满结束',
    date: '2024-03-10',
    category: '产品资讯'
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 轮播图部分 */}
      <Carousel />

      {/* 公司数据展示 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心产品能力部分 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心产品能力</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              通过持续创新和技术积累，为客户提供全方位的解决方案
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <capability.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 解决方案部分 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">解决方案</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              针对不同行业特点，提供定制化的解决方案
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features?.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 客户案例部分 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">客户案例</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              成功案例展示，见证我们的专业服务能力
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={case_.image}
                    alt={case_.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{case_.title}</h3>
                  <p className="text-gray-600">{case_.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 新闻动态部分 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">新闻动态</h2>
              <p className="text-gray-600">
                了解公司最新动态和行业资讯
              </p>
            </div>
            <Link 
              href="/news"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              查看更多 <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <Link
                key={index}
                href="/news"
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="text-sm text-blue-600 mb-2">{news.category}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>
                <div className="text-gray-500">{news.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 关于我们链接部分 */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            了解更多关于我们
          </h2>
          <p className="text-xl mb-8">
            探索我们的技术创新和服务理念
          </p>
          <Link 
            href="/about"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            了解更多 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
