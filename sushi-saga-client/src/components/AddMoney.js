import React from 'react'

class AddMoney extends React.Component {
render() {
 return(
<div>
    <form onSubmit={this.props.handleSubmit}>
      <input name="money" placeholder="enter amount" />
      <button>Add More Money</button>
    </form>
</div>
 )
}
}



export default AddMoney;