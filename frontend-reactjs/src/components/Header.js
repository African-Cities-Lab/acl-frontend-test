
const Header = () => {
    return ( 
        <div>
            <nav id="main-nav" className="navbar fixed-top-navbar navbar-dark navbar-expand-md text-center py-3">
                <div className="container">
                    <a className="navbar-brand" href=' '>
                        <img src="https://fra1.digitaloceanspaces.com/acl-temp-production/static/images/assets/LOGO-ACL-BLANC.png" alt="African Cities Lab" className="navbar-brand-image" width="130px" height="32px"/>
                    </a>
                    <button className="navbar-toggler navbar-toggler-right bg-warning text-black" data-bs-toggle="collapse" data-bs-target="#navbar-responsive" type="button" aria-controls="navbar-responsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div id="navbar-responsive" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto text-uppercase"> 
                        </ul>
                        
                    </div>
                </div>
            </nav> 
        </div> 
     );
}

export default Header;