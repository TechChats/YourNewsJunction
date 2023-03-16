import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log("newsItem constructor")
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        
        try{
            console.log("cdm render")
            let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-02-16&sortBy=publishedAt&apiKey=8488cba818a44e7c81c45cac2b4a9834";
            
            let parsedJsonData = await fetch(url).then(res => res.json())
            console.log(parsedJsonData);
            


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
                articles: parsedJsonData.articles
            })
        }catch(error){
                console.log(error)
        }
        
         

    }


    render() {
        return (
            <div className="container my-3">
                <h2>YourNewsJunction - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                    
                    // here as we use map() we need to give a unique key in the return (parent element here <div>)
                        return <div className="col-md-4" key ={element.url}>
                            <NewsItem  title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 80):""} imageUrl={element.urlToImage} newsUrl = {element.url} />
                        </div>
                    })}


                </div>
            </div>
        )
    }
}

export default News