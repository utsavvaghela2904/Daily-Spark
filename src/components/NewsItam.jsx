import React, { Component } from 'react'

export class NewsItam extends Component {
  render() {
    let {title, description,  imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div class="card">
          <img src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"}  alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}...</h5>
            <p class="card-text">{description}</p>
            <a href={newsUrl} target='_blank' class="btn btn-outline-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItam
