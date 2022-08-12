import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import cx from 'classnames';
import './index.less';
import NextIcon from './next-icon';
import PrevIcon from './prev-icon';
// import PrevIcon from '../..//assets/svgs/prev-icon.svg';
// import NextIcon from '../../assets/svgs/next-icon.svg';

const KPagination: React.FC<PaginationProps> = (props) => {
  // const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  //   if (type === 'prev') {
  //     return (
  //       <button className="ant-pagination-item-link" type="button" tabIndex={-1}>
  //         <span role="img" aria-label="left" className="anticon anticon-left">
  //           <PrevIcon />
  //         </span>
  //       </button>
  //     );
  //   }
  //   if (type === 'next') {
  //     return (
  //       <>
  //         <button className="ant-pagination-item-link" type="button" tabIndex={-1} disabled>
  //           <span role="img" aria-label="left" className="anticon anticon-left">
  //             <NextIcon />
  //           </span>
  //         </button>
  //       </>
  //     );
  //   }
  //   return originalElement;
  // };

  return (
    <>
      <Pagination
        prevIcon={<PrevIcon />}
        showTotal={(total) => `共 ${total} 個`}
        {...props}
        nextIcon={<NextIcon />}
        // itemRender={itemRender}
        className={cx(
          'k-Pagination',
          !!props.size ? 'k-Paginationsize' : '',
          props.className ?? '',
        )}
      />
    </>
  );
};
export default KPagination;
