import * as React from 'react'
import { Upload, Icon, Modal } from 'antd'
import {isEmptyObject} from '../commonFunc'
"use strict";

interface ImageUploadListProps extends React.Props<ImageUploadList> {
    imgURL?:Array<any>
}

interface ImageUploadListState {
    previewVisible?:boolean,
    previewImage?:string,
    fileList?: Array<any>
}
/**
 * 图片上传插件
 */
class ImageUploadList extends React.Component<ImageUploadListProps, ImageUploadListState> {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList:this.changeImgURLToFieldList()
        }
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    static defaultProps = {};

    handleCancel() {
        this.setState({
            previewVisible: false,
        });
    }

    handleChange(info) {
        let fileList = info.fileList;

        // 1. 上传列表数量的限制
        //    只显示最近上传的一个，旧的会被新的顶掉
       // fileList = fileList.slice(-2);

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

    changeImgURLToFieldList(){
        var imgURL = this.props.imgURL;
        var defaultFileList = [];
        if(!isEmptyObject(imgURL)){
            for (var i = 0; i < imgURL.length; i++) {
                var map = {};
                map["uid"] = i;
                map["name"] = "img"+i;
                map["url"] = imgURL[i].pictureUrl;
                map["thumbUrl"] = imgURL[i].pictureUrl;
                defaultFileList.push(map);
            }
        }
        return defaultFileList;
    }

    render() {
        const props = {
            action: '/Nicezhuanye/admin/Upload/uploadFile',
            onPreview: (file) => {
                this.setState({
                    previewImage: file.url,
                    previewVisible: true,
                });
            },
            onChange: this.handleChange,
        };
        return (
            <div className="am-cf"  >
                <Upload {...props} listType="picture-card" fileList={this.state.fileList}>
                    <Icon type="plus" />
                    <div className="ant-upload-text">上传照片</div>
                </Upload>

                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" src={this.state.previewImage} />
                </Modal>
            </div>
        )
    }
}

export = ImageUploadList