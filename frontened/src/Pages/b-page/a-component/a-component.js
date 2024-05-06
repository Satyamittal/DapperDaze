
import navbar from './a-component.module.css'

export function Navbar(props)
{
    const {state,setState} = props ;

    return (
        <>
            <div className={navbar.container}>
                <div className={navbar.brandname}>DAPPERDAZE</div>
                <div className={navbar.signUp}>
                    <img src='https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg'></img>
                    <span onClick={()=>setState(prevState => !prevState)}>SIGN {state ? 'IN' : 'UP'}</span>
                </div>
            </div>
        </>
    );
}