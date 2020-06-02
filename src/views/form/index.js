import React, { Component } from 'react'
import { Form, Input, Button ,Checkbox} from 'antd';


export default class index extends Component {
    state = {
        layout: {
            labelCol: {
                span: 6,
            },
            wrapperCol: {
                span: 12,
            },
        },
        tailLayout: {
            wrapperCol: {
                offset: 6,
                span: 12,
            },
        }
    }
    formRef = React.createRef();

    onGenderChange = value => {
        this.formRef.current.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    onFinish = values => {
        console.log(values);
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    onFill = () => {
        this.formRef.current.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };

    render() {
        let { layout, tailLayout } = this.state
        return (
            <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Form.Item
                    name="username"
                    label="用户名"
                    rules={[
                        {
                            required: true,
                            message: '请填写信息'
                        }, {
                            pattern: '/^[\u4E00-\u9FA5A-Za-z0-9_]{6,10}$/',
                            message: '必须包含数字、字母、下划线，6-10位'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="pwd"
                    label="密码"
                    rules={[
                        {
                            required: true,
                            message: '请填写信息'
                        }, {
                            pattern: '/^[/w/d]{6,10}$/',
                            message: '必须包含数字、字母、下划线，6-10位'
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
              </Button>
                    <Button htmlType="button" onClick={this.onReset}>
                        Reset
              </Button>
                    <Button type="link" htmlType="button" onClick={this.onFill}>
                        Fill form
              </Button>
                </Form.Item>
            </Form>
        )
    }
}
