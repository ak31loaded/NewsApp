import React, { useEffect,useState } from 'react'
import Newscomponent from './Newscomponent'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import BeatLoader from "react-spinners/BeatLoader"
const News=(props)=> {
    
    
    const [articles, setarticles] = useState([]);
    
    const [page, setpage] = useState(0);
    
    const [totalResults, settotalResults] = useState(0)
        
   
        

    useEffect(() => {
      update();
      
    }, [])
    
    const update=async()=> {
        setpage(page+1);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&apiKey=9b74eceaa6a94418a20826771b794cf0`;
        let data = await fetch(url);
        let pdata = await data.json();
        console.log(pdata)
        setarticles(pdata.articles);
        settotalResults(pdata.totalResults);
         let cat=props.category
         cat=(cat[0].toUpperCase() + cat.substring(1))
         document.title=cat+" - NewsMonkey";
    } 

    

    const fetchMoreData = async() => {
      
       let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page+1}&apiKey=9b74eceaa6a94418a20826771b794cf0`;
       setpage(page+1);
       
        let data = await fetch(url);
        let pdata = await data.json();
        setarticles(articles.concat(pdata.articles));
        settotalResults(pdata.totalResults);
        
        
    };


        return (
            <>
                
                    <h2  style={{textAlign: "center",margin:"70px auto 20px"}} >The Top {props.category} News are</h2>
                    <div style={{textAlign: "center" }}>

                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        
                        hasMore={articles.length!==totalResults}
                        
                        loader=<BeatLoader color="#36d7b7"  />
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                    <div className='container my-4'>
                        <div className='row my-4 mb-4'>
                            {articles.map((element) => {
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
News.defaultProps = {
    category: ""
}
News.propTypes = {
    category: PropTypes.string
}

export default News