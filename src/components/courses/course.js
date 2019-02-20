import React from 'react'

const Course = (props) => {
  return (
    <div className="course">
      <div className="wrap">
        <p className="heading">{props.heading}</p>
        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida nisl eget erat convallis feugiat. Nulla facilisi. Suspendisse ornare eros diam. Phasellus in pretium nibh. Morbi efficitur mi neque, nec consequat nisl pre.</p>
        </div>
      <a href="#">Learn more</a>
    </div>
  )
}

export default Course;