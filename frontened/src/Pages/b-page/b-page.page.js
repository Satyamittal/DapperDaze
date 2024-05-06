
import { useState } from 'react';
import { Navbar } from './a-component/a-component';
import { Form } from './b-component/b-component';
import signInStyles from './b-page.module.css' ;

export function SignIn()
{
    const [state , setState] = useState(0) ;

    return (
        <>
            <div className={signInStyles.container}>
                <Navbar state={state} setState={setState}/>
                <Form state={state}/>
            </div>
        </>
    );
}