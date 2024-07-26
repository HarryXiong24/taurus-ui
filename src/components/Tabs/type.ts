import { ReactNode } from 'react';

export interface TabsProps {
  // 当前激活 tab 面板的 index，默认为0
  defaultIndex?: number;
  // 可以扩展的 className
  className?: string;
  // 点击 Tab 触发的回调函数
  onSelect?: (selectedIndex: number) => void;
  // Tabs 的样式，两种可选，默认为 line
  type?: 'line' | 'card';
  children?: ReactNode;
}

export interface TabItemProps {
  // Tab 选项上面的文字
  label: string | React.ReactElement;
  // Tab 选项是否被禁用
  disabled?: boolean;
  // 自定义 ref
  myRef?: React.Ref<any>;
  children?: ReactNode;
}
