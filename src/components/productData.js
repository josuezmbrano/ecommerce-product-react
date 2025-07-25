//////////  SNEAKERS 1   /////////
import Skatesh1 from '../assets/shoes/sneaker-1/skate-shoes-1.png'
import Skatesh2 from '../assets/shoes/sneaker-1/skate-shoes-2.png'
import Skatesh3 from '../assets/shoes/sneaker-1/skate-shoes-3.png'
import Skatesh4 from '../assets/shoes/sneaker-1/skate-shoes-4.png'
//////////  SNEAKERS 2   /////////
import Lifestylesh1 from '../assets/shoes/sneaker-2/lifestyle-shoes-1.png'
import Lifestylesh2 from '../assets/shoes/sneaker-2/lifestyle-shoes-2.png'
import Lifestylesh3 from '../assets/shoes/sneaker-2/lifestyle-shoes-3.png'
import Lifestylesh4 from '../assets/shoes/sneaker-2/lifestyle-shoes-4.png'
//////////  SNEAKERS 1   /////////
import Hightop1 from '../assets/shoes/sneaker-3/high-top-1.png'
import Hightop2 from '../assets/shoes/sneaker-3/high-top-2.png'
import Hightop3 from '../assets/shoes/sneaker-3/high-top-3.png'
import Hightop4 from '../assets/shoes/sneaker-3/high-top-4.png'
//////////  SNEAKERS 1   /////////
import Running1 from '../assets/shoes/sneaker-4/running-1.png'
import Running2 from '../assets/shoes/sneaker-4/running-2.png'
import Running3 from '../assets/shoes/sneaker-4/running-3.png'
import Running4 from '../assets/shoes/sneaker-4/running-4.png'
//////////  SNEAKERS 1   /////////
import Limiteded1 from '../assets/shoes/sneaker-5/limited-edition-1.png'
import Limiteded2 from '../assets/shoes/sneaker-5/limited-edition-2.png'
import Limiteded3 from '../assets/shoes/sneaker-5/limited-edition-3.png'
import Limiteded4 from '../assets/shoes/sneaker-5/limited-edition-4.png'
//////////  SNEAKERS 1   /////////
import Sneak1 from '../assets/shoes/sneaker-6/sneak-1.png'
import Sneak2 from '../assets/shoes/sneaker-6/sneak-2.png'
import Sneak3 from '../assets/shoes/sneaker-6/sneak-3.png'
import Sneak4 from '../assets/shoes/sneaker-6/sneak-4.png'
//////////  SNEAKERS 1   /////////
import Airforce1 from '../assets/shoes/sneaker-7/air-force-1.png'
import Airforce2 from '../assets/shoes/sneaker-7/air-force-2.png'
import Airforce3 from '../assets/shoes/sneaker-7/air-force-3.png'
import Airforce4 from '../assets/shoes/sneaker-7/air-force-4.png'
//////////  SNEAKERS 1   /////////
import Nikeair1 from '../assets/shoes/sneaker-8/nike-air-1.png'
import Nikeair2 from '../assets/shoes/sneaker-8/nike-air-2.png'
import Nikeair3 from '../assets/shoes/sneaker-8/nike-air-3.png'
import Nikeair4 from '../assets/shoes/sneaker-8/nike-air-4.png'
//////////  SNEAKERS 1   /////////
import Kobe1 from '../assets/shoes/sneaker-9/kobe-1.png'
import Kobe2 from '../assets/shoes/sneaker-9/kobe-2.png'
import Kobe3 from '../assets/shoes/sneaker-9/kobe-3.png'
import Kobe4 from '../assets/shoes/sneaker-9/kobe-4.png'


