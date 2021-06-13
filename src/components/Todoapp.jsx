import React, { Component } from 'react'
import "./Todoapp.css"

export class Todoapp extends Component {
    state = {
        input:"",
        items:[]
    };
    handleChange = event =>{
        this.setState({
            input: event.target.value
        });
    };
    storeItems =event=>{
        event.preventDefault();
        const { input } = this.state;


        this.setState({
            items: [...this.state.items, input],
            input: ""
        });
    };
    deleteItem =(key)=>{
        // const allItems= this.state.items;

        this.state.items.splice(key,1);
        this.setState({
            items:this.state.items.filter((index) => index !== key)
        })
    };
    editItem =(key)=>{
      const edit = window.prompt('Type what to edit')

        this.state.items.splice(key,1, edit)
        this.setState({items:this.state.items.filter((index) =>index!==key)})
    }
    deleteAll =() =>{
        // const everyItem = this.state.items;
        // everyItem.splice(key);
        this.setState({
            items:[]
            // items:everyItem
        })
    }

    render() {
        const {input, items} =this.state;
        console.log(items);
        return (
            <div className="todo-container">

                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>Todo App</h1>
                    <div><input type="text" value={this.state.input} onChange={this.handleChange} placeholder="Enter items..."/>
                    <button onClick={this.storeItems}>Add</button>
                    </div>
                </form>

                    <ul>
                        {items.map((data,index)=>(
                            <div>
                            <li key={index}>{index}, {data} <div><i class="fas fa-edit" onClick={()=>this.editItem(index)}></i> <i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i></div></li>
                            </div>
                            )
                            )}
                    </ul>
                            <button className="delete" onClick={()=>this.deleteAll()}>Delete All</button>
            </div>
        )
    }
}

export default Todoapp
