import Kbutton from './components/k-button/test';
import KCheckBoxTest from './components/k-checkbox/CheckBoxTest';
import KDatePicker from './components/k-datePicker/DatePicker-test';
import KDrawer from './components/k-drawer/test-drawer';
import KInput from './components/k-input/test-input';
import KMessageTest from './components/k-message/test';
import KModalTest from './components/k-modal/ModalTest';
import KPagination from './components/k-pagination/Pagination-test';
import KPickerwithtype from './components/k-pickerwithtype/Pickerwithtype-test';
import KRangePicker from './components/k-rangePicker/RangePicker-test';
import KSelectTest from './components/k-select/SelectTest';
import KTransferTest from './components/k-transfer/TransferTest';
import TestKDatePicker from './pages/Test';

const routesConfig = [
  { path: 'k-button', component: Kbutton },
  { path: 'k-select', exact: true, component: KSelectTest },
  { path: 'k-modal', exact: true, component: KModalTest },
  { path: 'k-input', exact: true, component: KInput },
  { path: 'k-drawer', exact: true, component: KDrawer },
  { path: 'k-checkbox', exact: true, component: KCheckBoxTest },
  { path: 'k-transfer', exact: true, component: KTransferTest },
  { path: 'k-message', exact: true, component: KMessageTest },
  { path: 'k-date-picker', exact: true, component: KDatePicker },
  { path: 'k-range-picker', exact: true, component: KRangePicker },
  { path: 'k-checkbox', exact: true, component: KCheckBoxTest },
  { path: 'k-transfer', exact: true, component: KTransferTest },
  { path: 'k-pagination', exact: true, component: KPagination },
  { path: 'k-pickerwithtype', exact: true, component: KPickerwithtype },
  { path: 'TestKDatePicker', exact: true, component: TestKDatePicker },
];

export default routesConfig;
