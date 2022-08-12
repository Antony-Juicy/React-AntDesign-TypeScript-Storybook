import type { CheckboxProps } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxGroupProps } from 'antd/lib/checkbox';
import React from 'react';
import './index.less';

export type KCheckboxProps = CheckboxGroupProps & CheckboxProps;

const KCheckBox: React.FC<KCheckboxProps> = (props) => {
  return !!props?.options && props?.options.length > 0 ? (
    <Checkbox.Group className="k-checkbox-group-container" {...props} />
  ) : (
    <Checkbox className="k-checkbox-container" {...props}>
      {props.children}
    </Checkbox>
  );
};

export default KCheckBox;
