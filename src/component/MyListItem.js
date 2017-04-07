import React from 'react';


class MyListItem extends React.Component {
    constructor(){
        super();
    }


    delete(e){
        this.props.removeTr(this.props.name);
    }

    detail(e){
        alert("查看详情")
    }

  render() {
    return (
      <tr>
          <td className=''>{this.props.item.name}</td>
          <td className=''>{this.props.item.age}</td>
          <td className=''>{this.props.item.role}</td>
          <td className=''>{this.props.item.sex}</td>
          <td className=''>
              <a className="itemBtn" onClick={this.delete.bind(this)}>删除 | </a>
              <a className="itemBtn" onClick={this.detail}>详情</a>
          </td>
      </tr>
    );
  }
}

export default MyListItem;
