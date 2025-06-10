/**
 * AICopilot 组件
 * 这是一个基于 Next.js 的 AI 聊天助手组件，专注于中医健康咨询
 * 提供实时对话、文件上传、会话管理等功能
 */

'use client';

// =============== 依赖导入 ===============

// Ant Design 图标组件
import {
  AppstoreAddOutlined,  // 应用图标：用于功能菜单
  CloseOutlined,        // 关闭图标：用于关闭聊天窗口
  CloudUploadOutlined,  // 上传图标：用于文件上传
  CommentOutlined,      // 评论图标：用于对话功能
  CopyOutlined,         // 复制图标：用于复制内容
  DislikeOutlined,      // 踩图标：用于负面反馈
  LikeOutlined,         // 赞图标：用于正面反馈
  PaperClipOutlined,    // 附件图标：用于文件处理
  PlusOutlined,         // 加号图标：用于新建会话
  ProductOutlined,      // 产品图标：用于服务展示
  ReloadOutlined,       // 刷新图标：用于重新生成
  ScheduleOutlined,     // 日程图标：用于时间相关
} from '@ant-design/icons';

// Ant Design X 组件库：提供高级 UI 组件
import {
  Attachments,          // 附件上传组件
  type AttachmentsProps,// 附件组件属性类型
  Bubble,              // 对话气泡组件
  Conversations,       // 会话列表组件
  Prompts,            // 提示组件
  Sender,             // 消息发送组件
  Suggestion,         // 建议组件
  Welcome,            // 欢迎组件
  useXAgent,          // AI 代理 Hook
  useXChat,           // 聊天功能 Hook
} from '@ant-design/x';
import type { Conversation } from '@ant-design/x/es/conversations';

// Ant Design 基础组件
import { Button, GetProp, GetRef, Space, Spin, message } from 'antd';
import { createStyles } from 'antd-style';  // 样式创建工具

// 工具库
import dayjs from 'dayjs';                  // 日期处理库
import React, { useEffect, useRef, useState } from 'react';

// Markdown 相关
import ReactMarkdown from 'react-markdown';  // Markdown 渲染
import remarkGfm from 'remark-gfm';         // GFM 支持
import rehypeRaw from 'rehype-raw';         // 原始 HTML 支持
import rehypeSanitize from 'rehype-sanitize';// HTML 净化

// =============== 类型定义 ===============

/**
 * 对话气泡数据类型
 * @property role - 消息角色（'user' | 'assistant'）
 * @property content - 消息内容
 */
type BubbleDataType = {
  role: string;
  content: string;
};

// =============== 常量定义 ===============

/**
 * 模拟会话列表数据
 * 用于展示历史会话记录
 */
const MOCK_SESSION_LIST = [
  {
    key: '5',
    label: '新会话',
    group: '今天',
  },
  {
    key: '4',
    label: '产品咨询',
    group: '今天',
  },
  {
    key: '3',
    label: '技术支持',
    group: '今天',
  },
  {
    key: '2',
    label: '业务合作',
    group: '昨天',
  },
  {
    key: '1',
    label: '售后服务',
    group: '昨天',
  },
];

/**
 * 快捷建议选项
 * 提供常用的咨询主题和功能入口
 */
const MOCK_SUGGESTIONS = [
  { label: '公司介绍', value: 'company-intro' },
  { label: '产品服务', value: 'products' },
  {
    label: '解决方案',
    value: 'solutions',
    icon: <ProductOutlined />,
    children: [
      { label: '网络技术', value: 'network-tech' },
      { label: '智能系统', value: 'smart-systems' },
      { label: '数字服务', value: 'digital-services' },
    ],
  },
];

/**
 * 预设问题列表
 * 为用户提供常见问题示例
 */
const MOCK_QUESTIONS = [
  '天下亨通科技公司的主要业务范围是什么？',
  '公司在雄安新区有哪些优势和特色？',
  '如何联系技术支持团队？',
  '公司的数字化解决方案有哪些特点？',
];

