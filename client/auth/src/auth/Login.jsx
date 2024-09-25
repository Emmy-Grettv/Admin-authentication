import { Card, Flex, Typography, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import loginImage from '../assets/login.jpg'

export const Login = () => {
    const handleLogin = (values) => {
        console.log(values);
    }

    return (
        <>
            <Card className='form-container'>
                <Flex gap='large' align='center'>
                {/* image */}
                  <img src={loginImage} alt="Register" className='img' />
                    {/* Form */}
                    <Flex vertical flex={1}>
                        <Typography.Title level={3} strong className='title'>
                            Sign In
                        </Typography.Title>
                        <Typography.Text type="secondary" strong className='slogan'>
                           Unlock your world!
                        </Typography.Text>
                        <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email',
                                    },
                                    {
                                        type: 'email',
                                        message: 'Input is not a valid email!'
                                    }
                                ]}
                            >
                                <Input size='large' placeholder='Enter your email' />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password size='large' placeholder='Enter your password' />
                            </Form.Item>
                           {/* { error &&(
                             <Alert 
                               description= {error}
                               type='error'
                               showIcon
                               closable
                               className='alert'
                            />
                           )} */}

                            <Form.Item>
                                <Button 
                                    // type={`${loading ? '' : 'primary'}`}
                                    htmlType='submit'
                                    size='large'
                                    className='btn'
                                >
                                    {/* {
                                        loading ? <Spin /> : 'Create account'
                                    } */}
                                    Sign In
                                </Button>
                            </Form.Item>
                            <Form.Item>
                               <Link to="/">
                                <Button
                                  size='large'
                                  className='btn'
                                >
                                    Create an account
                                </Button>
                               </Link>
                            </Form.Item>
                            {/* Add more form items as needed */}
                        </Form>
                    </Flex>
                </Flex>
            </Card>
        </>
    );
}
