import React, { Component } from 'react'
import Newscomponent from './Newscomponent'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import BeatLoader from "react-spinners/BeatLoader"
export class News extends Component {
    static defaultProps = {
        category: ""
    }
    static propTypes = {
        category: PropTypes.string
    }
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 0,
            hasMore :true,
            psize:18,
            totalResults:0
        }

    }
    async componentDidMount() {
        this.setState({page:this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&page=${this.state.page}&apiKey=9b74eceaa6a94418a20826771b794cf0`;
        let data = await fetch(url);
        let pdata = await data.json();
        console.log(pdata)
        this.setState({ articles: pdata.articles,
            totalResults:pdata.totalResults
         });
    }
    

    fetchMoreData = async() => {
      
       let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&page=${this.state.page+1}&apiKey=9b74eceaa6a94418a20826771b794cf0`;
       this.setState({page:this.state.page+1})
       console.log(this.state.page);
        let data = await fetch(url);
        let pdata = await data.json();
        console.log(pdata)
        this.setState({ articles: this.state.articles.concat(pdata.articles), totalResults:pdata.totalResults });
        console.log(pdata.totalResults);
        console.log(this.state.articles.length);
        
    };

    render() {
        return (
            <>
                
                    <h2 className='my-4' style={{textAlign: "center"}}>The Top Headlines are</h2>
                    <div style={{textAlign: "center" }}>

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        
                        hasMore={this.state.articles.length!==this.state.totalResults}
                        
                        loader=<BeatLoader color="#36d7b7"  />
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                    <div className='container my-4'>
                        <div className='row my-4 mb-4'>
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Newscomponent title={element.title} description={element.description} imgurl={element.urlToImage} url={element.url} />
                                </div>
                            })
                            }
                        </div>
                        </div>
                    </InfiniteScroll>

                    </div>


                
            </>
        )
    }
}

export default News