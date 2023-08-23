import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div className='my-3'>
      <div className="card">
      <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/08/20/1600x900/congress_bjp_rahul_gandhi_ladakh_bike_riding_1692519768333_1692519768623.jpg":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} class="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
      </div>
    )
  }
}

export default NewsItem
