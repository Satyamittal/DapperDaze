
import { C_component } from '../a-page/c-component/c-component';
import { Filter_column } from './a-component/a-component';
import { Product_column } from './b-component/b-component';
import { Review_column } from './c-component/c-component';
import productStyles from './c-page.module.css' ;

export function Product_page()
{
    return (
        <>
            <C_component/>
            <div className={productStyles.container}>
                <Filter_column/> 
                <Product_column/>
                <Review_column/>
            </div>
            
        </>
    ) ;
}