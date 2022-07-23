import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static propTypes={
    category :  PropTypes.string,
    pagesize : PropTypes.number
  }

  static defaultProps={
    category : 'sports',
    pagesize : 4
  }
  

  constructor() {
    super();

    this.state = {
      articles: [],
      page: 1, 
      total :0
    };
  }

  async componentDidMount(){
    this.setState({
      loading: true,
    })
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=09f9cbe6bb924e48b03a57fa981ebe41&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);


    this.setState({
      articles : parsedData.articles,  
      total : parsedData.totalResults,
      loading : false,
    }) 
  }

  handlePrevClick =async ()=>{
    this.setState({
      loading: true,
    })
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=09f9cbe6bb924e48b03a57fa981ebe41&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({
      page :this.state.page-1,
      articles : parsedData.articles,  
      loading:false
    }) 
  }

  handleNextClick = async ()=>{
    this.setState({
      loading: true,
    })
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=09f9cbe6bb924e48b03a57fa981ebe41&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    
    this.setState({
      page :this.state.page+1,
      articles : parsedData.articles, 
      loading: false 
    }) 
  }

  render() {
    return (
      <div className="container my-3">
        {this.state.loading && <Spinner/>}
        <h1 style={{marginTop:"90px" , marginBottom:"10px"}}>Top Headlines</h1>

        <div className="row">
          {!this.state.loading&& this.state.articles.map((element) => {
            return (
              <div className="col md-4 my-2 "  key={element.url}>
                <NewsItem
                  title={element.title}
                  desc={element.content}
                  img={!element.urlToImage?"https://image.cnbcfm.com/api/v1/image/107092081-1658411736108-Amazon_EDV6.jpg?v=1658411777&w=1920&h=1080":element.urlToImage}
                  url={element.url}
                  author={element.author}
                  publish={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between my-3">
        <button type="button" disabled ={this.state.page===1} className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
        <button type="button" disabled={this.state.page+1 >this.state.total/3} className="btn btn-dark" onClick={this.handleNextClick} >Next</button>
        </div>
      </div>
    );
  }
}

export default News;
