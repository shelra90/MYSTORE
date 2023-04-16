import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'
import products from '../products'


const HomeScreen = () => {
  useEffect(() => {
    const fetchProducts = () => {
      const {data} = axios.get('/api/products')

    }
  } )


  //this function
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {products.map((product) => (
            <Col sm={12} md={6} lg={4} x1={3}>
                <Product product={product} />
            </Col>

        ))}
    </Row>
    </>
  )
}

export default HomeScreen