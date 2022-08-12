import { CloseOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input, Tooltip } from 'antd';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import cx from 'classnames';
import _, { isArray, isEmpty, isObject } from 'lodash';
import type { FormEvent } from 'react';
import React, { useEffect, useState } from 'react';
import closeIcon from '../../assets/closeIcon.png';
import inputSearchIcon from '../../assets/inputSearch.png';

import './index.less';

type TransferItem = {
  key: string;
  title: string;
  description?: string;
  disabled?: boolean;
};

type KTransferProps = {
  className?: string;
  dataSource: TransferItem[];
  targetKeys: string[];
  setTargetKeys: React.Dispatch<React.SetStateAction<string[]>>;
};
const KTransfer: React.FC<KTransferProps> = (props) => {
  // 所有類別的列表
  const [categoryData, setCategoryData] = useState<any[]>([]);
  // 可以選擇的keys的集合
  const [canSelectList, setCanSelectList] = useState<any[]>([]);
  // 搜索值
  const [searchValue, setSearchValue] = useState<string>('');
  // 類別搜索结果
  const [searchResult, setSearchResult] = useState<any[]>([]);
  // 全選
  const [checkAll, setCheckAll] = useState(false);
  // 搜索值全選
  const [searchCheckAll, setSearchCheckAll] = useState(false);
  // 已选的类别的id集合
  const [selectRowKeys, setSelectRowKeys] = useState<any[]>([]);
  // 已选的类别的数据，用于回显已选内容
  const [selectItems, setSelectItems] = useState<any[]>([]);

  const search = _.debounce((e: FormEvent<HTMLInputElement>) => {
    setSearchValue((e.target as HTMLInputElement).value);
    if (
      (e.target as HTMLInputElement).value &&
      (e.target as HTMLInputElement).value !== searchValue
    ) {
      const filterResult = categoryData.filter((item: any) => {
        if (item.title) {
          return (item.title as string).includes((e.target as HTMLInputElement).value);
        }
        return false;
      });
      const filterSelectKeys: any[] = [];
      filterResult.map((i: any) => {
        filterSelectKeys.push(i.key);
      });
      //通过搜索栏筛选结果的情况下，判断是否需要勾上全选的checkbox
      //filterSelectKeys 是筛选情况下左边内容的key数组，selectRowKeys 是已选择的key的集合，通过 _.difference 判断是否属于全选状态
      setSearchCheckAll(0 === _.difference(filterSelectKeys, selectRowKeys).length);
      setSearchResult(filterResult);
    }
  }, 300);

  // 單選
  const selectChange = (e: CheckboxChangeEvent) => {
    const selectList = searchValue ? _.map(searchResult, 'key') : canSelectList;

    // 左面的数据
    const transferTemp = [...selectRowKeys];
    // 右面的数据
    const seletTemp = [...selectItems];
    // console.log('before splice: ', seletTemp, transferTemp)
    if ((e as CheckboxChangeEvent).target.checked) {
      // 选中时，添加操作
      categoryData.map((o: any, i: number) => {
        if (o.key === (e as CheckboxChangeEvent).target.value) {
          seletTemp.splice(i, 0, o);
          // transferTemp.splice(i, 0, o.key)
          transferTemp.unshift(o.key);
        }
      });
    } else {
      // 取消选中时，删除操作
      selectItems.map((item: any, deleteIndex: number) => {
        if ((e as CheckboxChangeEvent).target.value === item.key) {
          // transferTemp.splice(deleteIndex, 1)
          const indexOfKey = selectRowKeys.indexOf(item.key);
          if (indexOfKey > -1) {
            transferTemp.splice(indexOfKey, 1);
          }
          seletTemp.splice(deleteIndex, 1);
        }
      });
    }
    // console.log('after splice: ', seletTemp, transferTemp)
    setSelectItems(_.uniq(seletTemp));
    setSelectRowKeys(_.uniq(transferTemp));
    props.setTargetKeys(_.uniq(transferTemp));
    if (searchValue) {
      setSearchCheckAll(
        (selectList || []).length === (transferTemp || []).length &&
          (selectList || []).length !== 0,
      );
    } else {
      setCheckAll(
        (selectList || []).length === (transferTemp || []).length &&
          (selectList || []).length !== 0,
      );
    }
  };

  // 非空校驗
  const isEmptyUtils = (value: any, excludeZero: boolean = true) => {
    if (excludeZero) {
      if (!value && value !== 0 && value !== false) {
        return true;
      }
    } else if (!value || `${value}` === '0') {
      return true;
    }
    if ((isObject(value) || isArray(value)) && isEmpty(value)) {
      return true;
    }
    return false;
  };

  // 多选框组全選
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const selectList = searchValue ? _.map(searchResult, 'key') : _.map(categoryData, 'key');

    let transferTemp = [...selectRowKeys, ...(e.target.checked ? selectList : [])];
    if (e.target.checked) {
      transferTemp = [...selectRowKeys, ...selectList];
    } else {
      transferTemp = _.difference(selectRowKeys, selectList);
    }
    transferTemp = _.uniq(transferTemp);

    const allSelectData = searchValue ? searchResult : categoryData;
    let selectTemp = [...selectItems, ...(e.target.checked ? allSelectData : [])];
    if (e.target.checked) {
      selectTemp = [...selectItems, ...allSelectData];
    } else {
      selectTemp = _.difference(selectItems, allSelectData);
    }
    selectTemp = _.uniq(selectTemp);

    if (searchValue) {
      setSearchCheckAll(e.target.checked);
    } else {
      setCheckAll(e.target.checked);
      if (!e.target.checked) {
        setSearchCheckAll(e.target.checked);
      }
    }
    setSelectRowKeys(transferTemp);
    props.setTargetKeys(transferTemp);
    setSelectItems(selectTemp);
  };

  // 類別列表生成
  const renderLeftList = (list?: any) => {
    const renderList = list || categoryData;
    if (renderList && renderList.length > 0) {
      return renderList.map((item: any) => {
        return (
          <div key={item.key} className={cx('k-transfer-checkbox', 'k-transfer-person')}>
            {
              <Checkbox
                value={item.key}
                checked={(selectRowKeys || []).includes(`${item.key}`)}
                onChange={(e: CheckboxChangeEvent) => {
                  selectChange(e);
                }}
              >
                <div className="k-transfer-checkout-label">
                  <div className="k-transfer-person-name">
                    <Tooltip placement="topLeft" overlay={item.name} zIndex={500001}>
                      <span>{item.title}</span>
                    </Tooltip>
                  </div>
                </div>
              </Checkbox>
            }
          </div>
        );
      });
    }
    return <></>;
  };

  // 删除穿梭框
  const deleteTransferItem = (item: any, index: number) => {
    const transferTemp = [...selectRowKeys];
    const selectTemp = [...selectItems];
    transferTemp.splice(selectRowKeys.indexOf(item.key), 1);
    selectTemp.splice(index, 1);

    const selectList = searchValue ? _.map(searchResult, 'key') : canSelectList;
    if (searchValue) {
      setSearchCheckAll(
        (selectList || []).length === (transferTemp || []).length &&
          (selectList || []).length !== 0,
      );
    } else {
      setCheckAll(
        (selectList || []).length === (transferTemp || []).length &&
          (selectList || []).length !== 0,
      );
    }

    setSelectRowKeys(transferTemp);
    props.setTargetKeys(transferTemp);
    setSelectItems(selectTemp);
  };

  useEffect(() => {
    if (props.dataSource.length === 0) {
      return;
    }
    setCategoryData(props.dataSource);
    setCanSelectList(_.map(props.dataSource, 'key'));
    setSelectRowKeys(props.targetKeys);
    const initRightContent = props.dataSource.filter((item: any) =>
      props.targetKeys.includes(item.key),
    );
    setSelectItems(initRightContent);
    setCheckAll(
      (_.map(props.dataSource, 'key') || []).length === (props.targetKeys || []).length &&
        (_.map(props.dataSource, 'key') || []).length !== 0,
    );
  }, [props.dataSource, props.targetKeys]);

  return (
    <div id="J_KpayTransfer" className="k-transfer-wapper">
      <div>
        <p className="k-transfer-title">選取</p>
        <div className="k-transfer-content">
          <Input
            suffix={<img className="k-transfer-input" src={inputSearchIcon} />}
            placeholder="搜尋"
            style={{ width: '272px', height: '38px' }}
            allowClear={{
              clearIcon: <img className="k-transfer-input-clear-icon" src={closeIcon} />,
            }}
            className="k-transfer-search"
            onChange={(value) => {
              search(value);
            }}
          />
          <div
            className={cx('k-transfer-checkbox-search-false-wapper', 'k-transfer-nice-scroll')}
            style={!searchValue ? { display: 'none' } : {}}
          >
            {0 === searchResult.length ? (
              <div className="k-transfer-text-center">
                <span>{'未能搜尋此類別'}</span>
              </div>
            ) : (
              <div className="k-transfer-checkbox-group">
                {
                  <Checkbox
                    className="k-transfer-grp-checkbox"
                    style={{ justifyContent: 'normal' }}
                    checked={searchCheckAll}
                    onChange={onCheckAllChange}
                  >
                    全選
                  </Checkbox>
                }
                {renderLeftList(searchResult)}
              </div>
            )}
          </div>

          <div style={searchValue ? { display: 'none' } : {}}>
            <div
              className={cx('k-transfer-checkbox-search-false-wapper', 'k-transfer-nice-scroll')}
            >
              {categoryData.length === 0 ? (
                <div className={'k-transfer-list-empty'}>
                  <span>{'未有類別資訊'}</span>
                </div>
              ) : (
                <div className="k-transfer-checkbox-group">
                  {
                    <Checkbox
                      className="k-transfer-grp-checkbox"
                      checked={checkAll}
                      onChange={onCheckAllChange}
                    >
                      全選
                    </Checkbox>
                  }
                  {renderLeftList()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="k-transfer-operation-wapper">
        <div className="k-transfer-operation" />
      </div>

      <div>
        <p className="k-transfer-title">已選</p>
        <div className="k-transfer-right-content">
          <div className={cx('k-transfer-right-wapper')}>
            {selectItems && selectItems.length > 0 ? (
              selectItems.map((item: any, index: number) => {
                if (!isEmptyUtils(item)) {
                  return (
                    <div className={'k-transfer-right-item'} key={item.key}>
                      <div
                        className={cx('k-transfer-checkbox', 'k-transfer-right-selected-options')}
                      >
                        <div className="k-transfer-checkout-label">
                          <div>
                            <Tooltip
                              className="k-transfer-person-name"
                              placement="topLeft"
                              overlay={item.title}
                              zIndex={500001}
                            >
                              <span>{item.title}</span>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                      <Button
                        type="text"
                        className={'k-transfer-right-btn'}
                        onClick={() => {
                          deleteTransferItem(item, index);
                        }}
                      >
                        <CloseOutlined className={'k-transfer-right-btn-icon'} />
                      </Button>
                    </div>
                  );
                }
                return <></>;
              })
            ) : (
              <div className="k-transfer-text-center">
                <span>請選取類別</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KTransfer;
