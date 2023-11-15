const Products = [
    {id: 0,name:"Vans Knu Skool", category:"vans",description:"Las Vans Old Skool son zapatillas clásicas conocidas por su distintiva franja lateral y diseño atemporal. Fabricadas con materiales duraderos, ofrecen comodidad y versatilidad, siendo populares tanto en la cultura del skate como en la moda urbana.",price: 80000, pictureUrl:"../src/images/vans-knu-skool.jpg", stock: 15},
    {id: 1,name:"Nike Jordan 1 High", category:"nike",description:"Las Nike Air Jordan 1 High son icónicas zapatillas de baloncesto, famosas por su diseño de alta calidad. Con su característico logo de alas y el Swoosh de Nike, estas zapatillas han transcendido su origen deportivo para convertirse en un ícono de la cultura urbana y de la moda callejera",price: 140000, pictureUrl:"../src/images/jordan-1.jpg", stock: 6},
    {id: 2,name:"Adidas Campus 00s", category:"adidas",description:"Las Adidas Campus 80s son zapatillas de estilo retro con una construcción de alta calidad. Su diseño versátil y detalles emblemáticos las hacen ideales para un estilo casual y cómodo.",price:80000, pictureUrl:"../src/images/adidas-campus-00s.jpg", stock: 4 },
    {id: 3,name:"Nike SB Dunk Low", category:"nike",description:"Las Nike Dunk Low son zapatillas clásicas conocidas por su diseño versátil y colores vibrantes. Han sido populares tanto en la cancha como en la cultura urbana. Su perfil bajo y variedad de colaboraciones hacen que sean codiciadas por los entusiastas de las zapatillas",price: 135000, pictureUrl:"../src/images/nike-dunk.jpg", stock: 9 },
    {id: 4,name:"Adidas Ozweego", category:"adidas",description:"Las Adidas Ozweego son zapatillas modernas y futuristas conocidas por su diseño distintivo, con una parte superior transpirable, suela gruesa de EVA y detalles de capas superpuestas. Ideales para quienes buscan estilo y comodidad en un calzado urbano.",price: 105000 , pictureUrl:"../src/images/adidas-ozweego.jpg", stock: 13 },
    {id: 5,name:"Adidas Forum", category:"adidas",description:"Las Adidas Forum son zapatillas clásicas y atemporales que combinan estilo retro con detalles modernos. Con su característica correa en el tobillo y diseño de baloncesto, las Forum ofrecen un toque vintage a la moda urbana. Destacan por su construcción duradera, suela robusta y el icónico logotipo de las tres franjas. Perfectas para quienes buscan un calzado que fusiona herencia y moda contemporánea.",price:90000 , pictureUrl:"../src/images/adidas-forum.jpg", stock: 15},
    {id: 6,name:"Puma Suede", category:"puma",description:"Las Puma Suede son zapatillas icónicas conocidas por su diseño clásico y atemporal. Fabricadas con una parte superior de ante suave, estas zapatillas ofrecen un estilo elegante y versátil. Con su silueta baja y suela de goma, las Puma Suede son ideales para el uso diario, brindando comodidad y un toque retro a cualquier conjunto. Estas zapatillas han trascendido su origen deportivo para convertirse en un elemento de moda urbana apreciado por su simplicidad y sofisticación.",price: 65000 , pictureUrl:"../src/images/puma-suede.jpg", stock: 20 },
    {id: 7,name:"Vans Era", category:"vans",description:"Las Vans Era son zapatillas clásicas y casuales que se destacan por su diseño simple y versátil. Con una silueta baja y una parte superior resistente, las Vans Era son conocidas por su comodidad y durabilidad. Estas zapatillas son apreciadas por su estilo skate, con detalles como la suela waffle distintiva de Vans y el logotipo lateral. Perfectas para un look relajado y urbano, las Vans Era han mantenido su popularidad a lo largo del tiempo, convirtiéndose en un elemento básico en la moda streetwear.",price:45000 , pictureUrl:"../src/images/vans-era.jpg", stock: 18 },
    {id: 8,name:"Nike Air Force 1", category:"nike",description:"Las Nike Air Force 1 son zapatillas clásicas y atemporales que han dejado una marca duradera en la moda urbana desde su debut en 1982. Con su diseño icónico, estas zapatillas ofrecen estilo y versatilidad, convirtiéndose en un referente esencial en la cultura sneaker.",price: 125000, pictureUrl:"../src/images/nike-af1.jpg", stock: 7 },
    {id: 9,name:"Puma Slipstream", category:"puma",description:"Las Puma Slipstream son zapatillas de estilo retro conocidas por su diseño llamativo y atrevido. Con una parte superior de cuero y detalles audaces, estas zapatillas capturan la esencia de la moda de los años 80. Ideales para quienes buscan un toque retro en su estilo, las Puma Slipstream fusionan la herencia deportiva de Puma con elementos de moda urbana.",price: 85000, pictureUrl:"../src/images/puma-slipstream.jpg", stock: 14},
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if(Products.length > 0){
                resolve(Products)
        }else{
            reject("no se encontraron productos")
        }
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const product = Products.find( product => product.id == id); 
        setTimeout( () => { 
            if(!product) {
                reject("no se encontro el producto solicitado")
                console.log(product)
            }
            else {
                resolve(product);
            }
        }, 1000 )
    }) ;
};