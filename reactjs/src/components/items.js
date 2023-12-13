import React,{Component} from "react";
import * as xlsx from 'xlsx'
export default class Items extends Component{
 
    state={
        name:'',
        age:'',
        nameUpdate:'',
        ageUpdate:'',
        id:'',
        file:[],
        i:1
    }
    handleInputExcel(e){
        let fileName=e.target.files[0].name
        let index=fileName.lastIndexOf(".")+1
        let pathCheck=fileName.slice(index,index+10)
        console.log(pathCheck,'pathh');
        if(pathCheck=="xlsx"){
        this.setState({file:e.target.files, i:1})}
        
        else{
            e.value=''
            this.setState({i:0})
           console.log(e.target.value,'logg');
        }
    }
    handleExport(){
        for( let i=0; i<this.props.items.length; i++){
            this.props.items[i]._id=i+1
        }
        let ws= xlsx.utils.json_to_sheet(this.props.items)
        let wb = {Sheets: {data:ws}, SheetNames:['data']}
        xlsx.writeFileXLSX(wb,'exceltest.xlsx')
    }
    handleAdd() {
        this.props.addItem({ name: this.state.name, age: this.state.age })
    }
    handleUpdate(){
        this.props.updateItem({
            id:this.state.id,
            name:this.state.nameUpdate,
            age:this.state.ageUpdate
        })
    }
    handleDelete(id){
        this.props.deleteItem(id)
    }
    render(){
        let listData=[]
        if(this.props.items){
            listData=this.props.items.map((item,key)=>{
                return(
                    <tr key={key}>
                        <th>{key+1}</th>
                        <th>{item.name}</th>
                        <th>{item.age}</th>
                        <th><button onClick={()=>this.handleDelete(item._id)}>delete</button></th>
                        <th><button onClick={()=>this.setState({id:item._id,ageUpdate:item.age,nameUpdate:item.name})}>push</button></th>

                    </tr>
              
              )
            })
        }
        return(
            <div>
                <input  multiple type='file' onChange={(e)=>{this.handleInputExcel(e)}}/>
                <button onClick={()=>this.props.import({file:this.state.file})}>import</button>
                <p  style={{visibility: this.state.i===0 ?'visible' :'hidden',color:'red'}}> chon sai kieu file</p>
                <div>
                <input placeholder="nhap ten" onChange={(e)=>this.setState({name:e.target.value})}/>
                <input type='text' placeholder="nhap tuoi" onChange={(e)=>this.setState({age:e.target.value})}/>
                <button onClick={()=>this.handleAdd()}>add</button>
                </div>
                <div>
                <input value={this.state.nameUpdate} placeholder="nhap ten" onChange={(e)=>this.setState({nameUpdate:e.target.value})}/>
                <input type='text' value={this.state.ageUpdate} placeholder="nhap tuoi" onChange={(e)=>this.setState({ageUpdate:e.target.value})}/>
                <button onClick={()=>this.handleUpdate()}>update</button>
                </div>
                
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Ten  </th>
                            <th>Tuoi </th>
                        </tr>
                        {listData}

                        </tbody>
                    </table>
                    <button onClick={()=>this.handleExport()}>Export</button>
                </div>
            </div>
        )
    }
}