import 'highlight.js/styles/github.css';
import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'antd'
import Editor from 'for-editor'
import IWords from 'for-editor';

import marked from '@/lib/marked';

export default function Index() {
    const value1 = localStorage.getItem('eee')
    const childrenRef = useRef<IWords>(null)
    const [value, changeValue] = useState(value1)
    const toolbar = {
        // h1: true, // h1
        // h2: true, // h2
        // h3: true, // h3
        // h4: true, // h4
        img: true, // 图片
        // link: true, // 链接
        // code: true, // 代码块
        // preview: true, // 预览
        expand: true, // 全屏
        /* v0.0.9 */
        // undo: true, // 撤销
        // redo: true, // 重做
        save: true, // 保存
        /* v0.2.3 */
        subfield: true, // 单双栏模式

    }
    const addClick = () => {

        console.log(value, 'changeValue1');

        console.log(marked(value), 'code1');
    }
    const changeValue1 = (e: any) => {

    }
    const addImg = (file: any) => {
        console.log(file, 'file');
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
        localStorage.setItem('eee', JSON.stringify(value))
        console.log(value);
    }

    return (<div><Editor value={value} toolbar={toolbar} onChange={(e) => changeValue(e)} ref={childrenRef} addImg={($file) => addImg($file)} onSave={clickSave} />
        {/* <Button onClick={addClick}>
            添加
        </Button> */}


    </div>)
}


