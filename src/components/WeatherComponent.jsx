import React from 'react';

const WeatherComponent = ({ data }) => {
    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <div className="card bg-white">
                        <div className="bg-image ripple">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw2.webp"
                                className="w-100 img" />
                            <div className="mask">
                                <div className="text-center text-white weather-text mt-5 ms-5">
                                    <p className="h4">{data.weather.description}</p>
                                    <p className="h6">{data.name}</p>
                                    <p className="display-4 mt-4"><strong>{data.main.temp}°C</strong> </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-4 text-center bg-white">
                            <a href="#!" className="text-body">
                                <i className="fas fa-chevron-up fa-lg mb-4"></i>
                            </a>
                            <div className="d-flex justify-content-between mb-3 bg-white">
                                <p className="fw-normal">Min. Temperature</p>
                                <p className="fw-normal"><i className="fas fa-sun pe-1"></i> {data.main.temp_min}°C</p>
                            </div>
                            <div className="d-flex justify-content-between" style={{ "color": "#aaa" }}>
                                <p className="fw-normal">Max. Temperature</p>
                                <p className="fw-normal"><i className="far fa-sun pe-1"></i> {data.main.temp_max}°C</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
  
export default WeatherComponent;
