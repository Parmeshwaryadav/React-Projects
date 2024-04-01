// eslint-disable-next-line react/prop-types
const Cards = ({ places, image, rating, description, date, price }) => {
  return (
    <div className="m-2 w-[18rem] flex flex-wrap justify-center items-center p-4 rounded-2xl text-black hover:bg-[#f3f4f6] transition duration-700 ease-in-out hover:bg-opacity-30">
      <img className="rounded-2xl" src={image} alt="image-cards" />
      <div className="flex gap-8 p-2">
        <h2>{places}</h2>
        <p>Ratings: {rating}⭐</p>
      </div>
      <div className=" p-2">
        <p>{description}</p>
        <p>{date}</p>
        <h5>
          <strong>{price}</strong>
        </h5>
      </div>
    </div>
  );
};

export default Cards;
