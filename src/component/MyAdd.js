import React from 'react';
import ReactDOM from 'react-dom';


export default class MyAdd extends React.Component{
    constructor(){
        super();
    }


    handlerAddClick(e){
        e.preventDefault();
        let item = {};
        let addForm = ReactDOM.findDOMNode(this.refs.addForm); //获取表单对象
        item.name = addForm.querySelector("#addName").value.trim();
        item.age = addForm.querySelector("#addAge").value.trim();
        item.sex = addForm.querySelector("#addSex").value.trim();
        item.role = addForm.querySelector("#addRole").value.trim();
        addForm.reset();
        //此处应在返回添加成功信息后确认
        let tips = ReactDOM.findDOMNode(this.refs.tips);
        tips.style.display = 'block';
        setTimeout(function(){
            tips.style.display = 'none';
        }, 1000);
        this.props.addItem(item);
    }

    render(){
        return (
            <div className="addFormBox">
                <h4>添加</h4>
                <hr/>
                <form ref='addForm' className="addForm">
                    <div>
                        <label for='addName' style={{'display': 'block'}}>姓名</label>
                        <input ref='addName' id='addName' type='text' placeholder=' Name'/>
                    </div>
                    <div>
                        <label for='addAge' style={{'display': 'block'}}>年龄</label>
                        <input ref='addAge' id='addAge' type='text' placeholder=' Age(0-150)'/>
                    </div>
                    <div>
                        <label for='addSex' style={{'display': 'block'}}>性别</label>
                        <select ref='addSex' id='addSex'>
                            <option value='男'>男</option>
                            <option value='女'>女</option>
                        </select>
                    </div>
                    <div>
                        <label for='addRole' style={{'display': 'block'}}>身份</label>
                        <select ref='addRole' id='addRole'>
                            <option value='主任'>主任</option>
                            <option value='老师'>老师</option>
                            <option value='学生'>学生</option>
                            <option value='实习'>实习</option>
                        </select>
                    </div>
                    <p ref="tips" className='tips' >提交成功</p>
                    <div>
                        <button onClick={this.handlerAddClick.bind(this)}>提交</button>
                    </div>
                </form>
            </div>
        )
    }
}
