import React, { Component } from "react";
import  "./hover.css"

export class NewsItem extends Component {
  render() {
    let { title, desc, img, url, author, publish,source } = this.props;
    const mystyle = {
      color: "rgb(91, 90, 90)",
      fontSize: "17px",
      fontWeight: 100,
      fontFamily: "inherit",
    };
    return (
      <div>
        <div className="card "  style={{ width: "18rem" }}>
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{left: '90%' }}>
          {source}</span>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
         </h5>
            <p className="card-text">{desc}</p>
           
            <p style={mystyle}>
              By {!author ? "unknown" : author} published on
              {new Date(publish).toGMTString() ? new Date(publish).toGMTString(): "Unknown Date"}</p>
            <a href={url} rel="noreferrer" className="btn btn-primary  " target="_blank">
              Go somewhere
            </a>
  
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
