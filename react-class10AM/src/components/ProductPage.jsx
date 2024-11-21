import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductPage() {

    const { productID } = useParams()
    const [oneProduct, setOneProduct] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productID}`);
        const data = await response.json();
        setOneProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productID]);

    if (!oneProduct) {
        return <div>Loading...</div>;
      }
    return (
        <>

            <div>
                <h1>{oneProduct.title}</h1>
                <img src={oneProduct.image} alt={oneProduct.title} width="200" />
                <p>{oneProduct.description}</p>
                <p>Price: {oneProduct.price}</p>
                <p>Category: {oneProduct.category}</p>
            </div>

        </>
    )
}
