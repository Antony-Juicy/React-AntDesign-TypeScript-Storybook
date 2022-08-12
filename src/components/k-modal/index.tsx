import type { ModalProps } from 'antd';
import { Modal, Spin } from 'antd';
import cx from 'classnames';
import { omit } from 'lodash';
import React from 'react';
import closeIcon from '../../assets/svgs/close-no-bg.svg';
import './index.less';
type KModalProps = {
  type: 'modal' | 'confirm';
  icon?: React.ReactNode;
  btnMiddle?: boolean;
  loading?: boolean;
} & ModalProps;

const KModal: React.FC<KModalProps> = (props) => {
  const modalProps = omit(props, 'closeIcon', 'title', 'icon');
  const confirmProps = omit(props, 'closeIcon', 'title', 'icon');

  const confirmTitle = () => {
    return (
      <div className="k-modal-title-node">
        {props?.icon && (
          <div className={cx('k-modal-icon-box', props.icon ? 'k-modal-mr8' : '')}>
            {props.icon}
          </div>
        )}
        {props.title ?? null}
      </div>
    );
  };
  switch (props.type) {
    case 'modal':
      return (
        <Modal
          width={520}
          centered
          title={props?.title ?? <div />}
          okText="確認"
          cancelText="取消"
          {...modalProps}
          className={cx(
            'k-modal-base-modal',
            props.btnMiddle ? 'k-modal-bth-middle' : '',
            props.className ?? '',
          )}
          closeIcon={<img src={closeIcon} alt="" className="k-modal-close-icon" />}
        >
          {props.loading !== undefined ? (
            <Spin spinning={props.loading}>{props.children}</Spin>
          ) : (
            props.children
          )}
        </Modal>
      );
    case 'confirm':
      return (
        <Modal
          width={520}
          centered
          okText="確認"
          cancelText="取消"
          title={confirmTitle()}
          {...confirmProps}
          className={cx(
            'k-modal-base-confirm',
            !props.children ? 'k-modal-no-children' : '',
            props.btnMiddle ? 'k-modal-bth-middle' : '',
            props.className ?? '',
          )}
          closeIcon={<></>}
          keyboard={false}
          maskClosable={false}
        >
          {props.loading !== undefined ? (
            <Spin spinning={props.loading}>{props.children}</Spin>
          ) : (
            props.children
          )}
        </Modal>
      );
  }
};

export default KModal;
