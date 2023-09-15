import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2';

const Card = () => {

  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalTakenCredit, setTotalTakenCredit] = useState(0);
  const [totalPayablePrice, setTotalPayablePrice] = useState(0);



  const maxCredit = 20;

  useEffect(() => {
    fetch("/public/course.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);



  const handleSelectCourse = (course) => {
    const isSelected = selectedCourses.find((item) => item.id == course.id);

    let takenCredit = course.credit_hours;
    let payablePrice = course.price;

    if (isSelected) {
      return Swal.fire({
        title: 'Sorry!',
        text: 'You have selected already',
        icon: 'error',
        confirmButtonText: 'Go Back'
      });
    }
    else {
      selectedCourses.forEach((item) => {
        takenCredit += item.credit_hours;
      });

      selectedCourses.forEach((item) => {
        payablePrice += item.price;
      });

      const remaining = maxCredit - takenCredit;

      if (takenCredit > maxCredit) {
        return Swal.fire({
          title: 'Credit Over!',
          text: 'You have enrolled maximum credit limit already',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      } else {
        setTotalPayablePrice(payablePrice)
        setTotalTakenCredit(takenCredit)
        setRemaining(remaining);
        setSelectedCourses([...selectedCourses, course]);
      }


    }
  };

  return (
    <>
      <div className="px-16 py-20 flex gap-8 bg-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10 ">
          {allCourses.map((course) => (
            <div key={course.id} className="card card-compact bg-white p-5 shadow-xl justify-around">
              <figure><img src={course.thumbnail} alt="Shoes" className="w-full" /></figure>
              <div className="">
                <h2 className="card-title text-2xl text-black my-5 font-bold">{course.course_name}</h2>
                <p className="text-black font-semibold my-3">{course.description}</p>
                <div className="grid lg:grid-flow-col grid-flow-row justify-between my-4 gap-2 md:gap-4 lg:gap-5 align-middle">
                  <div className="flex">
                    <img src="/src/assets/dollar-sign-solid.svg" alt="" className="w-5" /> <p className="font-bold text-3xl pl-3">   {course.price}</p>
                  </div>
                  <div className="flex">
                    <img src="/src/assets/book-open-solid.svg" alt="" className="w-5" /><p className="font-bold text-3xl pl-3"> {course.credit_hours} hours</p>

                  </div>

                </div>
                <div className="card-actions justify-end">
                  <button onClick={() => handleSelectCourse(course)} className="rounded-full p-3 my-3 w-full bg-blue-900 text-white font-bold text-2xl">Select Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 w-[500px] bg-white rounded-[15px]">
          <Cart
            selectedCourses={selectedCourses}
            remaining={remaining}
            totalTakenCredit={totalTakenCredit}
            totalPayablePrice={totalPayablePrice}
          ></Cart>
        </div>



      </div>
    </>
  );
};

export default Card;