import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import MenusMD from './menus.md';
import { Card } from '@/components';
import '@/styles/index.scss';

const MenusDoc = () => {
  return (
    <Card className='markdown-body'>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={MenusMD} />
    </Card>
  );
};

export default MenusDoc;
