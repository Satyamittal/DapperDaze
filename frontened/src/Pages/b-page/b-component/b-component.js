
import form from './b-component.module.css' ;

export function Form(props)
{
    const {state} =  props ;

    return (
        <>
            <form className={form.container}>
                <div className={form.background}></div>

                <div className={form.logo_image}></div>
                <h1>Sign {state ? 'In' : 'Up'}</h1>   

                {
                    state || 
                    (
                        <>
                            <input placeholder='Name' type='text'></input>
                            <input placeholder='Phone Number' type='number'></input>
                        </>
                    )
                }
                <input placeholder='Email' type='email'></input>
                <input placeholder='Password' type='password'></input>
                <button type='submit'>Sign {state ? 'In' : 'Up'}</button>

            </form>
        </>
    );
}