import { useState } from 'react';
import filterStyles from './a-component.module.css' ;

// Filter array
const filter =
{
    "type": ["Jeans", "Jeans & Jeggings", "Trousers & Pants"],
    "price": [
        "Below Rs.500",
        "Rs.500-1000",
        "Rs.1001-1500",
        "Rs.1501-2000",
        "Rs.2001-2500"
    ],
    "occasion": ["Active", "Casual", "CASUAL", "Evening", "Occasion", "Universal", "Work"] ,
    "rating": [
        "1",
        "2",
        "3",
        "4",
        "5",
    ],
    "discount": [
        "0-20% (4,709)",
        "21-30% (1,288)",
        "31-40% (2,112)",
        "41-50% (4,553)",
        "51-80% (7,895)",
        "81-100% (18)"
    ],
    "gender": ["Men", "Women", "Unisex"],

}
const brands = [
    {
        "A": ["Aazing London", "ADAMO LONDON", "AERO JEANS", "Aeropostale", "AJIO", "ALL SAINTS", "Allen Cooper", "ALLEN SOLLY", "ALTHEORY", "American Archer", "AMERICAN BULL", "AMERICAN CREW", "American Eagle", "American Eagle Outfitters", "AMON", "Amswan", "Andamen", "ANGELFAB", "Antony Morato", "ARBIA FUNKI", "ARMANI EXCHANGE", "ARROW", "Arrow Newyork", "Arrow Sports", "ASHTAG", "AXE"],
        "B": ["B WOLVES", "Badmaash", "BANANA CLUB", "BARCELONA", "Barrels And Oil", "BASICS", "Being Human", "BELLISKEY", "BEN MARTIN", "Bene Kleed", "Beverly Hills Polo Club", "BIG BANANA", "Big Hello - The Plus Life", "Black Coffee", "BLACKBERRYS", "Blue Brew", "BLUE BUDDHA", "Blue Saint", "Blunic", "BOLTS & BARRELS", "BONKERS CORNER", "BOSSINI", "Boycott", "BREAKPOINT", "British Club", "Broadstar", "BROOKS BROTHERS", "Bruun & Stengade", "BUAGI COLLECTION", "Buda Jeans Co", "Buffalo", "Bushirt"],
        "C": ["Calvin Klein Jeans", "Campus Sutra", "Canary London", "CANOE", "Cantabil", "Celio", "CHARLES TYRWHITT", "Chelsea King", "Chennis", "CHEROKEE", "CINOCCI", "CLUB YORK", "Cobb", "Code 61", "Colin's", "Colorplus", "COLT", "Comfits", "COOL COLORS", "COSMIC", "CP BRO", "CRIMSOUNE CLUB", "CROCODILE", "CROSS EDGE", "Crosshatch"],
        "D": ["DAGERRFLY", "Dais", "DANUZZZ", "DC Shoes", "DEEZENO", "Delexo", "DENIZEN FROM LEVIS", "DENNISLINGO PREMIUM ATTIRE", "DJ & C", "DNMX", "Dom & B", "DRAGON HILL", "Duck & Cover", "DUKE"],
        "E": ["ECKO", "ECKO UNLTD", "ED HARDY", "EDITLOOK", "EYEBOGLER"],
        "F": ["Fame forever by lifestyle", "FEVER", "Fineblu", "FIRST CLASS", "Flawless", "FMX", "Forca by Lifestyle", "Fox", "FUEL CLOTHING"],
        "G": ["G STAR RAW", "Gabardine", "GABON", "Gant", "GAP", "GAS", "Giordano", "GLOBAL REPUBLIC", "GLOBUS", "Greenfibre", "Grit & Flair", "GUESS"],
        "H": ["Hailys", "Hangup Trend", "Hardsoda", "HENCE", "HENRY & SMITH", "Hetvi Creation", "High Star", "HJ 53", "HJ HASASI", "HORSEfly", "Hubberholme"],
        "I": ["ICONIC", "Ikg Denim", "Impackt", "INDIAN TERRAIN", "INDIGO NATION", "INDO Cotton", "Instafab Plus", "IZOD", "iVOC"],
        "J": ["Jack & Jones", "JADE BLUE", "JB JUST BLACK", "JEAN CAFÉ", "JOHN PLAYERS JEANS", "JOHN PLAYERS SELECT", "John Pride", "JP JEANS"],
        "K": ["KENNETH COLE", "KEREBU", "Ketch", "Killer", "KNOBB JEANS", "Koton", "KOTTY", "KULTPRIT", "Kz07"],
        "L": ["La Martina", "LC Waikiki", "Lee", "Lee Cooper", "LEVI'S", "LEVIS", "Lindbergh", "LLAK JEANS", "Locomotive", "LOUIS PHILIPPE", "LP JEANS", "LTB", "Lyle & Scott"],
        "M": ["Mark of Saint", "Marks & Spencer", "Masterly Weft", "Matinique", "Mavi", "MAX", "MEGHZ", "Metal21", "MONKS OF METHOD", "MONTE CARLO", "Mozzo", "MR.BUTTON", "MUFTI", "MUJI"],
        "N": ["niftians", "NOBIY", "Noble Monk", "NUMERO UNO"],
        "O": ["OLD GREY", "ONLY & SONS", "ORIJEAN", "Osadia", "OVS", "Owen Hart", "OXEMBERG"],
        "P": ["Paris Hamilton", "PARK AVENUE", "PARX", "PAUL STREET", "PEOPLE", "PEPE", "Pepe Jeans", "PEPLOS", "PIAZZA ITALIA", "Poison", "Produkt By Jack & Jones", "ProEarth", "Puri Goswami"],
        "Q": ["QUIKSILVER"],
        "R": ["R&B", "Raa Jeans", "RAGZO", "Rare Rabbit", "RAYMOND", "REA-LIZE", "Realm", "RECORRER", "RED CHIEF", "RED TAPE", "REPLAY", "Revs", "RICHLOOK", "RIG BONE", "RJ Denim", "ROCKING SWAMY", "Rodamo", "ROOKIES", "ROXTAR", "Rue Collection", "Rug Woods", "Ruggers"],
        "S": ["Santonio", "SCOTCH & SODA", "SELECTED", "SIMON CARTER", "SIN", "SKC", "SNITCH", "SOLLY JEANS", "SOULSTAR", "SPYKAR", "Starter", "Steamz", "STUDIO NEXX", "Style Quotient", "Styli", "STYLOPHILE", "Success", "SUNNEX", "SUPERDRY"],
        "T": ["TAHVO", "Tar 'n' Kash", "THE BEAR HOUSE", "THE COLLECTION", "The Indian Garage Co", "Third Quadrant", "THOMAS SCOTT", "Tim Paris", "Tistabene", "TOM HIDDLE", "Tom Tailor", "TOMMY HILFIGER", "TOMVOLF", "TRENDYOL", "TRUE COLORS OF INDIA", "TRUE RELIGION", "TRUE SPIRIT", "TRUSER", "TURMS", "TURTLE", "tQs"],
        "U": ["U.S. Polo Assn.", "UNITED COLORS OF BENETTON", "UNSIZED", "UrbanMark", "URBANO FASHION", "URBANO PLUS", "US POLO ASSN."],
        "V": ["V-VIVID WAVE", "VAN HEUSEN", "Vastrado", "VEIRDO", "VHSPORT", "VIOSFAIRA", "VOI JEANS", "VOLUME ZERO", "Vooter", "VUDU"],
        "W": ["WAIMEA", "WRANGLER"],
        "X": ["XEE", "Xint", "XTJ"],
        "Y": ["YOUSTA", "YOVISH"],
        "Z": ["ZORRILLO", "ZUSH"]
    }
]


