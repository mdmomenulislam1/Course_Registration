import React from 'react';

const Cart = ({selectedCourses, remaining, totalTakenCredit, totalPayablePrice}) => {
  console.log(selectedCourses);


  return (
    <div>
      <h1 className="text-center mb-3 text-2xl font-bold"> Cart Section </h1>
      <div className="text-1xl font-bold mb-3">
        <h1>Credit Hour Remaining {remaining} hr</h1>
      </div>
      <hr />
      <div className="text-2xl font-bold my-3">
        <h1>Course Name: </h1>

        {selectedCourses.map((course) => (
        <li key={course.id}>{course.course_name}</li>
      ))}

        <h1>Total Course: {selectedCourses.length}</h1>
        <h1>Total Credit:{totalTakenCredit}</h1>
        <h1>Total Price:{totalPayablePrice.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default Cart;