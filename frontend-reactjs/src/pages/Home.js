import CoursesList from '../components/CoursesList';
import CategoryList from '../components/CategoryList';
import useFetch from '../components/useFetch';

const Home = () => {
    const {data: courses, isPending, error} = useFetch('http://localhost:8000/api/courses/');

    return ( 
        <div className="entry-courses">
            <header className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-9 mx-auto position-relative">
                                        <h1 className="mb-2 text-uppercase text-white">
                                            Welcome to African Cities Lab
                                        </h1>
                                        <p className="mb-3 text-white">
                                            Explore a collection of courses on urban development offered by African Universities
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container py-5">
                <div className="big-title">
                    <h1>Explore Courses</h1>
                </div> 

                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}

                <div className="row acl-courses_archive__wrapper"> 
                    <CategoryList courses={courses}/> 
                    <CoursesList courses={courses}/> 
                </div>
                
            </div>
        </div>
     );
}

export default Home;