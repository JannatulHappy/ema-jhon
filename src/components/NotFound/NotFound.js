import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="not-found">
            <img src="https://showwp.com/wp-content/uploads/2016/02/404_page_template_03.jpg" alt="" />
            <Link to="/shop"><button className="btn-regular not-found-button">Go Back</button></Link>
        </div>
    );
};

export default NotFound;