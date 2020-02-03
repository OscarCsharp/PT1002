import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchProduct } from './components/FetchProduct';
import { Product } from './components/Product'; 

export const routes = <Layout>
    <Route exact path='/' component={FetchProduct} />
    <Route path='/fetchproduct' component={Home} />
    <Route path='/product/edit/:productid' component={Product} />
  
</Layout>;