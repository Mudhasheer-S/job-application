import React from 'react';
import CourseCard from './CourseCard';

const CoursesGrid = ({ courses }) => {
  return (
    <div style={styles.grid}>
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    padding: '16px',
  },
};

export default CoursesGrid;
