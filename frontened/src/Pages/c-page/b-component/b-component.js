
import { Product_card_component } from '../d-component/d-component';
import product from './b-component.module.css' ;

export function Product_column()
{
    return (
        <>
            <div className={product.container}>
                <div className={product.infoBox}>
                    
                </div>

                <div className={product.images}>
                    <Product_card_component/>
                    <Product_card_component/>
                    <Product_card_component/>
                    <Product_card_component/>
                    <Product_card_component/>
                    <Product_card_component/>
                    <Product_card_component/>
                    <Product_card_component/>
                    <Product_card_component/>
                    <Product_card_component/>
                </div>
            </div>
        </>
    );
}