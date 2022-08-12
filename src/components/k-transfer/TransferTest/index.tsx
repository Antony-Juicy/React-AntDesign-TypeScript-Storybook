import { Button } from 'antd';
import React, { useState } from 'react';
import KdModal from '../../k-modal/index';
import KdTransfer from '../index';
import './index.less';

type TransferItem = {
  key: string;
  title: string;
  description?: string;
  disabled?: boolean;
};

const testData: TransferItem[] = [
  { key: '1111', title: '第一选项', description: '描述我是第一选项', disabled: true },
  { key: '2222', title: '第二选项', description: '描述我是第二选项', disabled: true },
  { key: '3333', title: '第三选项', description: '描述我是第三选项', disabled: true },
  { key: '4444', title: '第四选项', description: '描述我是第四选项', disabled: true },
  { key: '5555', title: '第五选项', description: '描述我是第五选项', disabled: true },
  { key: '6666', title: '第六选项', description: '描述我是第六选项', disabled: true },
];

const KdSelectTest: React.FC = () => {
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  const [ModalVisible, setModalVisible] = useState<any>(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  const openModal = () => {
    setModalVisible(true);
  };
  const sureModal = () => {
    // console.log(targetKeys, 'targetKeys');
    closeModal();
  };

  return (
    <>
      <Button onClick={openModal}>啊 啊啊 啊啊啊！！！</Button>
      <KdModal
        type="modal"
        title="選擇類別"
        btnMiddle
        width={792}
        visible={ModalVisible}
        onCancel={closeModal}
        onOk={sureModal}
        className="k-design-transfer-modal"
        cancelButtonProps={{ className: 'k-design-cancel-btn' }}
        okButtonProps={{ className: 'k-design-sumbit-btn' }}
      >
        <KdTransfer
          dataSource={testData}
          className="k-design-transfer-container"
          targetKeys={targetKeys}
          setTargetKeys={setTargetKeys}
        />
      </KdModal>
    </>
  );
};

export default KdSelectTest;
