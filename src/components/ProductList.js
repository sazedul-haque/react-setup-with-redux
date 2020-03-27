import React from 'react';
import { connect } from 'react-redux';
import { getProductList } from '../store/actions/productActions';

class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        this.props.getProductList();
    }

    render(){
        const products = this.props.product.product_list;
        return products && (
            <div className="container">
                <ul>
                    {
                        products.map(product =>
                            <li>{ product.title }</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      product: state.product
    }
  }

export default connect(mapStateToProps, { getProductList })(ProductList);