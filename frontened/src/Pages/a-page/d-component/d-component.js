
import d_styles from './d-component.module.css' ;


const kidsGarments = [
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050424-Shopbyproduct-Z6-1-tee&tops.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050424-Shopbyproduct-Z6-2-denims&trousers.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050424-Shopbyproduct-Z6-3-clothingset.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050424-Shopbyproduct-Z6-4-dresses&frocks.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050424-Shopbyproduct-Z6-5-footwear.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050424-Shopbyproduct-Z6-7-toys.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050424-Shopbyproduct-Z6-8-innerwear&sleepwear.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050424-Shopbyproduct-Z6-9-characterMerch.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-180424-Shopbyproduct-Z6-10-rompers&onesies.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050424-Shopbyproduct-Z6-11-Leggings&Trackpants.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050424-Shopbyproduct-Z6-12-accessories.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-050424-Shopbyproduct-Z6-1-tee&tops.jpg'
  ];
  
export function D_component()
{
    return (
        <>
            <section className={d_styles.container}>
                <h1>Kiddie Wardrobe Essentials</h1>
                <div className={d_styles.kids_container}>
                    {
                        kidsGarments.map((element,index)=><img src={element} key={index} className={d_styles.card}></img>)
                    }
                </div>

            </section>
        </>
    );
}