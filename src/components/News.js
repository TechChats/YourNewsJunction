import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log("newsItem constructor")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            
        }
    }

    async componentDidMount() {

        try {
            console.log("cdm render")
            let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-02-16&sortBy=publishedAt&apiKey=8488cba818a44e7c81c45cac2b4a9834&page=1";
            // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8488cba818a44e7c81c45cac2b4a9834&page=${this.state.page + 1}&pageSize=15`;

            let parsedJsonData = await fetch(url).then(res => res.json())
            console.log(parsedJsonData);
            console.log(parsedJsonData.totalResults);

            // fetch(url).then(function(response){
            //     response.json().then(function(jsonParsedData) {
            //         console.log(jsonParsedData);
            //         this.state.articles.push(jsonParsedData)
            //     });
            // }).catch(function(error) {
            //     console.log('Fetch Error:', error);
            // });
            // let jsonParsedData = await data.json;

            this.setState({
                articles: parsedJsonData.articles,
                totalResults: parsedJsonData.totalResults
            })
        } catch (error) {
            console.log(error)
        }
    }

    handlePrevPage = async () => {
        // console.log("prev page")
        
        let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-02-16&sortBy=publishedAt&apiKey=8488cba818a44e7c81c45cac2b4a9834&page=${this.state.page + 1}&pageSize=15`;

        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8488cba818a44e7c81c45cac2b4a9834&page=${this.state.page - 1}&pageSize=15`;
        let parsedJsonData = await fetch(url).then(res => res.json())
        console.log(parsedJsonData);
        console.log(this.state.page)

        this.setState({
            page: this.state.page - 1,
            articles: parsedJsonData.articles
        })

        console.log(this.state.page)

    }

    handleNextPage = async () => {
        // console.log("next page")

        //check if next page is present
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 20)) {
            let url = `https://newsapi.org/v2/everything?q=tesla&from=2023-02-16&sortBy=publishedAt&apiKey=8488cba818a44e7c81c45cac2b4a9834&page=${this.state.page + 1}&pageSize=15`;
            // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8488cba818a44e7c81c45cac2b4a9834&page=${this.state.page + 1}&pageSize=15`;
            let parsedJsonData = await fetch(url).then(res => res.json())
            console.log(parsedJsonData);
            console.log(this.state.page)
            this.setState({
                page: this.state.page + 1,
                articles: parsedJsonData.articles
            })
            console.log(this.state.page)
            
        }else{
            console.log("no next item")
        }


    }

    render() {
        return (
            <div className="container my-3">
                <h2>YourNewsJunction - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {

                        // here as we use map() we need to give a unique key in the return (parent element here <div>)
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevPage}>&laquo; Previous</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleNextPage}>Next &raquo; </button>
                </div>
            </div>
        )
    }
}

export default News