import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const fotoPerfil = "https://media-exp1.licdn.com/dms/image/C4D03AQG0F28f4TH6RQ/profile-displayphoto-shrink_800_800/0/1613939729100?e=1638403200&v=beta&t=kXmnhOwLDmuycBQaG3JOUpsM6tqwLGHyXcLNGKlDBDk"

export class About extends Component {
    static displayName = About.name;


    render() {
        return (
            <div>
                <div className="card" style={{ height: '100%', padding: '10px', margin: '10px', width:'100%' }}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(128, 128, 128)' }}
                        iconStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}>

                        <div className="d-flex justify-content-around flex-row"  >

                            <div className="p-2">
                                <div className="responsive" >
                                    <img src={fotoPerfil} width='150px' height='150px' style={{ borderRadius: '10px' }} className="img-fluid" />
                                </div>
                            </div>

                            <div >
                                <div className="spbre">
                                    <p>I am a lover of information technologies.
                                        Flutter developer with solid knowledge in web development, computer networks and telecommunications.</p>
                                    <p>Finalist in Computer Engineering and Telecommunications at ISUTC.</p>
                                </div>
                            </div>
                        </div>


                    </VerticalTimelineElement>

                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(0, 150, 0)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 150, 0)' }}
                            date="2017-2020"
                            iconStyle={{ background: 'rgb(0, 150, 0)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">ISUTC</h3>
                            <h4 className="vertical-timeline-element-subtitle">LEIT</h4>
                            <p>
                                Student
                            </p>
                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2014-2017"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">MozDomains</h3>
                            <h4 className="vertical-timeline-element-subtitle">IT Tech</h4>
                            <p>
                                Helpdesk
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2015-2017"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Borboletas Centro Infantil</h3>
                            <h4 className="vertical-timeline-element-subtitle">IT Tech</h4>
                            <p>
                                Helpdesk
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2016"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">TDM</h3>
                            <h4 className="vertical-timeline-element-subtitle">IT and Telecomunication Tech</h4>
                            <p>
                                Intern
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(0, 150, 0)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 150, 0)' }}
                            date="2014-2016"
                            iconStyle={{ background: 'rgb(0, 150, 0)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">IMEP</h3>
                            <h4 className="vertical-timeline-element-subtitle">IT</h4>
                            <p>
                                Student
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2014-2015"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">IPAJ</h3>
                            <h4 className="vertical-timeline-element-subtitle">IT Tech</h4>
                            <p>
                                Helpdesk
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2013"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">CDN</h3>
                            <h4 className="vertical-timeline-element-subtitle">Electrician Tech</h4>
                            <p>
                                Intern
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(0, 150, 0)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 150, 0)' }}
                            date="2011-2013"
                            iconStyle={{ background: 'rgb(0, 150, 0)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Industrial School</h3>
                            <h4 className="vertical-timeline-element-subtitle">Electricity</h4>
                            <p>
                                Student
                            </p>
                        </VerticalTimelineElement>


                    </VerticalTimeline>
                </div>
            </div>
        );
    }
}
