import React from 'react';
import injectTapEventPlugin  from "react-tap-event-plugin";
injectTapEventPlugin({
    shouldRejectClick: function (say2,say) {
        return true;
    }
});

class Hello extends React.Component {
    constructor(){
        super();
        this.state={
            display:"block"
        }
    }
    componentDidMount(){
        document.onclick=this.parentClick;
    }

    say(e){
        this.setState({
            display:this.state.display == "block" ? "none":"block"
        })
        //e.stopImmediatePropagation();
    }


    say2(e){
        this.refs.box.style.display = this.refs.box.style.display == "block" ? "none":"block"
       // e.preventDefault();
       // e.preventDefault();    // 阻止默认事件
       // e.stopPropagation();
      //  e.stopImmediatePropagation();
        //e.nativeEvent.stopImmediatePropagation();
    }

    parentClick(){
        alert("parent");
    }

  render() {
    return (
      <div className="App">
          <div>
          <button onClick={this.say.bind(this)}>点击我1</button>
          <button onClick={()=>{this.say()}}>点击我11</button>
          <button onClick={()=>{this.say2()}}>点击我2</button>
          </div>
          <div ref="box" className="box" style={{display:this.state.display,width:"200px",height:"200px",background:"red"}}>a</div>
      </div>
    );
  }
}

export default Hello;
