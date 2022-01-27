
import { useParams,} from 'react-router-dom'; 
import useFetch from '../components/useFetch';

const SingleCourse = () => {
    const { code } = useParams();
    const { data: course, error, isPending } =  useFetch('http://localhost:8000/api/courses/'+code+'/'); 

    return ( 
        <div className="single-course__page">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}

            <div className="container p-5">
                <div className="row">
                    <div className="col-md-12">
                        <div class="acl-single_course__meta d-flex">
                            <div className="acl-courses_item__terms"> 
                                <i class="fad fa-tags"></i>
                                <div className="acl-courses_item__term_name d-inline-block">
                                    <span>Category:</span>
                                    {course.categories?.map(cat => (
                                        <h6>{cat},</h6>
                                    ))}
                                </div>              
                            </div>
                            <div className="acl-courses_item__terms"> 
                                <i className="far fa-city"></i>
                                <div className="acl-courses_item__term_name d-inline-block">
                                    <span>Organization:</span>
                                    {course.organizations?.map(company => (
                                        <h6>{company.name}, </h6>
                                    ))} 
                                </div>              
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <div className="acl-single_course__title">
                                    <h1>{course.title}</h1>
                                </div>  
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="acl-btn_primary ">
                                    <a href=" " className="btn">Enroll Now </a>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="acl-single_course__overview">

                                    <div className="acl-single_course__img">
                                        <img width="870" height="440" src={course.image} alt={course.title}/>
                                    </div>

                                    <div className="acl-single_course__content">
                                        <div className="acl-single_course__content-section">
                                            <h3 className="font-weight-700 text-uppercase pb-3">COURSE DESCRIPTION</h3>

                                            <p>{course.full_description}</p>
                                        </div> 
                                        <div className="acl-single_course__content-section">
                                            <h3 className="font-weight-700 text-uppercase pb-3">ABOUT INSTRUCTORS</h3>
                                            {course.instructors?.map(teacher => (
                                                <div className="acl-single_course__more"> 
                                                    <div className='about-instructor'> 
                                                        <img className="img-responsive" src={teacher.profile_picture} alt={teacher.name}/>
                                                        <h4>{teacher.name}</h4>  
                                                    </div>
                                                    <div className="instructor-bio">{teacher.bio}</div>
                                                </div>
                                            ))} 

                                            
                                        </div> 
                                        <div className="acl-single_course__content-section" >
                                            <h3 class="font-weight-700 text-uppercase pb-3">Provided by</h3>
                                            {course.organizations?.map(company => (
                                                <div className="acl-single_course__more">
                                                    <div class="about-company"> 
                                                        <img class="img-responsive" src={company.image} alt={company.name}/>
                                                        <h4>{company.name}</h4>   
                                                    </div>
                                                </div> 
                                            ))} 
                                            
                                        </div> 
                                    </div>
                                    
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default SingleCourse;