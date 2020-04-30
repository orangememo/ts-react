import 'highlight.js/styles/github.css';
import React, { useState, useEffect, useRef } from 'react'
import './addBlog.less'
import Editor from 'for-editor'
import IWords from 'for-editor';
import { DatePicker, } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
// import './addBlog.less'
const { RangePicker } = DatePicker;

const layout = {

    labelCol: {
        xs: { span: 8 },
        sm: { span: 4 },
        md: { span: 3 },
        lg: { span: 2 },
        xl: { span: 2 },
    },
    wrapperCol: { span: 16 },
};
export default function Index() {

    const childrenRef = useRef<IWords>(null)
    const [editValue, changeValue] = useState('')
    const [dateValue, changeDateValue] = useState('')

    const toolbar = {
        h1: true, // h1
        h2: true, // h2
        h3: true, // h3
        h4: true, // h4
        // img: true, // 图片
        // link: true, // 链接
        code: true, // 代码块
        preview: true, // 预览
        expand: true, // 全屏
        /* v0.0.9 */
        // undo: true, // 撤销
        // redo: true, // 重做
        // save: true, // 保存
        /* v0.2.3 */
        subfield: true, // 单双栏模式

    }
    const addClick = () => {


    }
    const onChange = (value: any, dateString: string) => {
        changeDateValue(dateString)
    }
    const onOk = (value: any) => {
        // console.log(value);
    }
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const addImg = (file: any) => {
        // console.log(childrenRef)
        if (childrenRef) {
            if (childrenRef.current !== null) {
                console.log(childrenRef, childrenRef.current, 'childrenRef.current');
                let freader = new FileReader();
                freader.readAsDataURL(file)
                console.log(freader.result, 'freader');
                // childrenRef.current.$img2Url(file.name,  )
            }
        }

    }

    // useEffect(() => {
    //     // 使用浏览器API更新文档标题
    //     console.log(value, 'value');
    // })
    const clickSave = () => {

    }

    return (<div>
        <div>
            <Form
                {...layout}
                name="basic"
                labelAlign='left'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="标题"
                    name="title"
                    className='formItem'
                    // style="{{'width':'120px'}}"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input maxLength={150} />
                </Form.Item>
                <Form.Item
                    label="日期"
                    name="timeDate"
                    className='formItem'
                    // style="{{'width':'120px'}}"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <DatePicker showTime />
                </Form.Item>
            </Form>
        </div>

        <Editor value={editValue} toolbar={toolbar} onChange={(e) => changeValue(e)} ref={childrenRef} addImg={($file) => addImg($file)} onSave={clickSave} />

        <div className='buttonTopCss'>
            <Button onClick={clickSave}>
                保存
            </Button>
        </div>

    </div>)
}