const products = [
    {
        id: 1,
        name: "Nike Dunk Low Retro",
        type: "lifestyle sneaker retro dunk",
        description: "The Dunk Low takes its iconic color blocking to the next level, now featuring premium, supple materials and plush, responsive padding. This thoughtful combination delivers a truly game-changing level of comfort that's engineered to endure, ensuring a smooth, cushioned feel with every step, from dawn till dusk.",
        finalprice: 220.00,
        discount: 12,
        totalprice: 250.52,
        photo: [
            { image: Skatesh1, id: 1 },
            { image: Skatesh2, id: 2 },
            { image: Skatesh3, id: 3 },
            { image: Skatesh4, id: 4 }
        ],
        thumbnail: [
            { image: Skatesh1, id: 1 },
            { image: Skatesh2, id: 2 },
            { image: Skatesh3, id: 3 },
            { image: Skatesh4, id: 4 }
        ]
    },
    {
        id: 2,
        name: "Nike Field General Blue Suede",
        type: "lifestyle sneaker with retro / vintage appeal.",
        description: "The Field General makes a triumphant return, shedding its gritty football roots to shake up the modern sneaker scene. Drenched entirely in rich blue suede, it effortlessly marries a sleek, low-profile silhouette with a distinctively nubby Waffle sole. This combination perfectly recreates that coveted vintage gridiron look.",
        finalprice: 212.50,
        discount: 15,
        totalprice: 250.00,
        photo: [
            { image: Lifestylesh1, id: 1 },
            { image: Lifestylesh2, id: 2 },
            { image: Lifestylesh3, id: 3 },
            { image: Lifestylesh4, id: 4 }
        ],
        thumbnail: [
            { image: Lifestylesh1, id: 1 },
            { image: Lifestylesh2, id: 2 },
            { image: Lifestylesh3, id: 3 },
            { image: Lifestylesh4, id: 4 }
        ]
    },
    {
        id: 3,
        name: "Nike Zoom Vomero 5",
        type: "running shoe / lifestyle sneaker",
        description: "Carve a new lane for yourself in the Zoom Vomero 5—your ultimate go-to for unparalleled depth, lasting durability, and effortless styling. It's engineered to provide robust support and a comfortable fit that stands the test of time, seamlessly integrating into any wardrobe for a look that's both modern and enduring.",
        finalprice: 68.00,
        discount: 50,
        totalprice: 136.00,
        photo: [
            { image: Hightop1, id: 1 },
            { image: Hightop2, id: 2 },
            { image: Hightop3, id: 3 },
            { image: Hightop4, id: 4 }
        ],
        thumbnail: [
            { image: Hightop1, id: 1 },
            { image: Hightop2, id: 2 },
            { image: Hightop3, id: 3 },
            { image: Hightop4, id: 4 }
        ]
    },
    {
        id: 4,
        name: "Nike Free Metcon 6",
        type: "Cross-Training / Training",
        description: "The Free Metcon 6 truly expands your world of workout possibilities. We've meticulously engineered our most adaptable trainer by adding even more dynamic forefoot flexibility, allowing for natural, uninhibited movement. Additionally, we've reinforced the heel with extra foam, providing enhanced stability and cushioning to support every lift, jump, and sprint during your most demanding sessions.",
        finalprice: 118.75,
        discount: 5,
        totalprice: 125.00,
        photo: [
            { image: Running1, id: 1 },
            { image: Running2, id: 2 },
            { image: Running3, id: 3 },
            { image: Running4, id: 4 }
        ],
        thumbnail: [
            { image: Running1, id: 1 },
            { image: Running2, id: 2 },
            { image: Running3, id: 3 },
            { image: Running4, id: 4 }
        ]
    },
    {
        id: 5,
        name: "Nike x Hyperice Hyperboot",
        type: "recovery device with integrated technology",
        description: "Optimize your warm-up and recovery routines with the Hyperboot, a Nike x Hyperice collaboration. The wearable technology offers heat and Normatec dynamic air compression for feet and ankles that you can customize on the go.",
        finalprice: 719.20,
        discount: 20,
        totalprice: 899.00,
        photo: [
            { image: Limiteded1, id: 1 },
            { image: Limiteded2, id: 2 },
            { image: Limiteded3, id: 3 },
            { image: Limiteded4, id: 4 }
        ],
        thumbnail: [
            { image: Limiteded1, id: 1 },
            { image: Limiteded2, id: 2 },
            { image: Limiteded3, id: 3 },
            { image: Limiteded4, id: 4 }
        ]
    },
    {
        id: 6,
        name: "Dunk Low Green Curry and White",
        type: "lifestyle sneaker",
        description: "Crisp and classic, these Dunk Lows seamlessly blend fresh, diverse fabrics to forge a textural masterpiece that's effortlessly easy to style. Designed for all-day wear, they feature a plush, padded, low-cut collar and lightweight, responsive cushioning that work together to keep you comfortable underfoot.",
        finalprice: 2099.00,
        discount: 30,
        totalprice: 2999.00,
        photo: [
            { image: Sneak1, id: 1 },
            { image: Sneak2, id: 2 },
            { image: Sneak3, id: 3 },
            { image: Sneak4, id: 4 }
        ],
        thumbnail: [
            { image: Sneak1, id: 1 },
            { image: Sneak2, id: 2 },
            { image: Sneak3, id: 3 },
            { image: Sneak4, id: 4}
        ]
    },
    {
        id: 7,
        name: "Air Force 1 '07 Black and Off Noir",
        type: "basketball shoe/urban fashion icon",
        description: "The legendary AF1 receives a luxurious update, now featuring plush pony hair. This soft, hairy leather instantly adds remarkable depth and tactile texture to its refreshed design. It flawlessly creates a bold, new expression of the original '82 basketball model, masterfully transformed into an unmistakable urban fashion icon for today.",
        finalprice: 2634.15,
        discount: 15,
        totalprice: 3099.00,
        photo: [
            { image: Airforce1, id: 1 },
            { image: Airforce2, id: 2 },
            { image: Airforce3, id: 3 },
            { image: Airforce4, id: 4 }
        ],
        thumbnail: [
            { image: Airforce1, id: 1 },
            { image: Airforce2, id: 2 },
            { image: Airforce3, id: 3 },
            { image: Airforce4, id: 4 }
        ]
    },
    {
        id: 8,
        name: "Nike SB Air Max 95 Summit",
        type: "Lifestyle sneakers / running shoes",
        description: "The Air Max 95 perfectly captured the aesthetic of its era, distinguished by its skeleton-inspired lines, innovative synthetic materials, and bold, striking neon green accents. This iconic design pushed boundaries, establishing the shoe as a true standout that resonated deeply with the fashion and culture of the time.",
        finalprice: 2999.25,
        discount: 25,
        totalprice: 3999.00,
        photo: [
            { image: Nikeair1, id: 1 },
            { image: Nikeair2, id: 2 },
            { image: Nikeair3, id: 3 },
            { image: Nikeair4, id: 4 }
        ],
        thumbnail: [
            { image: Nikeair1, id: 1 },
            { image: Nikeair2, id: 2 },
            { image: Nikeair3, id: 3 },
            { image: Nikeair4, id: 4 }
        ]
    },
    {
        id: 9,
        name: "Kobe 6 Protro Total Orange",
        type: "Performance Basketball Shoe.",
        description: "With a low-cut design that's sleeker and faster than ever, the Protro model boasts responsive foam, a dynamic forefoot Air Zoom Turbo unit, and low-profile traction. This combination delivers an enhanced court feel, allowing for unparalleled quickness and agility during intense play.",
        finalprice: 2459.40,
        discount: 40,
        totalprice: 4099.00,
        photo: [
            { image: Kobe1, id: 1 },
            { image: Kobe2, id: 2 },
            { image: Kobe3, id: 3 },
            { image: Kobe4, id: 4 }
        ],
        thumbnail: [
            { image: Kobe1, id: 1 },
            { image: Kobe2, id: 2 },
            { image: Kobe3, id: 3 },
            { image: Kobe4, id: 4 }
        ]
    }
]

export { products }