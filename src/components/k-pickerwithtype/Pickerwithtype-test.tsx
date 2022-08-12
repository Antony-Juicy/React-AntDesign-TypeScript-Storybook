import { DatePicker } from 'antd';
import KPickerWithtype from './index';
import './Pickerwithtype-test.less';

const { RangePicker } = DatePicker;

const TestKRangePicker: React.FC = () => {
  const testData = [
    { value: 'time', label: 'Time' },
    { value: 'date', label: 'Date' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'quarter', label: 'Quarter' },
    { value: 'year', label: 'Year' },
  ];
  return (
    <>
      <div className="KRangePicker">
        <RangePicker format="YYYY-MM-DD HH:mm" />
        <RangePicker />
      </div>

      <div className="KRangePicker">
        <KPickerWithtype showSearch options={testData} />
      </div>
    </>
  );
};

export default TestKRangePicker;
