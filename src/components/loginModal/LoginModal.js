import React, {useState} from 'react';
import './loginModal.css';
import Modal from 'react-responsive-modal';

export default function ({ showModal, closeModal }) {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    function signIn() {
        let userName = document.getElementById('name').value;
        let userPass = document.getElementById('pass').value;

        setName(userName);
        setPass(userPass);
    }

    function sendData(e) {
        e.preventDefault();
        
        let body = {name,pass,}

        console.log(body);
    }

    return (
        <Modal open={showModal} onClose={() => closeModal(false)} center className='sign-modal'>
            <h4 className='text-center'>Sign In</h4>
            <form className='form-modal'>
                <input 
                    type="text" 
                    onChange={signIn}
                    placeholder='User Name' 
                    className='form-control modal-input' 
                    id='name'/>
                <input 
                    type="password" 
                    onChange={signIn}
                    placeholder='Password'
                    className='form-control modal-input' 
                    id='pass'/>
                <input
                    onClick={sendData}
                    type="submit" 
                    value='Log In' 
                    className='btn btn-sm btn-dark modal-input' />
            </form>
        </Modal>
    )
}