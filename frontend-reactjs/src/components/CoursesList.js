import React from 'react';
import { Link } from 'react-router-dom';

const CoursesList = ({courses}) => { 
    
    return ( 
        <div className="col-md-9">
            
        
            <div className="acl-courses__grid">
                <div className="acl-courses_single__inner w-100">

                    {courses.map(course => (
                        <div className="acl-courses__item" key={course.code}>
                            <div className="col-12 col-md-4">
                                <Link to={`/courses/${course.code}/`}>
                                    <div className="acl-courses_item__img">
                                        <img src={course.image} alt={course.title}/>
                                    </div> 
                                </Link> 
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="acl-courses_item__preview">
                                    <div className="acl-courses_item__categories">  
                                        {course.categories.map(category => (
                                            <span>{category},</span>
                                        ))}
                                        
                                    </div>
                                </div> 

                                <div className="acl-courses_item__title"> 
                                    <Link to={`/courses/${course.code}/`}>
                                        <h4>{course.title}</h4> 
                                    </Link> 
                                </div>

                                <p className="acl-courses_item__excerpt">{course.short_description}</p>

                                <div className="acl-courses_item__terms"> 
                                    <i className="far fa-city"></i>
                                    <div className="acl-courses_item__term_name d-inline-block">
                                        <span>Organizations</span>
                                        {course.organizations.map(company => (
                                            <h6>{company.name}, </h6>
                                        ))} 
                                    </div>              
                                </div>
                            </div> 
                        </div>
                    ))}

                </div> 
            </div> 
            
        </div> 
     );
}
 
export default CoursesList;