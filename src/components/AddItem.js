import React from 'react';

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName: "",
            productPrice: 0
        }
    }
  render() {
    return (
      <form method='' action='' className='row mb-5' onSubmit={
        (e)=>{
            e.preventDefault();
            this.props.addItem(this.state.productName, Number(this.state.productPrice));
        }
      }>
        <div className="form-floating mb-3 col-4">
          <input
            type="text"
            name='productName'
            className="form-control"
            id="inputName"
            placeholder="name@example.com"
            onChange={(e)=>{
                this.setState({productName: e.currentTarget.value})
            }}
            value={this.state.productName}
          />
          <label htmlFor="inputFor">Name</label>
        </div>
        <div className="form-floating col-4">
          <input
            type="number"
            name='productPrice'
            className="form-control"
            id="inputPrice"
            placeholder="Password"
            onChange={(e)=>{
                this.setState({productPrice: e.currentTarget.value})
            }}
            value={Number(this.state.productPrice)}
          />
          <label htmlFor="inputPrice">Price</label>
        </div>
        <input 
        type="submit" 
        name='add' 
        className='btn btn-success btn-sm col-4' 
        value="Add"
        />
      </form>
    );
  }
}

export default AddItem;
