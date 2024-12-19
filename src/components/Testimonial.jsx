import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    avatarImg: '',
    reviewText: '',
    avatarName: '',
    avatarCompany: '',
  });
  const [showForm, setShowForm] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatarImg: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials((prev) => [...prev, formData]);
    setFormData({
      avatarImg: '',
      reviewText: '',
      avatarName: '',
      avatarCompany: '',
    });
    setShowForm(false); 
  };

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <section className="section effect-section pb-0">
      <div className="effect-3">
        <img src="/images/effect-3.svg" alt="" />
      </div>
      <div className="effect-4">
        <img src="/images/effect-4.svg" alt="" />
      </div>
      <div className="container">
        <SectionHeading
          miniTitle="Testimonials"
          title="What our clients say"
          variant="text-center"
        />
        <div data-aos="fade" data-aos-duration="1200" data-aos-delay="300">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index}>
                <div className="testimonial-box">
                  <div className="t-user">
                    {item.avatarImg && <img src={item.avatarImg} alt="Avatar" />}
                  </div>
                  <div className="t-text">{item.reviewText}</div>
                  <div className="t-person">
                    <h6>{item.avatarName}</h6>
                    <span>{item.avatarCompany}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div style={styles.buttonContainer}>
          <button
            style={styles.toggleButton}
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Hide Form' : 'Add Testimonial'}
          </button>
        </div>
        {showForm && (
          <div className="form-container" style={styles.formContainer}>
            <h3 style={styles.formTitle}>Add a Testimonial</h3>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Upload Avatar Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Review Text:</label>
                <textarea
                  name="reviewText"
                  placeholder="Write your review here"
                  value={formData.reviewText}
                  onChange={handleChange}
                  style={styles.textarea}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name:</label>
                <input
                  type="text"
                  name="avatarName"
                  placeholder="Your name"
                  value={formData.avatarName}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Company:</label>
                <input
                  type="text"
                  name="avatarCompany"
                  placeholder="Your company"
                  value={formData.avatarCompany}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.button}>
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  toggleButton: {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  formContainer: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: '500',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    minHeight: '80px',
    resize: 'none',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
