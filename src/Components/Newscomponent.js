import React, { Component } from 'react'

export class Newscomponent extends Component {
  render() {
      let {title , description, imgurl ,url} = this.props;
    return (
        <div className="card">
        <img src={imgurl?imgurl:"https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} rel="noreferrer" className="btn btn-dark sm" target="_blank">Read More</a>
        </div>
      </div>
    )
  }
}

export default Newscomponent