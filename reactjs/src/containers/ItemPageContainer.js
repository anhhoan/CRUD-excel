import * as actions from '../actions/ItemPageAction'
import { connect } from 'react-redux'
import Items from '../components/items'
import React from 'react'
class ItemPageContainer extends React.Component{
    componentDidMount(){
        this.props.getItem()
    }
    render(){
        return(
            <Items {...this.props}/>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        items:state.items.listItem

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getItem:()=>{
            dispatch(actions.getItemRequest())
        },
        import:(data)=>{
            dispatch(actions.importItemRequest(data))
        },
        addItem:(data)=>{
            dispatch(actions.addRequest(data))
        },
        updateItem:(data)=>{
            dispatch(actions.updateRequest(data))
        },
        deleteItem:(data)=>{
            dispatch(actions.deleteRequest(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemPageContainer)