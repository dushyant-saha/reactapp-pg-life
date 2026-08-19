import { Link } from 'react-router-dom';
import '../stylesheets/RoomSearch.css';
// import img from '../img'

export function RoomSearch() {
    return (
        <div className="link-container">
            <div className="filter-bar row justify-content-around">
                <div className="col-auto" data-bs-toggle="modal" data-bs-target="#filter-modal">
                    <img src="/img/filter.png" alt="filter" />
                    <span>Filter</span>
                </div>
                <div className="col-auto">
                    <img src="img/desc.png" alt="sort-desc" />
                    <span>Highest rent first</span>
                </div>
                <div className="col-auto">
                    <img src="img/asc.png" alt="sort-asc" />
                    <span>Lowest rent first</span>
                </div>
            </div>


            <div className="property-card row">
                <div className="image-container col-md-4">
                    <img src="img/properties/1/1d4f0757fdb86d5f.jpg" />
                </div>
                <div className="content-container col-md-8">
                    <div className="row no-gutters justify-content-between">
                        <div className="star-container" title="4.5">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="interested-container">
                            <i className="far fa-heart"></i>
                            <div className="interested-text">3 interested</div>
                        </div>
                    </div>
                    <div className="detail-container">
                        <div className="property-name">Navkar Paying Guest</div>
                        <div className="property-address">44, Juhu Scheme, Juhu, Mumbai, Maharashtra 400058</div>
                        <div className="property-gender">
                            <img src="img/male.png" />
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="rent-container col-6">
                            <div className="rent">Rs 9,500/-</div>
                            <div className="rent-unit">per month</div>
                        </div>
                        <div className="button-container col-6">
                            <Link className="btn btn-primary" to='/room-details'>View</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="property-card row">
                <div className="image-container col-md-4">
                    <img src="img/properties/1/eace7b9114fd6046.jpg" />
                </div>
                <div className="content-container col-md-8">
                    <div className="row no-gutters justify-content-between">
                        <div className="star-container" title="4.8">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="interested-container">
                            <i className="far fa-heart"></i>
                            <div className="interested-text">6 interested</div>
                        </div>
                    </div>
                    <div className="detail-container">
                        <div className="property-name">Ganpati Paying Guest</div>
                        <div className="property-address">Police Beat, Sainath Complex, Besides, SV Rd, Daulat Nagar, Borivali East, Mumbai - 400066</div>
                        <div className="property-gender">
                            <img src="img/unisex.png" />
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="rent-container col-6">
                            <div className="rent">Rs 8,500/-</div>
                            <div className="rent-unit">per month</div>
                        </div>
                        <div className="button-container col-6">
                            <Link className="btn btn-primary" to='/room-details'>View</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="property-card row">
                <div className="image-container col-md-4">
                    <img src="img/properties/1/46ebbb537aa9fb0a.jpg" />
                </div>
                <div className="content-container col-md-8">
                    <div className="row no-gutters justify-content-between">
                        <div className="star-container" title="3.5">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="interested-container">
                            <i className="far fa-heart"></i>
                            <div className="interested-text">2 interested</div>
                        </div>
                    </div>
                    <div className="detail-container">
                        <div className="property-name">PG for Girls Borivali West</div>
                        <div className="property-address">Plot no.258/D4, Gorai no.2, Borivali West, Mumbai, Maharashtra 400092</div>
                        <div className="property-gender">
                            <img src="img/female.png" />
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="rent-container col-6">
                            <div className="rent">Rs 8,000/-</div>
                            <div className="rent-unit">per month</div>
                        </div>
                        <div className="button-container col-6">
                            <Link className="btn btn-primary" to='/room-details'>View</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="filter-modal" tabindex="-1" role="dialog" aria-labelledby="filter-heading" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="filter-heading">Filters</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <h5>Gender</h5>
                            <hr />
                            <div>
                                <button class="btn btn-outline-dark btn-active">
                                    No Filter
                                </button>
                                <button class="btn btn-outline-dark">
                                    <i class="fas fa-venus-mars"></i>Unisex
                                </button>
                                <button class="btn btn-outline-dark">
                                    <i class="fas fa-mars"></i>Male
                                </button>
                                <button class="btn btn-outline-dark">
                                    <i class="fas fa-venus"></i>Female
                                </button>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button data-dismiss="modal" class="btn btn-success">Okay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}