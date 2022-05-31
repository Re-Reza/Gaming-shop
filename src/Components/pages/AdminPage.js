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
        setLoading(true);
        axios.post(`https://gaming-shop-1496f-default-rtdb.firebaseio.com/products/${inputState.productCategory}.json`, product)
        .then(response =>{
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

