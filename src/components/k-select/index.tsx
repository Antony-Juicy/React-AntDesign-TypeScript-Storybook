import { LoadingOutlined } from '@ant-design/icons';
import type { SelectProps } from 'antd';
import { Select, Spin } from 'antd';
import cx from 'classnames';
import { omit } from 'lodash';
import React from 'react';
import closeIcon from '../../assets/closeIcon.png';
import downArrowIcon from '../../assets/downArrowIcon.png';
import './index.less';

export type KSelectProps = {
  dropDrwnOptionStyle?: string;
  className?: string;
  options: { label: string; value: number | string }[];
  dropdownLoading?: boolean;
} & SelectProps;

const KSelect: React.FC<KSelectProps> = (props) => {
  const $_props = omit(props, 'options', 'dropDrwnOptionStyle', 'dropdownLoading');

  const renderNotFoundContent = () => {
    if (!props.dropdownLoading && props.options.length === 0) {
      return '無搜索結果';
    } else if (props.dropdownLoading) {
      return <Spin indicator={<LoadingOutlined />} tip="加載中" />;
    } else {
      return null;
    }
  };

  return (
    <Select
      {...$_props}
      showArrow
      placeholder="請選擇"
      dropdownClassName={cx('k-select-dropdown-container', props.dropdownClassName ?? '')}
      clearIcon={<img className="k-select-close-icon" src={closeIcon} />}
      suffixIcon={<img className="k-select-arrow-icon" src={downArrowIcon} />}
      className={cx('k-select', $_props.className ?? '')}
      notFoundContent={renderNotFoundContent()}
    >
      {!!props?.children
        ? props.children
        : !!props.options &&
          props.options?.length > 0 &&
          props.options.map((item: any) => {
            return (
              <Select.Option
                disabled={item.disabled ?? false}
                className={props.dropDrwnOptionStyle ?? ''}
                key={item.value}
                value={item.value}
              >
                {item.label}
              </Select.Option>
            );
          })}
    </Select>
  );
};

export default KSelect;
