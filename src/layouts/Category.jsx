import { React, useState } from 'react';
//import { Link } from 'react-router-dom';

const Category = (props) => {

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const toggleCategory = () => {
        setIsCategoryOpen(!isCategoryOpen);
    }
    return (
        <>
            <div className={`col-md-3 mt-5 ms-5 ${isCategoryOpen ? 'show' : ''}`}>
                <h3 style={{ whiteSpace: 'nowrap' }} > {props.Category} </h3>
                <h3 onClick={toggleCategory} className="d-md-none">
                    {isCategoryOpen ? 'Hide Categories' : 'Show Categories'}
                </h3>
                <ul className="list-unstyled list collapse d-md-block mt-4 ">
                    <li>Daily Wear</li>
                    <li>Running</li>
                    <li>Casual</li>
                    <li>Jordan</li>
                    <li>Basketball</li>
                    <li>Training and Gym</li>
                    <li>Football</li>
                </ul>
            </div>
        </>

    );
};

export default Category;

