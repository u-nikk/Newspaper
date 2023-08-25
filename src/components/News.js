import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 70,
    category: 'general',
  };
  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b2d34c7fda05445f9358dde25ea65069&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let passedData = await data.json()
    this.props.setProgress(70);
    this.setState({ articles: passedData.articles, totalArticles: passedData.totalResults })
    this.props.setProgress(100);
  }
  

  async componentDidMount() {
    this.updateNews();
  }
  handelPreviousClick = async () => {
    console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b2d34c7fda05445f9358dde25ea65069&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let passedData = await data.json()
    console.log(passedData);
    this.setState({
      page: this.state.page - 1,
      articles: passedData.articles
    })
  }
  handelNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b2d34c7fda05445f9358dde25ea65069&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let passedData = await data.json()
      console.log(passedData);
      this.setState({
        page: this.state.page + 1,
        articles: passedData.articles
      })
    }
  }

  fetchMoreData = async () => {
   this.setState({page: this.state.page + 1})
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b2d34c7fda05445f9358dde25ea65069&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let passedData = await data.json()
    this.setState({ articles: this.state.articles.concat(passedData.articles), totalResults : passedData.totalResults, })
  };
  render() {
    return (
      <>
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>Top Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
       <div className="container">
        <div className="container">
        </div>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
export default News;