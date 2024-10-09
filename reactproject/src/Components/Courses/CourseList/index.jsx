import React from 'react';

const CourseList = () => {

    const [courseList, setCourseList] = useState(null);

    const getCourseList = async () => {
        const res = await axios.get(
          "https://66ddf1e2f7bcc0bbdcdf77d7.mockapi.io/cardList/products"
        );
        setProduct(res.data);
      };

    return (
        <div>
            
        </div>
    );
}

export  {CourseList};
