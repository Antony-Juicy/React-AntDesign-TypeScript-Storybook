import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import cx from 'classnames';
import calenderIcon from '../../assets/svgs/calender-icon.svg';
import clearIcon from '../../assets/svgs/clear-icon.svg';
import './index.less';
/* 时间格式 */
const dateFormatList = ['DD/MM/YYYY'];

const KDatePicker: React.FC<DatePickerProps> = (props) => {
  return (
    <>
      <DatePicker
        format={dateFormatList}
        {...props}
        suffixIcon={<img src={calenderIcon} alt="" />}
        clearIcon={<img src={clearIcon} alt="" />}
        className={cx('k-datepicker', props.className ?? '')}
        dropdownClassName={cx('k-dropdownClassName', props.className ?? '')}
      />
    </>
  );
};
export default KDatePicker;
