import { Pagination } from 'antd';
import React from 'react';
import KPagination from '.';
import './Pagination-test.less';
const PaginationTest: React.FC = () => {
  return (
    <>
      {/* <div className="KPagination"> */}
      <Pagination total={500} showQuickJumper />
      {/* </div> */}

      <div className="KPagination">
        <KPagination total={50} />
      </div>
      <div className="KPagination">
        <KPagination total={500} showTotal={undefined} />
      </div>

      <div className="KPagination">
        <KPagination total={50} showQuickJumper />
      </div>

      <div className="KPagination">
        <KPagination total={100} showQuickJumper />
      </div>

      <div className="KPagination">
        <KPagination size="small" total={50} showQuickJumper />
      </div>

      <div className="KPagination">
        <KPagination
          size="small"
          total={100}
          showQuickJumper
          showTotal={(total) => `共 ${total} 個`}
        />
      </div>

      <div className="KPagination">
        <KPagination total={100} simple />
      </div>
    </>
  );
};
export default PaginationTest;
