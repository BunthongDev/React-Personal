
const Card = ({product: {img, brand, detail, price}}) => {

  return (
    <article className="bg-blue-500 shadow-lg rounded-lg p-4 m-5">
        <img src={img} alt="shoes" className="p-1 bg-violet-600 rounded-lg"/>
        <h3 className="text-white font-bold text-xl mt-2">{brand} </h3>
        <p className="text-white text-sm mt-2">{detail}</p>
        <span className="text-white font-bold text-xl mt-2">{price}</span>
    </article>
  )
}

export default Card
