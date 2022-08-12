import { CloseCircleOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import type { Moment } from 'moment';
import moment from 'moment';
import { useState } from 'react';
import './DatePicker-test.less';
import KDatePicker from './index';

const TestDatePicker: React.FC = () => {
  const dateFormat = 'YYYY/MM/DD';
  const today: any = moment();

  const [values, setValue] = useState<Moment | null>(today);

  const customFormat: any = (value: any) => `当前时间: ${value.format(dateFormat)}`;

  return (
    <>
      <div className="KDatePicker">
        <DatePicker />

        <DatePicker suffixIcon={<CloseCircleOutlined />} />
      </div>

      <div className="KDatePicker">
        <KDatePicker
          value={values}
          onChange={(data: any) => {
            setValue(data);
          }}
          key={'timeRest'}
          format={customFormat}
        />
      </div>

      <div className="KDatePicker">
        <KDatePicker disabled format={customFormat} />
        <KDatePicker disabled placeholder="請選擇日期" />
      </div>

      <div className="KDatePicker">
        <KDatePicker />
        <KDatePicker disabled placeholder="請選擇日期" />
      </div>

      <div className="KDatePicker">
        <KDatePicker disabled />
      </div>

      <div className="KDatePicker">
        <KDatePicker placeholder="請選擇日期" />
      </div>

      <div className="KDatePicker">
        <KDatePicker />
      </div>
    </>
  );
};

export default TestDatePicker;
