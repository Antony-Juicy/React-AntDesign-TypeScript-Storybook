import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import KdModal from '../index';
// import "./index.less";
import { Button } from 'antd';
export interface LabeledValue {
  key?: string;
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
}

const KdModalTest: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Button onClick={showModal}>啊 啊啊 啊啊啊！！！</Button>
      <KdModal
        title="對話框標題"
        btnMiddle={true}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        type="modal"
        // type="confirm"
        icon={<ExclamationCircleOutlined />}
        // className="k-design-modal-test"
      />
    </>
  );
};

export default KdModalTest;
