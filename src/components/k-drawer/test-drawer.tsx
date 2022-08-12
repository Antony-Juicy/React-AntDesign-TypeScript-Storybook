import { Button } from 'antd';
import React, { useState } from 'react';
import KDrawer from './index';
import './index.less';
const KDrawerTest: React.FC = () => {
  const [visible, setVisible] = useState(false);
  // setTimeout(()=> {
  //   setVisible(true)
  // }, 1000)

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      {/* <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer> */}
      <KDrawer title="Basic Drawer" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </KDrawer>
    </>
  );
};
export default KDrawerTest;
