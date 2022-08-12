import type { ButtonProps } from 'antd';
import { Button, Dropdown } from 'antd';
import cx from 'classnames';
import { omit as _omit } from 'lodash';
import './index.less';
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);
type TIcon = {
  icon?: React.ReactNode;
  loading?: boolean;
};
type TSize = {
  size?: 'small' | 'middle' | 'large' | undefined;
};
// icon, loading 跟 size 互斥 -- 即只有当size为默认值时才能使用icon 和 loading 属性
type IconOrNotMiddle = XOR<TIcon, TSize>;
type OverlayFunc = () => React.ReactElement;
export type KButtonProps = {
  prompt?: boolean;
  overlay?: React.ReactElement | OverlayFunc;
  buttonType?: 'default' | 'dropdown';
} & Omit<ButtonProps, 'ghost | size | icon | loading'> &
  IconOrNotMiddle;

const KButton: React.FC<KButtonProps> = ({ buttonType = 'default', ...props }) => {
  const $_props = _omit(props, 'prompt');
  switch (buttonType) {
    case 'default':
      return (
        <Button
          type="primary"
          {...$_props}
          className={cx(
            'k-btn',
            props.prompt ? 'k-prompt-button' : '',
            props.icon || props.loading ? 'pl-12' : '',
          )}
        >
          {props.children}
        </Button>
      );
    case 'dropdown':
      return (
        <Dropdown.Button
          type="primary"
          className={cx('k-btn', props.icon ? 'pl-12' : '')}
          overlay={<></>}
          {...$_props}
        >
          {props?.children}
        </Dropdown.Button>
      );
    default:
      return null;
  }
};

export default KButton;
