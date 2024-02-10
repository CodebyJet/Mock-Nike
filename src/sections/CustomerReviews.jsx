<<<<<<< HEAD
import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold" >What Our <span className="text-coral-red" >Customers</span> Say?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center " >Hear genuine stories from our satisfied customers</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14" >
        {reviews.map((review)=> (
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
        ))}
      </div>
    </section>
  )
}

=======
import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold" >What Our <span className="text-coral-red" >Customers</span> Say?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center " >Hear genuine stories from our satisfied customers</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14" >
        {reviews.map((review)=> (
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
        ))}
      </div>
    </section>
  )
}

>>>>>>> 9b26c4a44c5873ef4aef8f12717a3cc5c3262a15
export default CustomerReviews