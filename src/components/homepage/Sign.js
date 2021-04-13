import React from 'react'
import {Dropdown,Menu} from 'semantic-ui-react'
import Login_Img from "./homepage/img/profile-icon.png";
import Modal from './Modal';
import { Link } from 'react-router-dom';


const trigger = (
    <span>
        <img width="50px" src={Login_Img} alt="No pict shown" />
    </span>
);

const options = [
    { key: 1, text: 'Sign in', as: Link},
    { key: 2, text: 'Sign up', as: Link},
];

const optionsIn = [
    { key: 3, text: 'Profile', as: Link, to: '/Profile'},
    { key: 4, text: 'Log out', as: Link, to: '/Log_out'},
]


class DropdownSign extends React.Component{
    state={
        show:false
    };
    /*onClose={this.showModal}*/

    render() {
        return(
            <Menu compact>
                <Dropdown trigger={trigger} options={options} icon={null} onClose={this.showModal}>

                </Dropdown>
            </Menu>
        // with popup window
        // <Dropdown trigger={trigger} icon={null}>
        //     <div>
        //     <Dropdown.Menu>
        //     <Dropdown.Item onClose={this.showModal} text='Sign in' />
        //     <Dropdown.Item text='Sign up' />
        //     </Dropdown.Menu>
        // <Modal
        //     onClose={this.showModal}
        //     show={this.state.show}>
        // </Modal>
        // </div>
        // </Dropdown>

    )
    }

    showModal = () =>{
        this.setState({
            ...this.state,
            show: !this.state.show
        });
    };
}

export default DropdownSign
