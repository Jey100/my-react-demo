

//模拟数据库
var datas  = [{ descrip:'xxxxx', sex: '男', age: 20, name: 'aa', role: '主任'},
	{ descrip:'aa', sex: '女', age: 21, name: 'cc', role: '学生'},
	{ descrip:'hehe', sex: '女', age: 22, name: 'kobebryant', role: '学生'}]



class Entity {
    constructor(item){
	    this.name = item.name;
		this.age = item.age || 0;
		this.sex = item.sex;
		this.role = item.role;
	}
}

export default class Start {
	constructor(){
		this.allEntityBack = this.allEntity = [
		new Entity(datas[0]),
		new Entity(datas[1]),
		new Entity(datas[2])
		]



	}

	//备份数据函数
	back(){
		this.allEntityBack = this.allEntity;
	}

	//删
	remove(name) {
		let  newEntity = this.allEntity.filter(item => {
			return item.name != name;
		});
		this.allEntity = newEntity;
		this.back();
		return this;
	}

	//添加
	add(item){
		this.allEntity.push(new Entity(item));
		this.back();
		return this;
	}

	//查找
	search(name){
		if(name){
			let  newEntity = this.allEntity.filter(item => {
				return item.name.indexOf(name) > -1;
			});
			this.allEntity = newEntity;
		}else{
			this.allEntity = this.allEntityBack;
		}
		return this;
	}

}