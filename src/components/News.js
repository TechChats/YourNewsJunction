import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    News.defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general'
    }

    News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [totalResults, setTotalResults] = useState(0)


   const  updateNews = async () =>  {
        props.setProgressBar(10);
        let url = props.url + `&country=${props.country}` + `&page=${page}` + `&pageSize=${props.pageSize}` + `&category=${props.category}`
        setLoading(true)
        console.log(page)

        props.setProgressBar(30);
        let parsedJsonData = await fetch(url).then(res => res.json())

        props.setProgressBar(80);
        console.log(parsedJsonData);

        setArticles(parsedJsonData.articles)
        setTotalResults(parsedJsonData.totalResults)
        setLoading(false)

        props.setProgressBar(100);

    }

    useEffect(() => {
        updateNews();
    }, [])
    

 

    // handleNextPage = async () => {
    //     this.setState({ page: this.state.page + 1 });
    //     console.log(this.state.page)
    //     this.updateNews();
    //  }

    // handlePrevPage = async () => {

    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }

    const fetchMoreData = async () => {

        // this.setState({ page: this.state.page + 1 });
        // console.log(this.state.page)
        setPage(page+1)
        let url = props.url + `&country=${props.country}` + `&page=${page}` + `&pageSize=${props.pageSize}` + `&category=${props.category}`
        // this.setState({ loading: true })
        console.log(page)
        let parsedJsonData = await fetch(url).then(res => res.json())
        console.log(parsedJsonData);

        setArticles(articles.concat(parsedJsonData.articles))
        setTotalResults(parsedJsonData.totalResults)

        // this.setState({
        //     articles: this.state.articles.concat(parsedJsonData.articles),
        //     totalResults: parsedJsonData.totalResults,
        // })

    }

    
        return (
            <div className="container my-5">
                {console.log("render")}
                <h2 className="text-center my-4">YourNewsJunction - Top Headlines</h2>
                {loading && <Spinner />}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length != totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                // here as we use map() we need to give a unique key in the return (parent element here <div>)
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 40) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevPage}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextPage}>Next &raquo; </button>
                </div> */}
            </div>
        )
    }

export default News