/**
 * AI 系统提示词
 * 定义 AI 助手的专业背景、能力范围和行为准则
 */
const SYSTEM_PROMPT = `我是河北雄安天下亨通网络科技有限公司的智能服务助手，专注于：
1. 公司介绍：提供公司背景、发展历程、业务范围等信息
2. 产品服务：介绍公司的网络技术、智能系统和数字服务等产品
3. 技术支持：解答产品使用问题，提供技术咨询和故障排查建议
4. 业务合作：说明合作方式，解答商务咨询
5. 客户服务：处理售后问题，收集客户反馈

经营范围：
1. 软件开发与系统集成：定制化软件开发，信息系统集成服务，云计算应用及服务
2. 数据服务：数据挖掘、数据分析、数据融合服务，区块链技术研发及应用
3. 智能技术研发：人工智能服务，物联网技术开发，智能传感器与高端芯片设计研发
4. 数字内容与广告服务：广告设计、制作、代理、发布，数字内容服务
5. 工程与咨询服务：工程管理、工程技术咨询，招标代理服务，商务文印服务

服务准则：
- 始终以专业、友好的态度服务客户
- 准确传达公司信息和产品特点
- 遇到复杂问题及时转介专业团队
- 保护客户隐私，遵守商业保密原则

企业资质信息：
- 统一社会信用代码：91133100MA0D8N1J7G
- 法定代表人：李光耀
- 注册资本：300 万元
- 注册时间：2019 年 2 月 18 日
- 企业地址：河北省雄安新区容城县容城镇惠友道 2052 号（自主申报）
- 业务官网：www.xionganproject.cn
- 官方邮箱：up@xatxht.com

重要提示：
我们提供的技术方案和服务建议仅供参考
具体合作事宜请通过官方渠道沟通确认
涉及行政审批的业务需按法定程序办理
相关服务不替代政府部门审批流程

我将基于公司核心业务范围和技术能力，为您提供专业的数字化解决方案咨询服务。`;

/**
 * AI 思考提示文本
 */
const AGENT_PLACEHOLDER = '正在为您查询相关信息，请稍候...';

// =============== 样式定义 ===============

/**
 * 组件样式定义
 * 使用 antd-style 创建样式
 */
