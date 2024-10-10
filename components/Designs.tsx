import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =[
    {
        id:0,
        title:"Diamond Necklace",
        desc:"This is a beautiful silver necklace and earring set, featuring a delicate floral design with sparkling stones. The necklace is a dainty chain with intricate details and a small pendant, while the earrings are simple yet elegant. The set would be perfect for a special occasion or to add a touch of glamour to any outfit",
        img: "/2_necklace.jpg",
        tags:["silver"],
    },

    {
        id:1,
        title:"Diamond Necklace",
        desc:"The necklace in this set is a stunning, high-end design featuring a symmetrical arrangement of brilliant-cut stones that form a radiant chain. At the center, a larger flower-shaped cluster adds a focal point, from which a teardrop-shaped gem dangles elegantly. The intricate detailing and luxurious shine make this piece a true statement necklace, perfect for formal or special occasions",
        img:"/6_necklace.jpg",
        tags:["silver"],
    },

    {
        id:2,
        title:"Diamond Necklace",
        desc:"This elegant necklace showcases a refined V-shaped design, composed of meticulously arranged square-cut stones that create a seamless, glittering pattern. The symmetrical layout enhances its sophisticated appeal, making it perfect for formal occasions or adding a touch of luxury to any outfit. The necklace exudes timeless charm, combining simplicity with a subtle, radiant sparkle that draws attention to its craftsmanship",
        img:"/9_necklace.jpg",
        tags:["silver"],
    },

    {
        id:3,
        title:"Diamond Necklace",
        desc:"This is a beautiful silver necklace and earring set, with a delicate design of small sparkling stones. It's perfect for a special occasion or to add a touch of glamour to any outfit. The necklace is made up of a chain of small stones with a larger pendant in the center. The earrings are simple but elegant, with a cluster of stones cascading down. This set would look beautiful with a simple dress or a more formal outfit",
        img:"/11_necklace.jpg",
        tags:["silver"],

    },

    {
        id:4,
        title:"Diamond Necklace",
        desc:"This is a beautiful silver necklace and earring set with teardrop-shaped cubic zirconia stones. The necklace is a delicate, elegant piece, with the stones set in a v-shaped design. The earrings are simple and understated, with a single teardrop-shaped stone each. The set would be perfect for a special occasion, or for everyday wear",
        img:"/14_necklace.jpg",
        tags:["silver"],
    },

    {
        id:5,
        title:"Diamond Necklace",
        desc:"This is a beautiful silver necklace and earring set, featuring a delicate floral design with sparkling stones. The necklace is a dainty chain with intricate details and a small pendant, while the earrings are simple yet elegant. The set would be perfect for a special occasion or to add a touch of glamour to any outfit",
        img:"/17_necklace.jpg",  
        tags:["silver"], 
    },

    {
        id:6,
        title:"Diamond Necklace",
        desc:"This is a beautiful silver necklace and earring set, featuring a delicate floral design with sparkling stones. The necklace is a dainty chain with intricate details and a small pendant, while the earrings are simple yet elegant. The set would be perfect for a special occasion or to add a touch of glamour to any outfit",
        img:"/20_necklace.jpg",
        tags:["silver"],
    },

    {
        id:7,
        title:"Diamond Necklace",
        desc:"This is a beautiful silver necklace and earring set, featuring a delicate floral design with sparkling stones. The necklace is a dainty chain with intricate details and a small pendant, while the earrings are simple yet elegant. The set would be perfect for a special occasion or to add a touch of glamour to any outfit",
        img:"/23_necklace.jpg",
        tags:["silver"],
    },

    {
        id:8,
        title:"Diamond Necklace",
        desc:"This is a beautiful silver necklace and earring set, featuring a delicate floral design with sparkling stones. The necklace is a dainty chain with intricate details and a small pendant, while the earrings are simple yet elegant. The set would be perfect for a special occasion or to add a touch of glamour to any outfit",
        img:"/24_necklace.jpg",
        tags:["silver"],
    },
];


const Designs = () => {
  return (
    <div id='designs' className='container pt-32'>
        <Heading  title='My Designs'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 :grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key= {el.id}
            id={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}/>))}
        </div>
    </div>
  )
}

export default Designs
