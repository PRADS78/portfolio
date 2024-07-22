import React from 'react';
import { testimonialData } from '../../contants';



const Testimonials = ({ handleModalOpen }) => {
  return (
    <section className="testimonials">
      <h2 className="h2 testimonials-title article-title">Testimonials</h2>
      <ul className="testimonials-list has-scrollbar">
        {testimonialData.map((item) => (
          <li className="testimonials-item" key={item.id}>
            <div className="content-card" data-testimonials-item onClick={() => handleModalOpen(true, item.id, "")}>
              <figure className="testimonials-avatar-box">
                <img src={item.icon} alt={`avatar-${item.id}`} style={{width:"60px", borderRadius:"8px"}} />
              </figure>
              <h4 className="h4 testimonials-item-title">{item.name}</h4>
              <div className="testimonials-text">
                <p>
                  {item.desc}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;
