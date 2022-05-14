import axios from "axios";
import React, {useState, useEffect} from "react";
import {LoadingSendMessage} from "../pages";

export function AdminPage()
{
    const [inputState, setInputState] = useState({
        title:"",
        description:"",
        price:"",
        pictureUrl:"",
        discount:0,
        productCategory:"laptop",
    });

    const[loading, setLoading] = useState(false);

    useEffect(()=>{
        document.title = "Admin page";
    }, [])

    function changeInputHandler(objectKey, event){
        setInputState(previousState=>{
            return{
                ...previousState,
                [objectKey]: event.target.value,
            }
        })
    }

    //فرم ولیدیش انجام شود
    function sendToServer(event){
        event.preventDefault();
        const {productCategory, ...product} = inputState;
        console.log(product);
        setLoading(true);
        axios.post(`https://gaming-shop-1496f-default-rtdb.firebaseio.com/products/${inputState.productCategory}.json`, product)
        .then(response =>{
            console.log(response);
            setLoading(false);
        })
        .catch(error =>console.log(error))
    }
    
    return (
        <form className="container-md d-flex mb-5 justify-content-center mt-5"> 
            <div className="row justify-content-center w-75">
                <div className="col-7">
                    <label htmlFor="product-title" className="form-label">product title</label>
                    <input onChange={changeInputHandler.bind(this, "title")} type="text" className="form-control" id="product-title" placeholder="title" />
                </div>
                <div className="col-7 mt-3">
                    <label htmlFor="adminPage-productCategory">select category of product:</label>
                    <select defaultValue="laptop" onChange={changeInputHandler.bind(this, "productCategory")} id="adminPage-productCategory" className="form-select">
                        <option  value="laptop" >laptop</option>
                        <option value="keyboard" >keyboard</option>
                        <option value="mouse" >mouse</option>
                        <option value="monitor" >monitor</option>
                        <option value="chair" >chair</option>
                        <option value="headphone" >headphone</option>
                    </select>
                </div>
                <div className="col-7 mt-3">
                    <label htmlFor="description" className="form-label">description</label>
                    <input onChange={changeInputHandler.bind(this, "description")} type="text" className="form-control" id="description" placeholder="add description" />
                </div>
                <div className="col-7 mt-3">
                    <label htmlFor="price" className="form-label">price</label>
                    <input onChange={changeInputHandler.bind(this, "price")} type="number" className="form-control" id="price" placeholder="$" />
                </div>
                <div className="col-7 mt-3">
                    <label>discount</label>
                    <input onChange={changeInputHandler.bind(this, "discount")} type="number" className="form-control" id="discount" placeholder="$"/>
                </div>
                <div className="col-7 mt-3">
                    <label htmlFor="picture-url" className="form-label">picture url</label>
                    <input onChange={changeInputHandler.bind(this, "pictureUrl")} type="text" className="form-control" id="picture-url" placeholder="https://" />
                </div>

                <div className="col-7 mt-4">
                    <div className="d-flex">
                        <button onClick={sendToServer} type="submit" className="btn btn-success">add product</button>
                        {loading? <LoadingSendMessage/>:<></>}
                    </div>
                </div>

            </div>
        </form>
    )
}

// export default AdminPage;

// const data={
//     products:[{
//         id:"1",
//         title: "Acer Nitro 5 AN515-55-53E5 Gaming Laptop",
//         price: "789",
//         picture: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg",
//         description: `Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6 FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard`,
//     },
//     {
//         id:"2",
//         title: "ASUS TUF Gaming F17 Gaming Laptop",
//         price: "1199.99",
//         picture: "https://m.media-amazon.com/images/I/81MjmPuOr2L._AC_SL1500_.jpg",
//         description: `17.3” 144Hz Full HD IPS-Type, Intel Core i7-11800H Processor, GeForce RTX 3050 Ti, 16GB DDR4, 512GB PCIe SSD, Gigabit Wi-Fi 6, Windows 10 Home, TUF706HEB-DB74`
//     },
//     {
//         id:"3",
//         title: "ASUS ROG Strix G15 (2021)",
//         price: "1129.00",
//         picture: "https://m.media-amazon.com/images/I/81fZmxBbQgL._AC_SL1500_.jpg",
//         description: `Laptop, 15.6” 144Hz IPS Type FHD Display, NVIDIA GeForce RTX 3050, AMD Ryzen 7 4800H, 8GB DDR4, 512GB PCIe NVMe SSD, RGB Keyboard, Windows 10, G513IC-EB73`
//     },
//     {
//         id:"4",
//         title: "MSI Stealth 15M Gaming",
//         price: "1297.07",
//         picture: "https://m.media-amazon.com/images/I/71p3Ygm14wL._AC_SL1500_.jpg",
//         description: `15.6" 144Hz FHD 1080p Display, Intel Core i7-11375H, NVIDIA GeForce RTX 3060, 16GB, 512GB SSD, Thunderbolt 4, WiFi 6, Win10, Carbon Gray (A11UEK-009) `
//     },
//     {
//         id:"5",
//         title: "Razer Blade 15",
//         price: "1129.00",
//         picture: "https://m.media-amazon.com/images/I/61gA6Girg6L._AC_SL1500_.jpg",
//         description: `NVIDIA GeForce RTX 3070 Ti - 12th Gen Intel 14-Core i7 CPU - 15.6” FHD 360Hz - 16GB DDR5 RAM - 1TB PCIe SSD - Windows 11 - CNC Aluminum - Chroma RGB - Thunderbolt 4`
//     },
//     {
//         id:"6",
//         title: "MSI Crosshair15",
//         price: "1249.89 ",
//         picture: "https://m.media-amazon.com/images/I/41DUv6ON0yL._AC_SL1200_.jpg",
//         description: `15.6" 144Hz 3ms FHD Gaming Laptop Intel Core i7-11800H RTX3060 16GB 512GB NVMe SSD Win10 `
//     }]
// }
// axios.post("https://gaming-shop-1496f-default-rtdb.firebaseio.com/products.json",data.products)
// .then(response => {console.log(response);}).catch(err => {console.log(err)})
