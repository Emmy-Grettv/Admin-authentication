import { Card, Flex, Typography, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import registerImage from '../assets/register.jpg'

export const Register = () => {
    const handleRegister = (values) => {
        console.log(values);
    }

    return (
        <>
            <Card className='form-container'>
                <Flex gap='large' align='center'>
                    {/* Form */}
                    <Flex vertical flex={1}>
                        <Typography.Title level={3} strong className='title'>
                            Create an account
                        </Typography.Title>
                        <Typography.Text type="secondary" strong className='slogan'>
                            Join for exclusive access!
                        </Typography.Text>
                        <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
                            <Form.Item
                                label="Full Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your full name!',
                                    },
                                ]}
                            >
                                <Input size='large' placeholder='Enter your full name' />
                            </Form.Item>
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
                            <Form.Item
                                label="Confirm Password"
                                name="passwordConfirm"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                ]}
                            >
                                <Input.Password size='large' placeholder='Re-enter your password' />
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
                                    create account
                                </Button>
                            </Form.Item>
                            <Form.Item>
                               <Link to="/login">
                                <Button
                                  size='large'
                                  className='btn'
                                >
                                    Sign in
                                </Button>
                               </Link>
                            </Form.Item>
                            {/* Add more form items as needed */}
                        </Form>
                    </Flex>
                   <img src={registerImage} alt="Register" className='img' />
                    <Flex></Flex>
                </Flex>
            </Card>
        </>
    );
}
