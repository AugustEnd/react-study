import React, { FC, useState } from "react";
import { Modal, Button, Input } from "antd";
import logo from "./logo.svg";
import Axios from "axios";
import "./App.css";
import "antd/dist/antd.css";

const AddModal: FC = ({}) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <>
            <Button
                type='primary'
                onClick={() => {
                    setVisible(true);
                }}
            >
                点击弹窗
            </Button>

            {visible && (
                <Modal
                    visible={true}
                    width={708}
                    title='弹窗'
                    confirmLoading={loading}
                    onCancel={() => {
                        setVisible(false);
                    }}
                >
                    <div>弹窗内容</div>
                </Modal>
            )}
        </>
    );
};

function App() {
    console.log('dd')
    const changeFile = (e: any) => {
        const file = e.target.files[0];
        console.log(e, e.target.value, file);
        var reader: any = new FileReader();
        reader.onload = function (e: any) {
            // console.log(this);
            console.log(this.result, "result");
            var blob: any = new Blob([this.result]);
            console.log(blob);
        };
        reader.readAsArrayBuffer(file);
    };

    

    const getAreaInfo = async () => {
        console.log("change");
        const source = Axios.CancelToken.source();
        try {
            var msg = await Axios.create().request({
                url:
                    "http://yy.ezubus.com/api/PageIndexSet/GetPageIndexBannerInfo",
                method: "post",
                cancelToken: source.token,
                data: {},
            });
            console.log(msg,'success');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
                <Input onChange={getAreaInfo} style={{ width: 300 }} />
                <AddModal />
                <input type='file' onChange={changeFile} />
            </header>
        </div>
    );
}

export default App;
