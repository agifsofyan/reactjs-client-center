import React, { Component } from 'react'
import axios from 'axios';


const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Content-Type': 'multipart/form-data',
        'x-auth-token': '39f5f9c37245e112f8ae7c601cbdc616d3c11e4a86b1acdd1e72f93479725d92dbfc74864e6148998086e3107c157841edd9b2353776070e4ade9500dbd3472cbfb6b30912e0530913568b4dea6e9415ef9ff3f8e9700efa0a48edcbb8924c93ccbf739e8a06d047ccb4aa5c58083a6c22f6d3acc3fdd32c68e65953ba057185b4ea332e6f9598f317b4b8df9a65e5f95bb1f22799fea22d555d0ff557eebc8a1e6b18d155fc5b2fcbfb9833ffcbec2fa32e8dd361fb37ac2901cb50c17aad2137cba1fe7717967567d4abe3dfe23015bea6c77e3c94318208c10807846c0b89c075a839e3f726f230b96faed635f0ec02349ae4830f3239aeb91826a4dc628d8dc1f0abd37f485dbcf4823023814492'
    }
}

const items = []

export default class Cart extends Component {
    constructor(){
        super()
        this.state = {
            cartList: [],
            items: items,
            item: {}
        }
    }

    CartList = () => {
        axios.get('http://139.162.59.84:5000/api/v1/carts/list', options)
        .then((res) => {
            const data = res.data.items
            this.setState({
                cartList: data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    componentDidMount = () => {
        this.CartList()
    }

    onChange = (e) => {
        const { id, checked } = e.target

        var item = this.state.item
        var productItem = item["product_id"]
        productItem = id

        if (checked) {
            items.push({
                product_id: productItem
            })
        } else {
            items.shift({
                product_id: productItem
            })
        }

        this.setState(items)

        console.log('items-state',this.state.items)
    }

    render() {
        const data = this.state.cartList
        
        return (
            <div>
                <hr/>
                <h2>This is Cart List</h2>
                { 
                    data.map( (product, index) =>
                    <div
                            key={index}
                            style={{ border:"1px solid #000", background:"#ccc", cursor:"pointer" }}
                        >
                            <input 
                                type="checkbox"
                                id={product.product_info._id}
                                onChange={this.onChange} 
                                // defaultChecked={false}
                            />
                            <p>{product.product_info._id}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}