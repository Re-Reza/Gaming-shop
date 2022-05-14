import axios from "axios";
let data={
    products:[]
    // products:[{
    //     id:"1",
    //     title: "Acer Nitro 5 AN515-55-53E5 Gaming Laptop",
    //     price: "789",
    //     picture: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg",
    //     description: `Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6 FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard`,
    // },
    // {
    //     id:"2",
    //     title: "ASUS TUF Gaming F17 Gaming Laptop",
    //     price: "1199.99",
    //     picture: "https://m.media-amazon.com/images/I/81MjmPuOr2L._AC_SL1500_.jpg",
    //     description: `17.3” 144Hz Full HD IPS-Type, Intel Core i7-11800H Processor, GeForce RTX 3050 Ti, 16GB DDR4, 512GB PCIe SSD, Gigabit Wi-Fi 6, Windows 10 Home, TUF706HEB-DB74`
    // },
    // {
    //     id:"3",
    //     title: "ASUS ROG Strix G15 (2021)",
    //     price: "1129.00",
    //     picture: "https://m.media-amazon.com/images/I/81fZmxBbQgL._AC_SL1500_.jpg",
    //     description: `Laptop, 15.6” 144Hz IPS Type FHD Display, NVIDIA GeForce RTX 3050, AMD Ryzen 7 4800H, 8GB DDR4, 512GB PCIe NVMe SSD, RGB Keyboard, Windows 10, G513IC-EB73`
    // },
    // {
    //     id:"4",
    //     title: "MSI Stealth 15M Gaming",
    //     price: "1297.07",
    //     picture: "https://m.media-amazon.com/images/I/71p3Ygm14wL._AC_SL1500_.jpg",
    //     description: `15.6" 144Hz FHD 1080p Display, Intel Core i7-11375H, NVIDIA GeForce RTX 3060, 16GB, 512GB SSD, Thunderbolt 4, WiFi 6, Win10, Carbon Gray (A11UEK-009) `
    // },
    // {
    //     id:"5",
    //     title: "Razer Blade 15",
    //     price: "1129.00",
    //     picture: "https://m.media-amazon.com/images/I/61gA6Girg6L._AC_SL1500_.jpg",
    //     description: `NVIDIA GeForce RTX 3070 Ti - 12th Gen Intel 14-Core i7 CPU - 15.6” FHD 360Hz - 16GB DDR5 RAM - 1TB PCIe SSD - Windows 11 - CNC Aluminum - Chroma RGB - Thunderbolt 4`
    // },
    // {
    //     id:"6",
    //     title: "MSI Crosshair15",
    //     price: "1249.89 ",
    //     picture: "https://m.media-amazon.com/images/I/41DUv6ON0yL._AC_SL1200_.jpg",
    //     description: `15.6" 144Hz 3ms FHD Gaming Laptop Intel Core i7-11800H RTX3060 16GB 512GB NVMe SSD Win10`
    // }]
}

export const getProductData={

    getProducts:(category)=>{
    
        const url =category != undefined ? '/'+category :""; 
        
        return new Promise((resolve)=>{
            console.log(`https://gaming-shop-1496f-default-rtdb.firebaseio.com/products${url}.json`)
            axios.get(`https://gaming-shop-1496f-default-rtdb.firebaseio.com/products${url}.json`)
            .then(response => {
                console.log(response.data)
                if(category == undefined || category==null)
                {
                    resolve(convertAllProducts(response.data));
                }
                else{
                    resolve( convertCategoryOfProducts(response.data) );
                }
            })
        });

        function convertAllProducts(data) {
            console.log(Object.entries(data));
            const allProducts = (Object.entries(data)).map(item=>{
                const productArray = Object.entries(item[1]).map(item=>{
                    return{
                        ...item[1], 
                        productId:item[0],
                    }
                })
                console.log(productArray);
                return{
                    category:item[0],
                    products:productArray,
                }
            });
            console.log(allProducts);
            return allProducts;
        }

        function convertCategoryOfProducts(data){
            console.log(Object.entries(data));
            const productsArray =  Object.entries(data).map(item=>{
                return{
                    productId:item[0],
                    ...item[1],
                }
            });
            return {
                category:category,
                products:productsArray,
            }
        }
    },

    getProductById:(category,id)=>{
        console.log(id)
        return new Promise((resolve, reject) =>{
            console.log(`https://gaming-shop-1496f-default-rtdb.firebaseio.com/products/${category}/${id}.json`);
            axios.get(`https://gaming-shop-1496f-default-rtdb.firebaseio.com/products/${category}/${id}.json`)
            .then(response =>{
                console.log(response.data);
                resolve(response.data, response.data.comments);
            }).catch(err => console.log(err))
        })
    }
}

// export default getProductData;