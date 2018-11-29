import React from "react";
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from "react-redux";
import { userLogin } from "./store/login.redux";
import { Redirect } from "react-router-dom";

import "./style.less";

const FormItem = Form.Item;


@connect(
    state => state.loginRducer,
    { userLogin }
)
class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.userLogin(values.userName, values.password)
                // console.log('Received values of form: ', values);
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { userInfo, msg, requestFlag } = this.props;
        if (prevProps.requestFlag === requestFlag) {
            return;
        }
        if (!userInfo && msg) {

            message.error(msg);
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { userInfo } = this.props;
        return !userInfo ? (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <span className="login-title">欢迎登陆xx商城管理系统</span>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>


                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form>
            </div>
        ) : <Redirect to={`/`}/>;
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;