import * as React from 'react'

"use strict";
import {Row, Col, Upload, Button, Icon, message} from 'antd'

interface UploadModeProps extends React.Props<UploadMode> {

}

interface UploadModeState {
    fileList?: Array<any>
}

class UploadMode extends React.Component<UploadModeProps, UploadModeState> {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    static defaultProps = {};

    handleChange(info) {
        let fileList = info.fileList;

        // 1. 上传列表数量的限制
        //    只显示最近上传的一个，旧的会被新的顶掉
        fileList = fileList.slice(-2);

        // 2. 读取远程路径并显示链接
        fileList = fileList.map((file) => {
            if (file.response) {
                // 组件会将 file.url 作为链接进行展示
                file.url = file.response.url;
            }
            return file;
        });

        // 3. 按照服务器返回信息筛选成功上传的文件
        fileList = fileList.filter((file) => {
            if (file.response) {
                return file.response.status === 'success';
            }
            return true;
        });

        this.setState({ fileList });
    }

    handleRemove(file){
        console.log(file)
    }

    render() {
        const props = {
            action: '/Nicezhuanye/admin/Upload/uploadFile',
            onChange: this.handleChange,
            multiple: true,
            onRemove: this.handleRemove,

            beforeUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                if (!isJPG) {
                    message.error('只能上传 JPG 文件哦！');
                }
                return isJPG;
            },

            method:"post" ,
            enctype:"multipart/form-data"
        };

        return (
            <div>
                <Upload {...props} fileList={this.state.fileList}>
                    <Button type="ghost">
                        <Icon type="upload" /> 点击上传
                    </Button>
                </Upload>
            </div>
        )
    }
}

export = UploadMode