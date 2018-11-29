
import React from 'react';
import "./style.less";

class PageTitle extends React.Component{
 
    componentWillMount(){
        document.title = this.props.title;
    }
    render(){
        return (
            <div className="page-title-wrapper">
                    <h1 >{this.props.title}</h1>
            </div>
        );
    }
}

export default PageTitle;