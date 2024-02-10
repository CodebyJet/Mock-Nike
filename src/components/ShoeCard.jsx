<<<<<<< HEAD
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:flex-1" >
            <img src={imgURL.thumbnail} alt="Shoe Collection" width={127} height={103} className="object-contain" />
        </div>
    </div>
  );
};

export default ShoeCard;
=======
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:flex-1" >
            <img src={imgURL.thumbnail} alt="Shoe Collection" width={127} height={103} className="object-contain" />
        </div>
    </div>
  );
};

export default ShoeCard;
>>>>>>> 9b26c4a44c5873ef4aef8f12717a3cc5c3262a15