const useCopilotStyle = createStyles(({ token, css }) => ({
  // 主容器样式：固定定位，右下角显示
  container: css`
    width: 400px;
    position: fixed;
    right: 32px;
    bottom: 96px;
    z-index: 50;
    max-height: calc(100vh - 180px);
    display: flex;
    flex-direction: column;
    background: ${token.colorBgContainer};
    color: ${token.colorText};
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    height: 600px;
    animation: slideIn 0.3s ease-out;

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: scale(0.95) translateY(10px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
  `,
  chatHeader: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid ${token.colorBorder};
  `,
  headerTitle: css`
    font-size: 16px;
    font-weight: 500;
  `,
  headerButton: css`
    width: 32px;
    height: 32px;
  `,
  chatList: css`
    flex: 1;
    overflow-y: auto;
    padding: 16px 0;
  `,
  chatWelcome: css`
    margin: 16px;
  `,
  chatSend: css`
    padding: 16px;
    border-top: 1px solid ${token.colorBorder};
  `,
  sendAction: css`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    overflow-x: auto;
    padding-bottom: 8px;

    &::-webkit-scrollbar {
      height: 4px;
    }
  `,
  speechButton: css`
    margin-right: 8px;
  `,
  loadingMessage: css`
    opacity: 0.5;
  `,
  aiResponse: css`
    font-size: 14px;
    line-height: 1.6;
    
    p {
      margin: 4px 0;
    }
    
    pre {
      margin: 8px 0;
      padding: 12px;
      background-color: ${token.colorBgTextHover};
      border-radius: 4px;
      overflow-x: auto;
    }
    
    ul, ol {
      margin: 8px 0;
      padding-left: 20px;
    }
    
    h1, h2, h3 {
      margin: 12px 0 8px;
      font-weight: 500;
    }

    code {
      background-color: ${token.colorBgTextHover};
      padding: 2px 4px;
      border-radius: 4px;
      font-family: monospace;
    }
  `,
}));

// =============== 组件实现 ===============

/**
 * AI 助手主组件
 * 实现聊天界面和功能逻辑
 */
export const AICopilot: React.FC = () => {
  // 获取样式
  const { styles } = useCopilotStyle();

  // ===== Refs =====
  const attachmentsRef = useRef<GetRef<typeof Attachments>>(null);  // 附件上传组件引用
  const abortController = useRef<AbortController>(null);            // 请求中断控制器

  // ===== State 管理 =====
  const [isOpen, setIsOpen] = useState(false);                      // 聊天窗口开关状态
  const [messageHistory, setMessageHistory] = useState<Record<string, any>>({});  // 消息历史记录
  const [sessionList, setSessionList] = useState<Conversation[]>(MOCK_SESSION_LIST);  // 会话列表
  const [curSession, setCurSession] = useState(sessionList[0].key); // 当前会话ID
  const [attachmentsOpen, setAttachmentsOpen] = useState(false);    // 附件面板开关
  const [files, setFiles] = useState<GetProp<AttachmentsProps, 'items'>>([]);     // 文件列表
  const [inputValue, setInputValue] = useState('');                 // 输入框内容

  // ===== AI 代理配置 =====
  const [agent] = useXAgent<BubbleDataType>({
    baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    model: 'qwen-plus',
    dangerouslyApiKey: 'sk-e4a6729102b8409dbed62e18203e5b45',
  });

  // ===== 聊天功能配置 =====
  const { messages, onRequest, setMessages } = useXChat({
    agent,
    // 请求失败处理函数
    requestFallback: (_, { error }): BubbleDataType => {
      // 错误日志记录
      console.error('AI request error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
        type: typeof error,
        errorObj: error
      });

      // 根据错误类型返回不同提示
      if (error.name === 'AbortError') {
        return {
          content: '请求已取消。如果这是意外情况,请重试。',
          role: 'assistant',
        };
      }

      if (error.message?.includes('network')) {
        return {
          content: '网络连接出现问题,请检查您的网络连接后重试。',
          role: 'assistant',
        };
      }

      if (error.message?.includes('timeout')) {
        return {
          content: '请求超时,这可能是由于服务器繁忙。请稍后重试。',
          role: 'assistant',
        };
      }

      return {
        content: '抱歉,请求失败。请稍后重试或联系支持团队。',
        role: 'assistant',
      };
    },
    // 消息转换处理函数
    transformMessage: (info) => {
      const { originMessage, chunk } = info || {};
      let currentContent = '';
      let currentThink = '';

      // 解析响应数据块
      try {
        if (chunk?.data && !chunk?.data.includes('DONE')) {
          const message = JSON.parse(chunk?.data);
          currentThink = message?.choices?.[0]?.delta?.reasoning_content || '';
          currentContent = message?.choices?.[0]?.delta?.content || '';
        }
      } catch (error) {
        console.error(error);
      }

      // 构建响应内容
      let content = '';
      if (!originMessage?.content && currentThink) {
        content = `<think>${currentThink}`;
      } else if (
        originMessage?.content?.includes('<think>') &&
        !originMessage?.content.includes('</think>') &&
        currentContent
      ) {
        content = `${originMessage?.content}</think>${currentContent}`;
      } else {
        content = `${originMessage?.content || ''}${currentThink}${currentContent}`;
      }

      // 清理系统提示，避免显示给用户
      content = content.replace(/请基于以下中医专业背景来回答问题：[\s\S]*?用户问题：/g, '');
      
      return {
        content,
        role: 'assistant',
      };
    },
    // 保存中断控制器
    resolveAbortController: (controller) => {
      abortController.current = controller;
    },
  });

  /**
   * 处理用户消息提交
   * @param val - 用户输入的消息内容
   */
  const handleUserSubmit = (val: string) => {
    // 构建带有系统提示的上下文（在后台添加，用户不可见）
    const backgroundContext = [
      {
        role: 'system',
        content: SYSTEM_PROMPT
      },
      {
        role: 'user',
        content: val
      }
    ];
    
    // 发送请求
    onRequest({
      stream: true,
      message: { content: val, role: 'user' },
      messages: backgroundContext,
    });

    // 如果是新会话，更新会话标题
    if (sessionList.find((i) => i.key === curSession)?.label === '新会话') {
      setSessionList(
        sessionList.map((i) => (i.key !== curSession ? i : { ...i, label: val?.slice(0, 20) })),
      );
    }
  };

  /**
   * 处理文件粘贴事件
   */
  const onPasteFile = (_: File, files: FileList) => {
    for (const file of files) {
      attachmentsRef.current?.upload(file);
    }
    setAttachmentsOpen(true);
  };

  const chatHeader = (
    <div className={styles.chatHeader}>
      <div className={styles.headerTitle}>✨ AI 助手</div>
      <Space size={0}>
        <Button
          type="text"
          icon={<PlusOutlined />}
          onClick={() => {
            if (messages?.length) {
              const timeNow = dayjs().valueOf().toString();
              abortController.current?.abort();
              setTimeout(() => {
                setSessionList([
                  { key: timeNow, label: '新会话', group: '今天' },
                  ...sessionList,
                ]);
                setCurSession(timeNow);
                setMessages([]);
              }, 100);
            } else {
              message.error('当前已经是新会话了。');
            }
          }}
          className={styles.headerButton}
        />
        <Button
          type="text"
          icon={<CommentOutlined />}
          className={styles.headerButton}
        />
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={() => setIsOpen(false)}
          className={styles.headerButton}
        />
      </Space>
    </div>
  );

  const chatList = (
    <div className={styles.chatList}>
      {messages?.length ? (
        <Bubble.List
          style={{ height: '100%', paddingInline: 16 }}
          items={messages?.map((i) => ({
            ...i.message,
            content: (
              <div className={`${i.status === 'loading' ? styles.loadingMessage : ''} ${styles.aiResponse}`}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                  components={{
                    p: ({ children }) => <p style={{ margin: '4px 0' }}>{children}</p>,
                    pre: ({ children }) => (
                      <pre style={{ margin: '8px 0', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
                        {children}
                      </pre>
                    ),
                    ul: ({ children }) => <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>{children}</ul>,
                    ol: ({ children }) => <ol style={{ margin: '8px 0', paddingLeft: '20px' }}>{children}</ol>,
                    h1: ({ children }) => <h1 style={{ margin: '12px 0 8px' }}>{children}</h1>,
                    h2: ({ children }) => <h2 style={{ margin: '12px 0 8px' }}>{children}</h2>,
                    h3: ({ children }) => <h3 style={{ margin: '12px 0 8px' }}>{children}</h3>,
                  }}
                >
                  {i.message.content}
                </ReactMarkdown>
              </div>
            ),
            typing: i.status === 'loading' ? { step: 5, interval: 20, suffix: <>💡</> } : false,
          }))}
          roles={{
            assistant: {
              placement: 'start',
              footer: (
                <div style={{ display: 'flex' }}>
                  <Button type="text" size="small" icon={<ReloadOutlined />} />
                  <Button type="text" size="small" icon={<CopyOutlined />} />
                  <Button type="text" size="small" icon={<LikeOutlined />} />
                  <Button type="text" size="small" icon={<DislikeOutlined />} />
                </div>
              ),
              loadingRender: () => (
                <Space>
                  <Spin size="small" />
                  {AGENT_PLACEHOLDER}
                </Space>
              ),
            },
            user: { placement: 'end' },
          }}
        />
      ) : (
        <>
          <Welcome
            variant="borderless"
            title="👋 您好，我是天下亨通助手"
            description="我专注于软件开发、系统集成、数据服务、智能技术研发等领域，可以为您提供专业的数字化解决方案"
            className={styles.chatWelcome}
          />
          <Prompts
            vertical
            title="常见问题："
            items={MOCK_QUESTIONS.map((i) => ({ key: i, description: i }))}
            onItemClick={(info) => handleUserSubmit(info?.data?.description as string)}
            style={{
              marginInline: 16,
            }}
            styles={{
              title: { fontSize: 14 },
            }}
          />
        </>
      )}
    </div>
  );

  const sendHeader = attachmentsOpen ? (
    <Sender.Header
      title="上传文件"
      styles={{ content: { padding: 0 } }}
      open={attachmentsOpen}
      onOpenChange={setAttachmentsOpen}
      forceRender
    >
      <Attachments
        ref={attachmentsRef}
        beforeUpload={() => false}
        items={files}
        onChange={({ fileList }) => setFiles(fileList)}
        placeholder={(type) =>
          type === 'drop'
            ? { title: '将文件拖放到这里' }
            : {
                icon: <CloudUploadOutlined />,
                title: '上传文件',
                description: '点击或将文件拖拽到此区域上传',
              }
        }
      />
    </Sender.Header>
  ) : null;

  const chatSender = (
    <div className={styles.chatSend}>
      <div className={styles.sendAction}>
        <Button
          icon={<ProductOutlined />}
          onClick={() => handleUserSubmit('请介绍一下贵公司的主要产品和技术服务能力')}
        >
          产品服务
        </Button>
        <Button
          icon={<ScheduleOutlined />}
          onClick={() => handleUserSubmit('公司在软件开发和系统集成方面有哪些优势和成功案例？')}
        >
          解决方案
        </Button>
        <Button 
          icon={<AppstoreAddOutlined />}
          onClick={() => handleUserSubmit('如何与贵公司开展业务合作，具体流程是什么？')}
        >
          商务合作
        </Button>
      </div>

      <Suggestion items={MOCK_SUGGESTIONS} onSelect={(itemVal) => setInputValue(`[${itemVal}]:`)}>
        {({ onTrigger, onKeyDown }) => (
          <Sender
            loading={agent.isRequesting()}
            value={inputValue}
            onChange={(v) => {
              onTrigger(v === '/');
              setInputValue(v);
            }}
            onSubmit={() => {
              handleUserSubmit(inputValue);
              setInputValue('');
            }}
            onCancel={() => {
              abortController.current?.abort();
            }}
            allowSpeech
            placeholder="请输入您想咨询的问题，或输入 / 选择服务类型"
            onKeyDown={onKeyDown}
            header={sendHeader}
            prefix={
              <Button
                type="text"
                icon={<PaperClipOutlined style={{ fontSize: 18 }} />}
                onClick={() => setAttachmentsOpen(!attachmentsOpen)}
              />
            }
            onPasteFile={onPasteFile}
            actions={(_, info) => {
              const { SendButton, LoadingButton, SpeechButton } = info.components;
              return (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <SpeechButton className={styles.speechButton} />
                  {agent.isRequesting() ? <LoadingButton type="default" /> : <SendButton type="primary" />}
                </div>
              );
            }}
          />
        )}
      </Suggestion>
    </div>
  );

  // ===== 副作用 =====
  
  // 同步消息历史
  useEffect(() => {
    if (messages?.length) {
      setMessageHistory((prev) => ({
        ...prev,
        [curSession]: messages,
      }));
    }
  }, [messages]);

  // ===== 渲染逻辑 =====

  // 最小化状态渲染
  if (!isOpen) {
    return (
      <div
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          right: '32px',
          bottom: '96px',
          padding: '12px',
          width: 'auto',
          height: 'auto',
          zIndex: 50,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '9999px',
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'buttonPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f9fafb';
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        }}
      >
        <style>
          {`
            @keyframes buttonPop {
              0% {
                opacity: 0;
                transform: scale(0.9);
              }
              70% {
                transform: scale(1.1);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}
        </style>
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z" fill="#8054F7"/>
          <path d="M24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16Z" fill="#ffffff"/>
        </svg>
      </div>
    );
  }

  // 完整聊天界面渲染
  return (
    <div className={styles.container}>
      {chatHeader}
      {chatList}
      {chatSender}
    </div>
  );
};

export default AICopilot;
