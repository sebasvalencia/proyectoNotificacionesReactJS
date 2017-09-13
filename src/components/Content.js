import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Content extends Component{
  render(){

    const {activities} = this.props;

    return(
      <div className="content">
        <div className="line"></div>

        {activities.map((activity) =>{
          return(
            <div className="item">
              <div className="avatar">
                <img src={activity.user.avatar}/>
                  {activity.user.name}
              </div>
              <span className="time">{activity.timestamp}</span>
              <p>{activity.text}</p>
              <div className="commentCount">{activity.comments.length}</div>
            </div>
          );
        })}

      </div>
    );
  }
}

export default Content;
