import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import Icons from './icon';
import KButton from './index';
import './test.less';

const onMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};
const menu = (
  <Menu
    onClick={onMenuClick}
    items={[
      {
        key: '1',
        label: '1st item',
      },
      {
        key: '2',
        label: '2nd item',
      },
      {
        key: '3',
        label: '3rd item',
      },
    ]}
  />
);

const KbuttonTest: React.FC = () => {
  // const [loading, setLoading] = useState<boolean>(false);
  // const clickBtn = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // };
  return (
    <div className="button-test-wrapper">
      {/* <div className="k-test-nav">
        <Button danger>danger</Button>

        <Dropdown.Button type="primary" overlay={menu}>
          Actions
        </Dropdown.Button>
      </div> */}
      <div className="k-test-box">
        <p className="k-test-title">按钮大小</p>
        <p>- 页面中按钮分为“小号按钮”、“中号按钮（默认）”“大号按钮”。</p>
        <div className="k-test-nav" style={{ width: '300px' }}>
          <KButton size="small">小按钮</KButton>
          <KButton>中按钮</KButton>
          <KButton size="large">大按钮</KButton>
        </div>
        <pre className="k-test-pre">
          <code>
            <div className="k-test-explan">{`//api`}</div>
            {`size?: 'small' | 'middle' | 'large' | undefined;`}
          </code>
        </pre>
      </div>

      <div className="k-test-box">
        <p className="k-test-title">按钮宽度自适应规则</p>
        <p>并列按钮有两种使用方式：</p>
        <p>- 根据文字内容，按钮宽度自适应：</p>
        <p>小按钮固定间距为8px；中按钮为16px；大按钮为24px。</p>
        <p>- 其中，小、中、大按钮最小宽度分别为：58px、74px、96px</p>
        <div className="k-test-nav" style={{ width: '300px' }}>
          <KButton size="small">a</KButton>
          <KButton>b</KButton>
          <KButton size="large">c</KButton>
        </div>
      </div>

      <div className="k-test-box">
        <p className="k-test-title">按钮分类</p>
        <p>
          - 主要按钮（默认）、- 次要按钮、- 提示按钮、 - 警示按钮、- 切换按钮、- 带图标按钮、-
          文字链接按钮
        </p>
        <div className="k-test-nav" style={{ width: '1050px' }}>
          <KButton>主按鈕</KButton>
          <KButton type="default">次按鈕</KButton>
          <KButton prompt>提示按钮</KButton>
          <KButton danger>警示按钮</KButton>
          <KButton buttonType="dropdown" overlay={menu}>
            切换按钮
          </KButton>
          <KButton icon={<Icons />}>带图标按钮</KButton>
          <KButton type="text">文字按钮</KButton>
          <KButton loading>加载中</KButton>
          <KButton disabled>禁止</KButton>
        </div>
        <pre className="k-test-pre">
          <code>
            {/* <div className='k-test-explan'>{`//api`}</div> */}
            <p>{`<KButton>主按鈕</KButton>`}</p>
            <p>{`<KButton type="default">次按鈕</KButton>`}</p>
            <p>{`<KButton prompt>警示按钮</KButton>`}</p>
            <p>{`<KButton danger>警示按钮</KButton>`}</p>
            <p>{`<KButton buttonType='dropdown' overlay={menu}>切换按钮</KButton>`}</p>
            <p>{`<KButton icon={<Icons />}>带图标按钮</KButton>`}</p>
            <p>{`<KButton type='text'>文字按钮</KButton>`}</p>
            <p>{`<KButton loading>加载中</KButton>`}</p>
            <p>{`<KButton disabled>禁止</KButton>`}</p>
          </code>
        </pre>
      </div>
    </div>
  );
};
export default KbuttonTest;
