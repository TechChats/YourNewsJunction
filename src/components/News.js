import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
            "id": "les-echos",
            "name": "Les Echos"
            },
            "author": "Les Echos",
            "title": "Retraites : les prévisions de trafic dans les transports ce mercredi",
            "description": "La circulation sera plus fluide dans le métro parisien que dans les trains et les RER. Les perturbations en détail.",
            "url": "https://www.lesechos.fr/industrie-services/tourisme-transport/retraites-les-previsions-de-trafic-dans-les-transports-ce-mercredi-1915583",
            "urlToImage": "https://media.lesechos.com/api/v1/images/view/6410a3e7047c524ff1388129/1280x720/0703560674058-web-tete.jpg",
            "publishedAt": "2023-03-14T16:40:55Z",
            "content": "Le mouvement de grève contre la réforme des retraites se poursuit avec une huitième journée de mobilisation prévue ce mercredi. Dans des prévisions publiées ce mardi, la RATP annonce « un trafic quas… [+2519 chars]"
            }
    ]


    constructor() {
        super();
        console.log("newsItem constructor")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }


    render() {
        return (
            <div className="container my-3">
                <h2>YourNewsJunction - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                    
                    // here as we use map() we need to give a unique key in the return (parent element here <div>)
                        return (<div className="col-md-4" key ={element.url}>
                            <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl = {element.url} />
                        </div>)
                    })}


                </div>
            </div>
        )
    }
}

export default News