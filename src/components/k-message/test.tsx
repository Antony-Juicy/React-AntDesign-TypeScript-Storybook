import { Button, message } from 'antd';
import KMessage from './index';

const KMessageTest: React.FC = () => {
  const showMessage = (type: any, title: string) => {
    KMessage(type, { content: title, duration: 0 });
  };

  const antdMess = () => {
    message.success({ content: '成功提示文案', duration: 0 });
  };

  return (
    <div className="k-test-nav">
      <Button type="primary" onClick={showMessage.bind(null, 'success', '成功提示文案')}>
        success
      </Button>
      <Button type="primary" onClick={antdMess}>
        success
      </Button>
      <Button type="primary" onClick={showMessage.bind(null, 'error', '错误提示文案')}>
        error
      </Button>
      <Button type="primary" onClick={showMessage.bind(null, 'warning', '警告提示文案')}>
        warning
      </Button>
    </div>
  );
};
export default KMessageTest;
