import InputField from "../components/InputField";
import contactForm from "../data/contactForm.json";

// good
export default function ContactPage() {
  //Properties
  const OwnerImage = require("../assets/pictures/owner.jpg");
  const MapImage = require("../assets/pictures/map.jpg");

  return (
    <div className="contact-page">
      <img src={OwnerImage} alt="the owner of this restaurant" />
      <section>
        <h3>Opening times</h3>
        <ul>
          <li>Mon-Fri: 9:00 am to 11:00 pm </li>
          <li>Sat, Sun: 10:00 am to 10:00 pm </li>
        </ul>
      </section>
      <section>
        <h3>Book a table</h3>
        <form>
          <InputField setup={contactForm.name} state={[]} />
          <InputField setup={contactForm.email} state={[]} />
          <InputField setup={contactForm.date} state={[]} />
        </form>
      </section>
      <section>
        <h3>Address</h3>
        <p>Kemivagen 7A, Gothenburg, Sweden.</p>
      </section>
      <img
        src={MapImage}
        alt="a map screenshot that shows the location of the restaurant"
      />
    </div>
  );
}
