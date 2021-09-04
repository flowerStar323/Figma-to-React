import { Upload, Button } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

const fileList = [
    {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }
];
export default function func() {
    handleChange = () => {
        console.log(fileList);
    }
    return (
        <div>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                defaultFileList={[...fileList]}
                onChange={this.handleChange}
            >
                <Button >Upload</Button>
            </Upload>
            <br />
            <br />
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                defaultFileList={[...fileList]}
                className="upload-list-inline"
            >
                <Button >Upload</Button>
            </Upload>
        </div>
    )
}