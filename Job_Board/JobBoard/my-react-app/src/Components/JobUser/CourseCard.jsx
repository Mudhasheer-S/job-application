import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div style={styles.card}>
      <img src={course.logo} alt={`${course.title} logo`} style={styles.logo} />
      <h3 style={styles.title}>{course.title}</h3>
      <p style={styles.description}>{course.description}</p>
      <a href={course.link} style={styles.button} target="_blank" rel="noopener noreferrer">
        Go to Course
      </a>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Poppins', sans-serif",
  },
  logo: {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
    marginBottom: '16px',
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 8px 0',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '16px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#007BFF',
    borderRadius: '4px',
    textDecoration: 'none',
    marginTop: '10px',
  },
};

export default CourseCard;
