import '../stylesheets/Dashboard.css';

export function Dashboard() {
    return (
        <section>
            <div className="my-profile link-container">
                <h1>My Profile</h1>
                <div className="row">
                    <div className="col-md-3 profile-img-container">
                        <i className="fas fa-user profile-img"></i>
                    </div>
                    <div className="col-md-9">
                        <div className="row no-gutters justify-content-between align-items-end">
                            <div className="profile">
                                <div className="name">Dummy</div>
                                <div className="email">dummy@email.com</div>
                                <div className="phone">0000000000</div>
                                <div className="college">Dummy University</div>
                            </div>
                            <div className="edit">
                                <div className="edit-profile">Edit Profile</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InterestedProperties />
        </section>
    );
}

function InterestedProperties() {
    return (
        <div className="my-interested-properties">
            <div className="link-container">
                <h1>My Interested Properties</h1>

                <div className="property-card property-id-0000 row">
                    <div className="image-container col-md-4">
                        <img src="" alt="property image" />
                    </div>
                    <div className="content-container col-md-8">
                        <div className="row no-gutters justify-content-between">

                            <div className="star-container" title="5">

                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>

                            </div>
                            <div className="interested-container">
                                <i className="is-interested-image fas fa-heart" property_id="-"></i>
                            </div>
                        </div>
                        <div className="detail-container">
                            <div className="property-name">Dummy Name</div>
                            <div className="property-address">Dummy Address</div>
                            <div className="property-gender">
                                <img src="img/unisex.png" />
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="rent-container col-6">
                                <div className="rent">₹ 0000/-</div>
                                <div className="rent-unit">per month</div>
                            </div>
                            <div className="button-container col-6">
                                <a href="" className="btn btn-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}