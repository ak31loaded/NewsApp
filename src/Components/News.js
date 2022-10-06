import React, { Component } from 'react'
import Newscomponent from './Newscomponent'
import PropTypes from 'prop-types'
   
export class News extends Component {
    static defaultProps={
        category:""
    }
    static propTypes={
        category: PropTypes.string
    }
    articles=[]
constructor()
{
    super();
    this.state = {
        articles: this.articles,
        loading: false,
    }

}
    async componentDidMount()
{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9b74eceaa6a94418a20826771b794cf0`;
    let data = await fetch(url);
    let pdata =await data.json();
    console.log(pdata)
    
    this.setState({ articles: pdata.articles });
}

render() {
    return (
        <div className='container my-4'>
            <h2 className='my-4'>The Top Headlines are</h2>
            <div className='row my-4 mb-4'>
                {this.state.articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <Newscomponent title={element.title} description={element.description} imgurl={element.urlToImage} url={element.url}/>
                    </div>
                })
                }


            </div>

        </div>
    )
}
}

export default News