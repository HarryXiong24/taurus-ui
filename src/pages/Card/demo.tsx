import Card from '@/components/Card';
import Button from '@/components/Button';
import '@/styles/example.scss';

const CardDemo = () => {
  const cardCss = { margin: '20px 20px 0 0' };
  return (
    <div className='container'>
      <Card
        title='基本使用'
        shadow
        style={cardCss}
        titleOverflowHidden={false}
        // cover={Img}
      >
        <h1>I am Card!</h1>
      </Card>
      <Card
        title='title 右边自定义 Node 元素'
        shadow
        style={cardCss}
        extra={
          <div>
            <Button
              btnType='ghost'
              onClick={() => {
                alert('I was clicked!');
              }}
            >
              按钮
            </Button>
          </div>
        }
      >
        <h1>I am Card!</h1>
      </Card>
      <Card
        title='卡片带按钮'
        shadow
        actions={[
          {
            name: '按钮1',
            event: () => {
              alert('I was clicked!');
            },
          },
          {
            name: '按钮2',
          },
        ]}
        style={cardCss}
      >
        <h1>I am Card!</h1>
      </Card>
      <Card title='悬浮出现卡片阴影' showShadowWhenHover style={cardCss}>
        <h1>I am Card!</h1>
      </Card>
    </div>
  );
};

export default CardDemo;
