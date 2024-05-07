import card_styles from './d-compoent.module.css'

export function Product_card_component()
{
    // Variables = brandName, rating value, number of ratings , price ,image

    return (
        <>
            <div className={card_styles.card}>
                    <img className={card_styles.image} src='https://assets.ajio.com/medias/sys_master/root/20230412/RG07/6436c718711cf97ba71db2b1/-473Wx593H-410330539-02i-MODEL.jpg'></img>
                    <h5 className={card_styles.brandname}>BrandName</h5>

                <div className={card_styles.ratingAndPriceBox}>
                        
                        <span className={card_styles.ratingBox}>4.3  | 78</span>
                        
                        <span className={card_styles.priceBox}>
                            Price $199
                        </span>
                </div>

                <div className={card_styles.buttons}>
                    <button className={card_styles.wishlistButton}>
                            Wishlist
                    </button>
                    <button className={card_styles.cartButton}>
                            cart
                    </button>
                </div>

            </div>
        </>
    ) ;
}