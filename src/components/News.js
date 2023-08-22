import React, { Component } from "react";
import NewsItem from "./NewsItem";


export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b2d34c7fda05445f9358dde25ea65069&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let passedData = await data.json()
    console.log(passedData);
    this.setState({articles:passedData.articles,totalArticles:passedData.totalResults})

  }
   handelPreviousClick = async()=>{
    console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b2d34c7fda05445f9358dde25ea65069&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let passedData = await data.json()
    console.log(passedData);
    this.setState({
      page: this.state.page - 1,
      articles: passedData.articles
    })
  }  
   handelNextClick = async()=>{
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {
      
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b2d34c7fda05445f9358dde25ea65069&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let passedData = await data.json()
    console.log(passedData);
    this.setState({
      page: this.state.page + 1,
      articles: passedData.articles
    })
  }
  } 
  render() {
    return (
      <div className="container my-3">
       <h1 className="text-center">Top Headlines</h1>
       
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
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPreviousClick}> &larr; Previous</button>
        <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handelNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
export default News;
