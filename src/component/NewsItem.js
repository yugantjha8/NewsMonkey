import React from 'react'

const NewsItem = (props) => {
    return (
        <div>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger">{props.source}</span>
                </div>
                <img src={props.imageUrl ? props.imageUrl : "https://s.yimg.com/ny/api/res/1.2/M7SaJPGHC8O_zWpTcwR5_g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MjQ-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/e1666a00-5d47-11ed-bfbe-2f0ed57b4721"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <p className="card-text"><small>By {props.author ? props.author : 'unknown'} on {props.date}</small></p>
                    <a href={props.postUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        </div >
    )

}
export default NewsItem;
// ba70e760bd5a400cbd34224c13a67d22