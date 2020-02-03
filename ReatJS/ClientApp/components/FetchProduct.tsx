import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';



interface FetchProductDataState {
    productList: ProductData[];
    loading: boolean;
}
export class FetchProduct extends React.Component<RouteComponentProps<{}>, FetchProductDataState> {
    constructor() {
        super();
        this.state = { productList: [], loading: true };
        fetch('api/Product/Index')
            .then(response => response.json() as Promise<ProductData[]>)
            .then(data => {
                this.setState({ productList: data, loading: false });
            });
        // This binding is necessary to make "this" work in the callback  
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderProductTable(this.state.productList);
        return <div style={{
            textAlign: "center"
        }}>
            <h3>Stock Management Log</h3>
            <p>Keep  what's coming in and what's going out of the production flow in check  daily.</p>
            {contents}
        </div>;
    }
    // Handle Delete request for an employee  
    private handleDelete(id: number) {
        if (!confirm("Please click YES to proceed"))
            return;
        else {
            fetch('api/Product/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        productList: this.state.productList.filter((rec) => {
                            return (rec.proudctId != id);
                        })
                    });
            });
        }
    }
    private handleEdit(id: number) {
        this.props.history.push("/Product/edit/" + id);
    }
    // Returns the HTML table to the render() method.  
    private renderProductTable(productList: ProductData[]) {
        return <table className='table' style={{
            color: "white",
            backgroundColor: "Lightgreen",
            padding: "15px",
            fontWeight: "bold",
            fontFamily: "Arial"
        }}>
            <thead>
                <tr>
                    <th></th>
                    <th>Proudct ID</th>
                    <th>Proudct Name</th>
                    <th>Supplier ID</th>
                    <th>Category ID</th>
                    <th>Quantity Per Unit</th>
                    <th>Unit Price</th>
                    <th>Unit In Stock</th>
                    <th>Unit On Order</th>
                    <th>Reorder Level</th>
                    <th>Discontinued</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {productList.map(item =>
                    <tr key={item.proudctId}>
                        <td></td>
                        <td>{item.proudctId}</td>
                        <td>{item.proudctName}</td>
                        <td>{item.supplierId}</td>
                        <td>{item.categoryId}</td>
                        <td>{item.quantityPerUnit}</td>
                        <td>{item.unitPrice}</td>
                        <td>{item.unitInStock}</td>
                        <td>{item.unitOnOrder}</td>
                        <td>{item.reorderLevel}</td>
                        <td>{item.discontinued}</td>
                        <td>
                            <a className="action" onClick={(id) => this.handleEdit(item.proudctId)}>
                                <span className="glyphicon glyphicon-pencil"></span>
                            </a> 
                        </td>
                        <td>
                            <a className="action" onClick={(id) => this.handleDelete(item.proudctId)} style={{ color: "Red" }}>
                                <span className="glyphicon glyphicon-trash "></span>
                            </a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}


export class ProductData {

    proudctId: number = 0;
    proudctName: string = "";
    supplierId: number = 0;
    categoryId: number = 0;
    quantityPerUnit: number = 0;
    unitPrice: number = 0;
    unitInStock: number = 0;
    unitOnOrder: number = 0;
    reorderLevel: number = 0;
    discontinued: string = "";
}


