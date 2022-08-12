import { DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import cx from 'classnames';
import calenderIcon from '../../assets/svgs/calender-icon.svg';
import clearIcon from '../../assets/svgs/clear-icon.svg';
import './index.less';

/* 时间格式 */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const KRangePicker: React.FC<RangePickerProps> = (props) => {
  return (
    <>
      <DatePicker.RangePicker
        format={dateFormatList}
        {...props}
        suffixIcon={<img src={calenderIcon} alt="" />}
        className={cx('k-rangepicker', props.className ?? '')}
        dropdownClassName={cx('k-dropdownClassName', props.className ?? '')}
        clearIcon={<img src={clearIcon} alt="" />}
      />
    </>
  );
};
export default KRangePicker;
