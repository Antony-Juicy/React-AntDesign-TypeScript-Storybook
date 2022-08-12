import { Divider } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import React, { useState } from 'react';
import KdCheckBox from '../index';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const CheckBoxTest: React.FC = () => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <div>
      <KdCheckBox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </KdCheckBox>
      <Divider />
      <KdCheckBox options={plainOptions} value={checkedList} onChange={onChange} />
    </div>
  );
};

export default CheckBoxTest;
