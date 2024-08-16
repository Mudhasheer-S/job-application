import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoursesGrid from './CourseGrid';

const CourseAxios = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/company/get')
      .then(response => {
    
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  return (
    <div>
      <h1>Courses For Learning</h1>
      <CoursesGrid courses={courses} />
    </div>
  );
};

export default CourseAxios;
