import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const fotoPerfil="https://media-exp1.licdn.com/dms/image/C4D03AQG0F28f4TH6RQ/profile-displayphoto-shrink_800_800/0/1613939729100?e=1638403200&v=beta&t=kXmnhOwLDmuycBQaG3JOUpsM6tqwLGHyXcLNGKlDBDk"

export class Home extends Component {
    static displayName = Home.name;
    render() {
        return (
            <div>
                <div className="card justify-content-center align-self-center" >
                    <div className="d-flex justify-content-around flex-row">
                        <div className="presentation p-2">
                            <p>Hi,</p>
                            <p>I'm  <span>Ray Molide</span></p>
                            <p>Web and Mobile Developer</p>
                            <a href="/contact"  className="btn btn-primary">Contact</a>
                        </div>

                        <div className="p-2">
                            <div className="foto responsive" >
                                <img src={fotoPerfil} className="img-fluid img-thumbnail"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}
