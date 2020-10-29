import React from "react";
//import HoverCard from "components/Card/HoverCard";
import Map from "components/GoogleMap/Map";
//import "./sectionmapcontact.css";
import ContactForm from "components/Contact/ContactForm";

const SectionMapContact = () => {
  return (
    <section className='body-container'>
      <div className='map'>
        <Map />
      </div>
      <div className='contact'>
        <ContactForm />
      </div>
    </section>
  );
};

export default SectionMapContact;
