
import b_styles from './b-component.module.css'

export function B_component()
{
    return (
        <>
            <section className={b_styles.container}>
                <h1>Sunshine Brands</h1>

                <div className={b_styles.card_container}>
                    {/* Put array of cards here */}
                    <div className={b_styles.card}>
                        <img 
                        src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-05042024-Z5-sunshinebrands-nike-upto45.jpg'
                        className={b_styles.brand_image}
                        ></img>
                    </div>

                    <div className={b_styles.card}>
                        <img 
                        src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-05042024-Z5-sunshinebrands-puma-3060.jpg'
                        className={b_styles.brand_image}
                        ></img>
                    </div>

                    <div className={b_styles.card}>
                        <img 
                        src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-05042024-Z5-sunshinebrands-uspa-flat40.jpg'
                        className={b_styles.brand_image}
                        ></img>
                    </div>

                    <div className={b_styles.card}>
                        <img 
                        src='https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-05042024-Z5-sunshinebrands-superdry-3050.jpg'
                        className={b_styles.brand_image}
                        ></img>
                    </div>


                </div>
            </section>
        </>
    );
}