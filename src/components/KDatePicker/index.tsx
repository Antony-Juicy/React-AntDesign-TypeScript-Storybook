import DatePicker from './k-datePicker';
import KRangePicker from './k-rangePicker';

export type KDatePickerProps = typeof DatePicker & {
  RangePicker: typeof KRangePicker;
};

export const generateMergedDatePicker = () => {
  const MergedDatePicker = DatePicker as KDatePickerProps;
  MergedDatePicker.RangePicker = KRangePicker;

  return MergedDatePicker;
};

export default generateMergedDatePicker();
