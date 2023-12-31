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
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);



  const handleSelectCourse = (course) => {
    const isSelected = selectedCourses.find((item) => item.id == course.id);

    let takenCredit = course.credit_hours;
    let payablePrice = course.price;

    if (isSelected) {
      
      return  Swal.fire({
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
      <div className="px-8 md:px-10 lg:px-16 py-4 md:py-12 lg:py-20 flex flex-col md:flex-row gap-8 justify-between bg-slate-100">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 md:gap-4 lg:gap-10 ">
          {allCourses.map((course) => (
            <div key={course.id} className="w-[320px]  card card-compact bg-white p-5 shadow-xl justify-around">
              <figure><img src={course.thumbnail} alt="Shoes" className="w-[300px] h-[200px]" /></figure>
              <div className="">
                <h2 className="card-title text-[18px] text-black my-6 font-bold">{course.course_name}</h2>
                <p className="text-black font-semibold my-3">{course.description}</p>
                <div className="grid lg:grid-flow-col grid-flow-row justify-between my-6 gap-2 md:gap-4 lg:gap-5 align-middle">
                  <div className="flex">
                    <img src="https://th.bing.com/th/id/R.1a3c0f0e7f17a89264178563199a86df?rik=4NiiFErw%2bJ55HA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fd%2fb%2f8%2ff%2f1351622286410227529Dollar+Sign.svg.hi.png&ehk=329XBZQxIXRk5Qsp9AarL1XPH75CBGoJQbDyKgxZOBs%3d&risl=&pid=ImgRaw&r=0" alt="" className="w-4" /> <p className="font-bold text-2xl pl-3">   {course.price}</p>
                  </div>
                  <div className="flex">
                    <img src="https://www.pngkit.com/png/detail/136-1361802_open-book-free-vector-icon-designed-by-freepik.png" alt="" className="w-8" /><p className="font-bold text-2xl pl-3"> {course.credit_hours} hr</p>

                  </div>

                </div>
                <div className="card-actions justify-end">
                  <button onClick={() => handleSelectCourse(course)} className="rounded-full p-3 my-3 w-full bg-blue-900 text-white font-bold text-2xl">Select Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 w-[350px] bg-white rounded-[15px]">
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