import type { MessageArgsProps } from 'antd';
import { message } from 'antd';
import Error from '../../assets/svgs/message-error.svg';
import Success from '../../assets/svgs/message-success.svg';
import Warning from '../../assets/svgs/message-warning.svg';
import './index.less';

type messageType = 'success' | 'error' | 'warning';

const KMessage = (type: messageType, config: MessageArgsProps) => {
  const baseConfig = { ...config, className: 'k-message' };
  switch (type) {
    case 'success':
      message.success({ ...baseConfig, icon: <img src={Success} /> });
      break;
    case 'error':
      message.error({ ...baseConfig, icon: <img src={Error} /> });
      break;
    case 'warning':
      message.warning({ ...baseConfig, icon: <img src={Warning} /> });
      break;
    default:
      return null;
  }
};

export default KMessage;
