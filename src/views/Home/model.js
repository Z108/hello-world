import React, { Component } from 'react'
import { Modal, Button, Form, Input, Checkbox } from 'antd';

const index = ({ visible, onCreate, onCancel, defaultData }) => {
    const [form] = Form.useForm()
    form.setFieldsValue(defaultData)
    return (
        <Modal
            visible={visible}
            title="更新数据"
            okText='提交'
            cancelText='取消'
            onCancel={onCancel}
            onOk={() => {
                console.log(form);
                form
                    .validateFields()//表单验证
                    .then(values => {
                        form.resetFilelds();
                        onCreate(values)
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    })
            }}
        >

            <Form form={form} labelCol={{ span: 3 }} wrapperCol={{ span: 18 }} name="form_in_modal" >
                <Form.Item
                    name="id"
                    className="input_id"
                >
                    <Input type='hidden' />
                </Form.Item>
                <Form.Item
                    label="姓名"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' },{
                        pattern: /^[\u4E00-\u9FA5A-Za-z0-9_ ]{6,10}$/,
                        message: '必须包含汉字、数字、字母、下划线，6-10位'
                    }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="年龄"
                    name="age"
                    rules={[{ required: true, message: 'Please input your age!' },{
                        pattern: /^[0-9]{1,3}$/,
                        message: '必须是数字，1-3位'
                    }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="地址"
                    name="address"
                >
                    <Input />
                </Form.Item>
                <Form.Item name="isok" valuePropName="checked">
                    <Checkbox>是否选择</Checkbox>
                </Form.Item>
            </Form>


        </Modal>
    )


}
export default index