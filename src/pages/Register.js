import React from 'react'
import { Button, Form, Input } from 'reactstrap'

function Register() {
    return (
        <div className='register container'>
            <h2>Join The Cybelians</h2>
            <Form>
                <Input
                    placeholder='Firstname'
                    required
                />
                <Input
                    placeholder='Lastname'
                    required
                />
                <Input
                    placeholder='Age'
                    type='number'
                    required
                />
                <Input
                    placeholder='email'
                    type='email'
                    required
                />
                <Input
                    placeholder='Gender M/F/TG'
                    type='text'
                />
                <Input
                    placeholder='Town'
                    type='text'
                />
                <Input
                    placeholder='City'
                    type='text'
                />
                <Input
                    placeholder='Country'
                    type='text'
                />

                <Button
                    color='primary'
                >Join</Button>
            </Form>

        </div>
    )
}

export default Register