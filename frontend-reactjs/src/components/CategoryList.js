import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({courses}) => {
    const [all_categories, setallcategories] = React.useState([])
    React.useEffect(()=> {
        let _categories = []
        courses.forEach(el => {
            el.categories.forEach( ee => {
                _categories.push(ee)
            })
        });
        let arrayInit = Array.from(new Set(_categories))
        setallcategories(arrayInit)
        console.log(_categories)
        console.log(arrayInit)
    },[courses])
    
    return ( 
        <div className="col-md-3 d-none d-md-block">
            <div className="acl-courses_filters__wrapper">
                <div className="acl-courses_filters">
                    <h6>Browse by category</h6>
                    <ul> 
                        <li><Link to={`/`} className="active">All categories</Link> </li>
                        {all_categories.map(category => (
                            <li><a>{category}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        
     );
}

export default CategoryList;