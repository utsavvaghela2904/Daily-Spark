import React, { Component } from 'react'
import NewsItam from './NewsItam'
import Loder from './Loder'

export class News extends Component {

    constructor() {
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f815dd45cc694d34896bc78890e29151&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ 
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading:false
         });
            
    }

    handlePreviousPage = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f815dd45cc694d34896bc78890e29151&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ 
            articles: parsedData.articles, 
            page: this.state.page - 1 ,
            loading: false
        });
    }

    handleNextPage = async () => {
        console.log("Next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f815dd45cc694d34896bc78890e29151&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({ 
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
             });
        }
    }

    render() {
        return (
            <div className='container'>
                {/* This Is News Components */}
                <h1>Today's Top Headlines</h1>
                {this.state.loading && <Loder/> }
                <div className="row">
                    {! this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItam title={element.title ? element.title.slice(0, 55) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    }
                    )}

                </div>
                <div className='d-flex justify-content-between my-3'>
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-dark" onClick={this.handlePreviousPage}>&larr; Previous</button>             
                    <button type="button" className="btn btn-outline-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.page)} onClick={this.handleNextPage}>&rarr; Next</button>
                </div>
            </div>
        )
    }
}

export default News
