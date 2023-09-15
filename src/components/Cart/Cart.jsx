import React from 'react';

const Cart = ({selectedCourses, remaining, totalTakenCredit, totalPayablePrice}) => {
  console.log(selectedCourses);


  return (
    <div>
      <h1 className="text-center mb-3 text-3xl font-bold"> Cart Section </h1>
      <div className="text-1xl font-bold mb-3">
        <h1 className="text-blue-700 ">Credit Hour Remaining  { remaining} hr</h1>
      </div>
      <hr />
      <div className=" my-3">
        <h1 className="text-2xl font-bold mb-2">Course Name: </h1>

        {selectedCourses.map((course) => (
        <li key={course.id} className="text-[15px] font-semibold list-decimal">{course.course_name}</li>
      ))}
        <hr className="my-5" />
        <h1 className="text-2xl font-bold">Total Course: {selectedCourses.length}</h1>
        <hr className="my-5" />
        <h1 className="text-2xl font-bold">Total Credit: { totalTakenCredit}</h1>
        <hr className="my-5" />
        <h1 className="text-2xl font-bold">Total Price: $ { totalPayablePrice.toFixed(2)}</h1>
        <hr className="my-5" />
      </div>
    </div>
  );
};

export default Cart;