export function Filter_column()
{
    const [FilterBox ,openFilterBox] = useState(false) ;
    const [filterValue ,setFilterValue] = useState('') ;
    // const [selectAll, setSelectAll] = useState(false) ;

    function selectAll()
    {
        var checkboxes = document.querySelectorAll(`.${filterValue}`);
        
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    }

    function clearAll()
    {
        var checkboxes = document.querySelectorAll(`.${filterValue}`);
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }

    return (
        <>
            <div className={filterStyles.container}>
                <h4>Filters</h4>

                <ul>
                    {
                        Object.entries(filter).map(([key, value]) => {
                        return (
                            <div key={key}>
                              <h5 onClick={()=>{openFilterBox(true); setFilterValue(key)}}>{`${key.charAt(0).toUpperCase()}${key.slice(1)}`}</h5>
                            </div>
                        );
                        })
                    }
                </ul>
            </div>
            {
                FilterBox && 
                <div className={filterStyles.filterInfo}>
                    <div className={filterStyles.filterInfoHeader}>
                            <span>
                                Choose {`${filterValue.charAt(0).toUpperCase()}${filterValue.slice(1)}`}
                            </span>
                            <button>&times;</button>
                    </div>
                    <div className={filterStyles.filterInfoFooter}>
                        {
                            filter[filterValue].map((el,index)=>(
                                <span key={index} >
                                    <input type="checkbox" id={el} name={el} className={filterValue}/>
                                    <label for={el}>{el}</label> 
                                </span>
                            ))
                        }
                    </div>
                    <div className={filterStyles.bottomFooter}>
                        <a onClick={selectAll}>Select All</a>
                        <a onClick={clearAll}>Clear All</a>
                    </div>
                </div>
            }
        </>
    );
}