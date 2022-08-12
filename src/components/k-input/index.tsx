import type { InputProps } from 'antd';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/lib/input';
import cx from 'classnames';
import { forwardRef } from 'react';
import clearIcon from '../../assets/svgs/clear-icon.svg';
import searchIcons from '../../assets/svgs/search-icon.svg';
import './index.less';

export type KInputProps = {
  /**可以点击清除图标删除内容 */
  allowClear?: boolean;
  /**设置 Input 的禁用 */
  disabled?: boolean;
  /**设置 Input 自定义状态*/
  status?: 'error';
  /**设置 Input 的尺寸 */
  size?: 'large' | 'middle';
  /**设置 Input 的类型 */
  inputType?: 'input' | 'password' | 'textArea';
  ref?: any;
} & Omit<InputProps, 'size'> &
  TextAreaProps;
/**
 * Input组件
 */
export const KInput: React.FC<KInputProps> = forwardRef(
  ({ inputType = 'input', ...props }, ref: any) => {
    /* 清楚图标样式 */
    const clear = () => {
      return <img src={clearIcon} className="k-clearIcon" alt="" />;
    };
    /* 搜索图标样式 */
    const Icon = () => {
      return <img src={searchIcons} alt="" />;
    };

    switch (inputType) {
      case 'input':
        return (
          <Input
            {...props}
            ref={!!ref ? ref : undefined}
            allowClear={props.allowClear ? { clearIcon: clear() } : false}
            suffix={props.type === 'search' ? Icon() : ''}
            className={cx('k-input', !!props.className ? props.className : '')}
          />
        );
      case 'password':
        return (
          <Input.Password
            {...props}
            ref={!!ref ? ref : undefined}
            allowClear={props.allowClear ? { clearIcon: clear() } : false}
            className={cx('k-input', !!props.className ? props.className : '')}
          />
        );

      case 'textArea':
        return (
          <Input.TextArea
            {...props}
            showCount
            ref={!!ref ? ref : undefined}
            className={cx('k-input', !!props.className ? props.className : '')}
          />
        );
      default:
        return null;
    }
  },
);

export default KInput;
