import React from 'react';
import MyListItem from './MyListItem';
class MyTable extends React.Component {
    constructor(){
        super();
    }


  render() {
      var items = [];
      if(this.props.items){
          if( this.props.items.length == 0){
              items.push(<tr><td colSpan="5" className="tempEmpty">暂无用户</td></tr>);
          }else{
              this.props.items.forEach(item => {
                  items.push(<MyListItem key={item.name} name={item.name} item={item} removeTr={this.props.remove.bind(this)}/>);
              });
          }
      }else{
          items.push(<tr><td colSpan="5" className="tempEmpty">暂无用户</td></tr>);
      }



    return (
      <table className="table">
          <thead>
            <th>姓名</th>
            <th>年龄</th>
            <th>身份</th>
            <th>性别</th>
            <th>操作</th>
          </thead>
          <tbody>
            {items}
          </tbody>
      </table>
    );
  }
}

export default MyTable;
