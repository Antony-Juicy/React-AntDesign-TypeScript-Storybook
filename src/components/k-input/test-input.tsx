import type { InputRef, RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import React, { useRef, useState } from 'react';
import KInput from '.';
import './index.less';
import './test-input.less';

const TestInput: React.FC = () => {
  const inputRef = useRef<InputRef>(null);
  const textAreaRef = useRef<any>(null);
  const [value, setValue] = useState(1);
  const [textAreaType, setTextAreaType] = useState(1);
  const [inputValue, setInputValue] = useState<any>('');
  const [textAreaValue, setTextAreaValue] = useState<any>('');
  const [inputDisable, setInputDisable] = useState<boolean>(false);
  const [textAreaDisable, setTextAreaDisable] = useState<boolean>(false);
  const [inputStatus, setInputStatus] = useState<'error' | undefined>(undefined);
  const radioOnChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    if (5 !== e.target.value) {
      setInputStatus(undefined);
    }
    if (4 !== e.target.value) {
      setInputDisable(false);
    }
    switch (e.target.value) {
      case 1:
        setInputValue('');
        console.log(inputRef.current);
        inputRef.current!.blur();
        break;
      case 2:
        inputRef.current!.focus();
        setInputValue('输入结果');
        break;
      case 3:
        inputRef.current!.blur();
        setInputValue('输入结果');
        break;
      case 4:
        setInputDisable(true);
        break;
      case 5:
        setInputStatus('error');
        break;
      default:
        return;
    }
  };

  const TextAreaChange = (e: RadioChangeEvent) => {
    setTextAreaType(e.target.value);
    // console.log('ref: ', textAreaRef.current)
    if (4 !== e.target.value) {
      setTextAreaDisable(false);
    }
    switch (e.target.value) {
      case 1:
        setTextAreaValue('');
        textAreaRef.current!.blur();
        break;
      case 2:
        textAreaRef.current!.focus();
        setTextAreaValue('输入结果');
        break;
      case 3:
        textAreaRef.current!.blur();
        setTextAreaValue('输入结果');
        break;
      case 4:
        setTextAreaDisable(true);
        break;
      default:
        return;
    }
  };

  const textAreaChange = (e: any) => {
    setTextAreaValue(e.target.value);
  };
  return (
    <div className="button-test-wrapper">
      <div className="k-test-box">
        <p className="k-test-title">输入框大小</p>
        <p>- 输入框分为大号(用于登录、注册页面)、中号(用于常规页面)</p>
        <div className="k-test-list">
          <div className="list-item">
            <KInput placeholder="中号 常规" />
          </div>
          <div className="list-item">
            <KInput placeholder="大号 常规" size="large" />
          </div>
        </div>
        <pre className="k-test-pre">
          <code>
            <div className="k-test-explan">{`//api`}</div>
            {`size?: 'middle' | 'large' | undefined`}
          </code>
        </pre>
      </div>

      <div className="k-test-box">
        <p className="k-test-title">基本用法</p>
        <p style={{ marginBottom: '24px' }}> - 常规、- 悬浮、- 激活、- 失焦、- 不可用、 - 错误</p>
        <div className="k-test-list">
          <div className="list-item">
            <KInput
              placeholder="常规"
              ref={inputRef}
              value={inputValue}
              disabled={inputDisable}
              status={inputStatus}
            />
          </div>
        </div>
        <Radio.Group onChange={radioOnChange} value={value}>
          <Radio value={1}>常规</Radio>
          <Radio value={2}>激活</Radio>
          <Radio value={3}>失焦</Radio>
          <Radio value={4}>不可用</Radio>
          <Radio value={5}>错误</Radio>
        </Radio.Group>
        <pre className="k-test-pre">
          <code>
            <div className="k-test-explan">{`//不可用`}</div>
            <div>{`<KInput disabled />`}</div>
            <div className="k-test-explan">{`//错误`}</div>
            <div>{`<KInput status='error' />`}</div>
          </code>
        </pre>
      </div>

      <div className="k-test-box">
        <p className="k-test-title">密码输入框</p>
        <div className="k-test-list">
          <div className="list-item">
            <KInput placeholder="请输入密码" inputType="password" />
          </div>
        </div>
        <pre className="k-test-pre">
          <code>
            <div className="k-test-explan">{`//api`}</div>
            <div>{`inputType?: 'input' | 'password' | 'textArea';`}</div>
            <div>{`<KInput inputType='password' />`}</div>
          </code>
        </pre>
      </div>

      <div className="k-test-box">
        <p className="k-test-title">密码输入框</p>
        <p>- 可以点击清除图标删除内容</p>
        <div className="k-test-list">
          <div className="list-item">
            <KInput placeholder="allowClear" allowClear />
          </div>
        </div>
        <pre className="k-test-pre">
          <code>
            <div>{`<KInput allowClear />`}</div>
          </code>
        </pre>
      </div>

      <div className="k-test-box">
        <p className="k-test-title">长文本框</p>
        <p>- 常规、- 悬浮、- 激活、- 失焦、- 不可用</p>
        <div className="k-test-list">
          <div className="list-item">
            <KInput
              onChange={textAreaChange}
              placeholder="請輸入描述"
              ref={textAreaRef}
              value={textAreaValue}
              inputType="textArea"
              autoSize={{ minRows: 4, maxRows: 6 }}
              disabled={textAreaDisable}
              maxLength={150}
            />
          </div>
          <div className="list-item">
            <Radio.Group onChange={TextAreaChange} value={textAreaType}>
              <Radio value={1}>常规</Radio>
              <Radio value={2}>激活</Radio>
              <Radio value={3}>失焦</Radio>
              <Radio value={4}>不可用</Radio>
            </Radio.Group>
          </div>
          <pre className="k-test-pre">
            <code>
              <div className="k-test-explan">{`//不可用`}</div>
              <div>{`<KInput inputType="textArea" disabled />`}</div>
              <div className="k-test-explan">{`//限制最小行数、最大行数`}</div>
              <div>{`<KInput inputType="textArea" autoSize={{ minRows: 4, maxRows: 6 }} />`}</div>
            </code>
          </pre>
          <p>- 可拉伸</p>
          <div className="list-item">
            <KInput placeholder="請輸入描述" inputType="textArea" allowClear />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestInput;
