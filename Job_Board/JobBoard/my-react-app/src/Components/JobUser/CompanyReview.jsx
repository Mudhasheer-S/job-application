import React, { useState } from 'react';

const CompanyReview = ({ company, onClose }) => {
  const [newReview, setNewReview] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    reviewer: '',
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    company.reviews.push(newReview);
    setNewReview({
      title: '',
      date: new Date().toISOString().split('T')[0],
      description: '',
      reviewer: '',
      rating: 0,
    });
    onClose();
  };

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={company.logo} alt={company.name} style={styles.logo} />
        <button onClick={onClose} style={styles.closeButton}>×</button>
      </div>
      <h2 style={styles.title}>{company.name}</h2>
      <p style={styles.description}>{company.description}</p>
      <a href={company.link} target="_blank" rel="noopener noreferrer" style={styles.link}>Visit Page</a>
      <div style={styles.jobPositions}>
        <h3 style={styles.sectionTitle}>Job Positions</h3>
        <ul style={styles.jobList}>
          {company.jobpositions.map((position, index) => (
            <li key={index} style={styles.jobItem}>{position}</li>
          ))}
        </ul>
      </div>
      <div style={styles.reviews}>
        <h3 style={styles.sectionTitle}>Reviews</h3>
        <div style={styles.reviewList}>
          {company.reviews.map((review, index) => (
            <div key={index} style={styles.review}>
              <h4 style={styles.reviewTitle}>{review.title}</h4>
              <p style={styles.reviewDate}>{review.date}</p>
              <p style={styles.reviewDescription}>{review.description}</p>
              <p style={styles.reviewReviewer}><strong>{review.reviewer}</strong></p>
              {/* <StarRating rating={review.rating} /> */}
            </div>
          ))}
        </div>
      </div>
      <div style={styles.reviewForm}>
        <h3 style={styles.sectionTitle}>Submit a Review</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="title"
            placeholder="Review Title"
            value={newReview.title}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <textarea
            name="description"
            placeholder="Review Description"
            value={newReview.description}
            onChange={handleInputChange}
            required
            style={styles.textarea}
          />
          <input
            type="text"
            name="reviewer"
            placeholder="Your Name"
            value={newReview.reviewer}
            onChange={handleInputChange}
            maxLength={200}
            required
            style={styles.input}
          />
          <div style={styles.ratingContainer}>
            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              value={newReview.rating}
              onChange={handleInputChange}
              min="1"
              max="5"
              required
              style={styles.ratingInput}
            />
            <span style={styles.ratingLabel}>Rating (1-5)</span>
          </div>
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#ffffff',
    margin: '20px auto',
    maxWidth: '900px',
    borderRadius: '8px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  closeButton: {
    backgroundColor: '#ff4d4d',
    color: '#ffffff',
    border: 'none',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  logo: {
    width: '120px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    margin: '10px 0',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '15px',
  },
  link: {
    display: 'inline-block',
    margin: '10px 0',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
  jobPositions: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  jobList: {
    listStyleType: 'none',
    padding: '0',
  },
  jobItem: {
    backgroundColor: '#f9f9f9',
    padding: '12px',
    margin: '6px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  reviews: {
    marginBottom: '20px',
  },
  reviewList: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '15px',
  },
  review: {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  reviewTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '5px',
  },
  reviewDate: {
    fontSize: '14px',
    color: '#999',
    marginBottom: '10px',
  },
  reviewDescription: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  reviewReviewer: {
    fontSize: '16px',
    fontWeight: '500',
  },
  reviewForm: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f0f8ff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  textarea: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    resize: 'vertical',
    fontSize: '14px',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  ratingInput: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    width: '50px',
  },
  ratingLabel: {
    fontSize: '14px',
    color: '#666',
  },
  submitButton: {
    padding: '8px 12px',
    backgroundColor: '#28a745',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s',
    width : '100px'
  },
};

export default CompanyReview;