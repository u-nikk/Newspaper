import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount(){
    console.log("cdm")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b2d34c7fda05445f9358dde25ea65069"
    let data = await fetch(url);
    let passedData = await data.json()
    console.log(passedData);
    this.setState({articles:passedData.articles})

  }
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
       
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4"  key={element.url}>
            <NewsItem
            title={element.title?element.title.slice(0,45): ""}
              description={element.description?element.description.slice(0,88):""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}/>
          </div>
        })}
          
        </div>
      </div>
    );
  }
}
export default News;
