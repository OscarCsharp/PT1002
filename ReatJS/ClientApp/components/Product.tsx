
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { ProductData } from './FetchProduct';

interface ProductDataState {
    title: string;
    loading: boolean;
    itemsData: ProductData;
}
export class Product extends React.Component<RouteComponentProps<{}>, ProductDataState> {

}