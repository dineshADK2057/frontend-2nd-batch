import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                console.log(data);

            } catch (error) {
                console.log("error in fetching products data");

            }
        }
        fetchProducts();
    }, [])



    return (
        <>

{products.map(product => (
          
          <StyledLink key={product.id} to={`/products/${product.id}`}>

            <ProductContainer>
              <img src={product.image} alt="" class="image" width="200px" height="200px" />
              <div class="info">
                <h1 class="itemTitle">{product.title}</h1>
                <p class="description">
                  {product.description}
                </p>
                <br />
                <h4 class="price">{product.price}</h4>
              </div>
            </ProductContainer>
          </StyledLink>
        
      ))}




        </>
    )
}

const ProductContainer = styled.div`
    display: flex;
    gap: 20px;
    border: 1px solid gray;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.15);
    padding: 20px;
`
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
`
