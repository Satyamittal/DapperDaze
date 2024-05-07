
import { useEffect, useState } from 'react';
import { unisexBrands ,menCategory ,womenCategory,kidsCategory,kitchenBrands,kitchenCategory,beauty} from './c-component.data';

import c_styles from './c-component.module.css'
export function C_component()
{
    const [display,setDisplay] = useState(false) ;
    const [value, setValue] = useState('') ;
    const [brands, setBrands] = useState(false) ;
    const [category, setCategory] = useState(true) ;

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
                            <div className={c_styles.brandBox}>
                                {
                                    Object.keys(unisexBrands).map((key) => {
                                        
                                    return (
                                        <ul key={key}>
                                            <h5>{key}</h5>
                                            {
                                                unisexBrands[key].map((el,index)=><li>{el}</li>)
                                            }    
                                        </ul>
                                        
                                    )})
                                }
                            </div>
                        }
                        {
                            brands && 
                            value == 'HOME & KITCHEN' &&
                            <div className={c_styles.brandBox}>
                                {
                                    Object.keys(kitchenBrands).map((key) => {
                                        
                                    return (
                                        <ul key={key}>
                                            <h5>{key}</h5>
                                            {
                                                kitchenBrands[key].map((el,index)=><li>{el}</li>)
                                            }    
                                        </ul>
                                        
                                    )})
                                }
                            </div>
                        }
                        {
                            category && value == 'MEN' &&
                            <div className={c_styles.brandBox}>
                                {
                                    Object.keys(menCategory).map((key) => {
                                        
                                    return (
                                        <ul key={key}>
                                            <h5>{key}</h5>
                                            {
                                                menCategory[key].map((el,index)=><li>{el}</li>)
                                            }    
                                        </ul>
                                        
                                    )})
                                }
                            </div>
                        }
                        {
                            category && value == 'KIDS' &&
                            <div className={c_styles.brandBox}>
                                {
                                    Object.keys(kidsCategory).map((key) => {
                                        
                                    return (
                                        <ul key={key}>
                                            <h5>{key}</h5>
                                            {
                                                kidsCategory[key].map((el,index)=><li>{el}</li>)
                                            }    
                                        </ul>
                                        
                                    )})
                                }
                            </div>
                        }
                        {
                            category && value == 'WOMEN' &&
                            <div className={c_styles.brandBox}>
                                {
                                    Object.keys(womenCategory).map((key) => {
                                        
                                    return (
                                        <ul key={key}>
                                            <h5>{key}</h5>
                                            {
                                                womenCategory[key].map((el,index)=><li>{el}</li>)
                                            }    
                                        </ul>
                                        
                                    )})
                                }
                            </div>
                        }
                        {
                            category && value == 'HOME & KITCHEN' &&
                            <div className={c_styles.brandBox}>
                                {
                                    Object.keys(kitchenCategory).map((key) => {
                                        
                                    return (
                                        <ul key={key}>
                                            <h5>{key}</h5>
                                            {
                                                kitchenCategory[key].map((el,index)=><li>{el}</li>)
                                            }    
                                        </ul>
                                        
                                    )})
                                }
                            </div>
                        }
                        {
                            category && value == 'BEAUTY' &&
                            <div className={c_styles.brandBox}>
                                {
                                    Object.keys(beauty).map((key) => {
                                        
                                    return (
                                        <ul key={key}>
                                            <h5>{key}</h5>
                                            {
                                                beauty[key].map((el,index)=><li>{el}</li>)
                                            }    
                                        </ul>
                                        
                                    )})
                                }
                            </div>
                        }
                    </div>

                </div>
            }
        </>
    );
}