import { DatePicker } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import KRangePicker from './index';
import './RangePicker-test.less';

const { RangePicker } = DatePicker;

const TestKRangePicker: React.FC = () => {
  const today: any = moment();
  const currentMonth = moment().startOf('month');
  const [finishTimer, setFinishTimer] = useState<any>([currentMonth, today]);
  const [valueTimer, setValueTimer] = useState<any>([]);

  return (
    <>
      <div className="KRangePicker">
        <RangePicker format="YYYY-MM-DD HH:mm" />
        <RangePicker />
      </div>

      <div className="KRangePicker">
        <KRangePicker placeholder={['選擇開始日期', '選擇截止日期']} />
      </div>

      <div className="KRangePicker">
        <KRangePicker
          placeholder={['選擇開始日期', '選擇截止日期']}
          value={finishTimer}
          onChange={(data) => {
            setFinishTimer([...((data as any) || [])]);
          }}
        />
      </div>

      <div className="KRangePicker">
        <KRangePicker
          placeholder={['選擇開始日期', '選擇截止日期']}
          value={valueTimer}
          onChange={(data) => {
            setValueTimer([...((data as any) || [])]);
          }}
        />
        <KRangePicker
          placeholder={['選擇開始日期', '選擇截止日期']}
          value={finishTimer as any}
          disabled
          onChange={(data) => {
            setFinishTimer([...((data as any) || [])]);
          }}
        />
      </div>

      <div className="KRangePicker">
        <KRangePicker
          // open
          placeholder={['選擇開始日期', '選擇截止日期']}
          defaultValue={finishTimer as any}
          onChange={(data) => {
            setFinishTimer([...((data as any) || [])]);
          }}
        />
      </div>
    </>
  );
};

export default TestKRangePicker;
