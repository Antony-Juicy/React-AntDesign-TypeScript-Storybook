import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';
import cx from 'classnames';
import React from 'react';
import closeIcon from '../../assets/svgs/close-no-bg.svg';
import './index.less';

const KDrawer: React.FC<DrawerProps> = (props) => {
  return (
    <Drawer
      {...props}
      destroyOnClose
      className={cx('k-drawer', props.className ?? '')}
      closeIcon={<img src={closeIcon} alt="" className="k-drawer-close-Icon" />}
    >
      {props?.children}
    </Drawer>
  );
};

export default KDrawer;
