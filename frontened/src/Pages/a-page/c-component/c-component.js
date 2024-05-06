
import { useEffect, useState } from 'react';
import { unisexBrands } from './c-component.data';

import c_styles from './c-component.module.css'
export function C_component()
{
    const [display,setDisplay] = useState(false) ;
    const [value, setValue] = useState('') ;
    const [brands, setBrands] = useState(false) ;
    const [category, setCategory] = useState(true) ;

    // const testing = Object.keys(unisexBrands).map((key) => ( 
    //     <li key={key}>
    //             ndjfasbfas bfas dn asnd ans dna sdcas c_styles
    //             ndjfasbfas bfas dn asnd ans dna sdcas c_styles
    //             ndjfasbfas bfas dn asnd ans dna sdcas c_styles
    //             ndjfasbfas bfas dn asnd ans dna sdcas c_styles
    //             ndjfasbfas bfas dn asnd ans dna sdcas c_styles
    //     </li>
    // ));

    return (
        <>
            <header className={c_styles.navbar}>

                <div className={c_styles.brand_container}>
                    DAPPERDAZE <br></br>
                    A Luxury Clothing and Accessories Brand
                </div>

                <div className={c_styles.options_container}>
                    <div className={c_styles.login_bar}>
                        <a href='/signInorSignUp'>Sign Out/Sign In</a>
                        <a>Customer Care</a>
                    </div>
                    <div className={c_styles.options_bar}>
                        <a href='/' onMouseOver={(e)=>{setDisplay(true); setValue(e.target.textContent)}} onMouseLeave={()=>setDisplay(false)}>MEN</a>
                        <a href='/' onMouseOver={(e)=>{setDisplay(true); setValue(e.target.textContent)}} onMouseLeave={()=>setDisplay(false)}>WOMEN</a>
                        <a href='/' onMouseOver={(e)=>{setDisplay(true); setValue(e.target.textContent)}} onMouseLeave={()=>setDisplay(false)}>KIDS</a>
                        <a href='/' onMouseOver={(e)=>{setDisplay(true); setValue(e.target.textContent)}} onMouseLeave={()=>setDisplay(false)}>BEAUTY</a>
                        <a href='/' onMouseOver={(e)=>{setDisplay(true); setValue(e.target.textContent)}} onMouseLeave={()=>setDisplay(false)}>HOME & KITCHEN</a>
                        <input placeholder='Search DAPPERDAZE'></input>
                        <div className={c_styles.wishlist}>
                                <img src='https://th.bing.com/th/id/OIP.tFxX-gTaWpnfrWlZh1SLLAHaHp?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
                        </div>
                        <div className={c_styles.cart}>
                                <img src='https://th.bing.com/th/id/OIP.aLZ3mKpNWitN5TxFwcjTYQHaHa?w=203&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
                        </div>
                    </div>
                </div>

            </header>
            {
                display && 
                <div className={c_styles.info} onMouseOver={()=>setDisplay(true)} onMouseLeave={()=>setDisplay(false)}> 
                    <div className={c_styles.shop_by}>
                        <div>Shop By:</div>
                        <div className={c_styles.category} onMouseOver={()=>{setBrands(false); setCategory(true)}}>Category</div>
                        <div className={c_styles.brands} onMouseOver={()=>{setBrands(true); setCategory(false)}}>Brand</div>
                    </div>

                    <div className={c_styles.information}>
                        {
                            brands && 
                            (value == 'MEN' || value == 'WOMEN' || value == 'KIDS' || value == 'BEAUTY') &&
                            (
                                <ul>
                                {
                                    Object.keys(unisexBrands).map((key) => ( 
                                        <li key={key}>{key}</li>
                                    ))
                                }
                                </ul>
                            )
                        }
                        {
                            category &&
                            (
                                <div>

                                </div>
                            )
                        }
                    </div>

                </div>
            }
        </>
    );
}