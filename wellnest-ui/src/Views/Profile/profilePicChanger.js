import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';


class ProfilePicChanger extends Component {
    constructor(props){
        super(props);
        this.state={
            visible : false,
            imagesArray:  [props.pp1, props.pp2, props.pp3]
        }
    }
   

  showModal = () => {
      this.setState({
          visible: true,
      })
  }

    handleOk = e => {
    console.log(e);
    this.setState({
        visible : false,
    })
  };

   handleCancel = e => {
    console.log(e);
    this.setState({
    visible: false,
    })
  };
    render(){
        const imageMapper =this.state.imagesArray.map((image, index) => {
            return (
                <img src ={image} alt = "profile pic"
                 onClick={() => this.props.handleImageChange(image)}
                height="48px"
                />
            )
        })
  return (
    <div className="ProfilePicChanger">
     <Button type ="primary" onClick={this.showModal}>
         Change Picture
     </Button>
     <Modal
     title = "Profile pic changer"
     visible={this.state.visible}
     onOk={this.handleOk}
     onCancel={this.handleCancel} 
     >

     {imageMapper}
    </Modal>
    </div>
  );
}
}
export default ProfilePicChanger;
