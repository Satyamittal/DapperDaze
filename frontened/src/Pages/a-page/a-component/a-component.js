
import { useEffect } from 'react';
import a_styles from './a-component.module.css'

const menAddArray = [
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-01052024-MainBanner-Z1-p1-50-90.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-06052024-mainbanner-z1-p2-Levis-Arrow-min40.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-06052024-mainbanner-z1-p6-Arbunore-RedChief-flat60.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-06052024-mainbanner-z1-p3-Temspirit-Lc-under499.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-MHP-06052024-mainbanner-z1-p4-TOMMYHILFIGER-CK-UPTO50.jpg'
]

const womenAddArray = [
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-010524-TopBanner-1-golive.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-060524-MAINBANNER-Z1-P4-STYLI-KETCH-MIN60.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-060524-MAINBANNER-Z1-P6-NYRIKA-INDIEPICKS-MIN50.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-060524-MAINBANNER-Z1-P7-LAKME-BLUEHEAVEN-UPTO40.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-060524-MAINBANNER-Z1-P2-AVAASA-FUSION-40-70.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-060524-MAINBANNER-Z1-P3-ICHAA-SWEETDREAMS-UPTO70.jpg',
]

const cashBackAddArray = [
    'https://assets.ajio.com/cms/AJIO/WEB/01042024-mobikwik-1440x128.jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/1440X128%20Prime%20(1)111.png',
    'https://assets.ajio.com/cms/AJIO/WEB/1440X128%20(1)111.png',
    'https://assets.ajio.com/cms/AJIO/WEB/71x21-rev%20(9).jpg',
    'https://assets.ajio.com/cms/AJIO/WEB/1440x128-%20UHP%20web%20RRL_SBI.jpg'
]

export function A_component()
{
    return (
        <>
            <div className={a_styles.container}>
                {
                    menAddArray.map((element,index)=><img src={element} key={index} className={a_styles.card}></img>)
                }
            </div>
            <div className={a_styles.container}>
                {
                    womenAddArray.map((element,index)=><img src={element} key={index} className={a_styles.card}></img>)
                }
            </div>
            <div className={a_styles.container}>
                {
                    cashBackAddArray.map((element,index)=><img src={element} key={index} className={a_styles.cashCards}></img>)
                }
            </div>
        </>
    );
}