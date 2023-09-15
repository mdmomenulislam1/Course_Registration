import React, { useEffect, useState } from 'react';

const Card = () => {

  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    fetch("/public/course.json")
    .then((res) => res.json())
    .then((data) => setAllCourses(data));
  }, []);

  const handleSelectCourse = (course) =>{
    setSelectedCourses([...selectedCourses, course]);
  };

  // console.log(selectedCourses);
  // console.log(allCourses);
  return (
    <>
    {allCourses.map((course) =>(
      <div key={course.id} className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={course.thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{course.course_name}</h2>
          <p>{course.description}</p>
          <div className="flex p-2">
          <img src="/src/assets/dollar-sign-solid.svg" alt="" className="w-5" /> <p className="font-bold text-3xl pl-3">   {course.price}</p>
          <img src="/src/assets/book-open-solid.svg" alt="" className="w-5" /><p className="font-bold text-3xl pl-3"> {course.credit_hours} hours</p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={() => handleSelectCourse(course) } className="btn w-full btn-primary">Select</button>
          </div>
        </div>
      </div>
      ))}
    </>
  );
};

export default Card;