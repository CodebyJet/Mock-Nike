<<<<<<< HEAD
import { services } from "../constants"
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

=======
import { services } from "../constants"
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

>>>>>>> 9b26c4a44c5873ef4aef8f12717a3cc5c3262a15
export default Services