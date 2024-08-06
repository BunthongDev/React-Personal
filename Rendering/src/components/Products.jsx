
import Card from './Card'

const Products = () => {

    const shoes = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
            brand: "Nike",
            detail: "Nike Air Max",
            price: "$100",

        },
        {   
            id: 2,
            img: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=400",
            brand: "Nike",
            detail: "Nike Air Max",
            price: "$120",

        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
            brand: "Addidas",
            detail: "Addidas 1 pair",
            price: "$160"

        },
    ];

    
  return (
    <div>
      {shoes.map((p) => {

          return (
            <Card  product={p} key={p.id} /> 
  
          );
        })}

    </div>
  )
}

export default Products
