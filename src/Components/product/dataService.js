import axios from "axios";

export const getProductData={

    getProducts:(category)=>{
    
        const url =category != undefined ? '/'+category :""; 
        
        return new Promise((resolve)=>{
            axios.get(`https://gaming-shop-1496f-default-rtdb.firebaseio.com/products${url}.json`)
            .then(response => {

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
      
            const allProducts = (Object.entries(data)).map(item=>{
                const productArray = Object.entries(item[1]).map(item=>{
                    return{
                        ...item[1], 
                        productId:item[0],
                    }
                })
                return{
                    category:item[0],
                    products:productArray,
                }
            });
      
            return allProducts;
        }

        function convertCategoryOfProducts(data){
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
        return new Promise((resolve, reject) =>{
            axios.get(`https://gaming-shop-1496f-default-rtdb.firebaseio.com/products/${category}/${id}.json`)
            .then(response =>{
                resolve(response.data, response.data.comments);
            }).catch(err => console.log(err))
        })
    }
}
