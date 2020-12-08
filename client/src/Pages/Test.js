// import React, { Component } from 'react'
// import axios from 'axios';

// const token = localStorage.getItem('token');

// const options = {
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
//         'Content-Type': 'multipart/form-data',
//         'x-auth-token': `${token}`,
//     },
// };

// var items = []

// export default class Cart extends Component {
//     constructor(){
//         super()
//         this.state = {
//             cartList: [],
//             addressData: [],
//             items: items
//         }
//     }

//     CartList = () => {
//         axios.get('http://139.162.59.84:5000/api/v1/carts/list', options)
//         .then((res) => {
//             const data = res.data.items
//             this.setState({
//                 cartList: data
//             })
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     }

//     getAddress = () => {
//         axios.get('http://139.162.59.84:5000/api/v1/users/profile/address', options)
//         .then((res) => {
//             const data = res.data
//             this.setState({
//                 addressData: data
//             })
//             console.log(this.state.addressData)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     }

//     componentDidMount = () => {
//         this.CartList()
//         this.getAddress()
//     }

//     onChange = (e) => {
//         const { id, checked } = e.target

//         if (checked) {
//             items.push({
//                 product_id: id
//             })
//         } else {
//             for( let i = 0; i < items.length; i++){
//                 if ( items[i].product_id === id) { 
//                     items.splice(i, 1)
//                 }
//             }
//         }

//         this.setState(items)

//         console.log('items-state',this.state.items)
//     }

//     render() {
//         const data = this.state.cartList
//         return (
//             <div>
//                 { 
//                   data.map( (product, index) =>
//                     <div
//                         key={index}
//                         style={{ border:"1px solid #000", background:"#ccc", cursor:"pointer" }}
//                     >
//                         <input 
//                             type="checkbox"
//                             id={product.product_info._id}
//                             onChange={this.onChange} 
//                             // defaultChecked={false}
//                         />
//                         <p>{product.product_info.name}</p>
//                     </div>
//                   )
//                 }
//             </div>
//         )
//     }
// }

import React from 'react';

const Test = () => {
    return (
        <div style={styles.root}>
            <div style={styles.content} />
        </div>
    );
};

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    content: {
        width: '85%',
        height: '100%',
        backgroundColor: 'red',
    },
};

export default Test;
