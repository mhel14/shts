import React from 'react'
import Course from './course';

const Courses = () => {
  return (
    <div className="courses">
      <h2>Our Courses</h2>
      <div className="container wrapper">
        <Course heading="Information Technology" />
        <Course heading="Arts &amp; Media" />
        <Course heading="Business Management" />
        <Course heading="Project Management" />
      </div>
    </div>
  )
}

export default Courses