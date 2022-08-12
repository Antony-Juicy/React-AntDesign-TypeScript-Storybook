import { LoadingOutlined } from '@ant-design/icons';
import type { DatePickerProps, SelectProps, TimePickerProps } from 'antd';
import { DatePicker, Select, Space, Spin, TimePicker } from 'antd';
import React, { useState } from 'react';

import './index.less';

export type KSelectProps = {
  /** 数据化配置下拉选项内容 */
  options: { label: string; value: number | string }[];
  /**
   * 组件最外层的className
   */
  wrapperClassName?: string;
  /**
   * 下拉选项的className
   */
  optionClassName?: string;
  /**
   * 下拉菜单加载状态
   */
  dropdownLoading?: boolean;
} & SelectProps;

type PickerType = 'time' | 'date';

const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps['onChange'] | DatePickerProps['onChange'];
}) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

const KPickerWithtype: React.FC<KSelectProps> = (props) => {
  const [type, setType] = useState<PickerType>('time');
  return (
    <Space>
      <Select value={type} onChange={setType} {...props}>
        <Select.Option value="time">
          {props.dropdownLoading ? (
            <div className="select-dropdown-loading">
              <Spin indicator={<LoadingOutlined />} tip="加載中" />
            </div>
          ) : (
            props.options &&
            props.options.length > 0 &&
            props.options.map((item: any) => {
              return (
                <Select.Option
                  disabled={item.disabled ?? false}
                  className={props.optionClassName ?? ''}
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </Select.Option>
              );
            })
          )}
        </Select.Option>
      </Select>
      <PickerWithType type={type} onChange={(value) => console.log(value, 'value')} />
    </Space>
  );
};
export default KPickerWithtype;
