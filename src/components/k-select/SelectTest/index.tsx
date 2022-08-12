import type { RadioChangeEvent } from 'antd';
import { Radio, Select } from 'antd';
import React, { useState } from 'react';
import KdSelect from '../index';
import './index.less';
export interface LabeledValue {
  key?: string;
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
}

const testData = [
  { value: 1, label: '第一选项' },
  { value: 2, label: '第二选项' },
  { value: 3, label: '第三选项' },
  { value: 4, label: '第四选项' },
  { value: 5, label: '第五选项' },
  { value: 6, label: '第六选项' },
];

const KdSelectTest: React.FC = () => {
  const [value, setValue] = useState(1);
  const [dataSource, setDataSource] = useState<any[]>(testData);
  const [selectDisable, setSelectDisable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const radioOnChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    if (5 !== e.target.value) {
      setLoading(false);
    }
    if (4 !== e.target.value) {
      setSelectDisable(false);
    }
    if (6 !== e.target.value) {
      setDataSource(testData);
    }
    switch (e.target.value) {
      case 1:
        setDataSource(testData);
        // setInputValue('');
        // console.log(inputRef.current);
        // inputRef.current!.blur();
        break;
      case 2:
        // inputRef.current!.focus();
        // setInputValue('输入结果');
        break;
      case 3:
        // inputRef.current!.blur();
        // setInputValue('输入结果');
        break;
      case 4:
        setSelectDisable(true);
        break;
      case 5:
        setDataSource([]);
        setLoading(true);
        break;
      case 6:
        setDataSource([]);
        break;
      default:
        return;
    }
  };

  return (
    <div className="button-test-wrapper">
      <div className="k-test-box">
        <p className="k-test-title">基本用法</p>
        <p>- 常规、- 悬浮、- 激活、- 选中、- 失焦、- 不可用、-选择后悬浮</p>
        <Radio.Group onChange={radioOnChange} value={value}>
          <Radio value={1}>常规</Radio>
          {/* <Radio value={2}>激活</Radio>
          <Radio value={3}>失焦</Radio> */}
          <Radio value={4}>不可用</Radio>
          <Radio value={5}>加载中</Radio>
          <Radio value={6}>空内容</Radio>
        </Radio.Group>
        <div className="k-test-list">
          <div className="list-item">
            <KdSelect
              disabled={selectDisable}
              // defaultOpen={true}
              allowClear
              options={dataSource}
              className="k-design-select-test"
              dropdownLoading={loading}
            />
          </div>
        </div>

        <div className="k-test-list">
          <div className="list-item">
            <Select style={{ width: 200 }} notFoundContent="無搜索結果">
              {testData.map((item) => (
                <Select.Option key={item.value}>{item.label}</Select.Option>
              ))}
            </Select>
          </div>
        </div>

        <KdSelect options={[]} showSearch dropdownLoading={true} />
      </div>
    </div>
  );
};

export default KdSelectTest;
