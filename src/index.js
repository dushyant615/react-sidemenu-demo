import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './container/NavigationBar';
import ProductCard from './components/Card';
import './index.css';
import * as serviceWorker from './serviceWorker';

import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import { Button } from 'reactstrap';
ReactDOM.render(<div>
                    <NavigationBar/>
                    <ProductCard
                        image={pic1}
                        title='Classic vase available in various color and design'
                        text='In Stock'
                        info='Rs 399 only'
                    />
                    <ProductCard
                        image={pic2}
                        title='Iceland landscape photo frame'
                        text='In Stock'
                        info='Rs 599 only'
                    />
                    <ProductCard
                        image={pic1}
                        title='Classic vase'
                        text='In Stock'
                        info='Rs 399 only'
                    />
                    <ProductCard
                        image={pic2}
                        title='Photo frame'
                        text='In Stock'
                        info='Rs 299 only'
                    />
                </div>
                
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
