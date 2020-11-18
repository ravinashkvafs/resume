import React from 'react';
import './Contact.css';
import '../../assets/styles/shared.css';

function Card({ flex = 1, icon = '', text = '', onCardPress = () => { } }: any) {
  return (
    <div className="card" style={{ flex }} onClick={() => onCardPress()} >

      <i className={`material-icons custom-icon`}>{icon}</i>

      <span className="text">{text}</span>

    </div>
  );
}

export default function Contact() {

  return (
    <div className="VarticalContainer">

      <span className="title">Get in Touch</span>

      <div className="card-container">

        <Card flex={0.4} icon={'phone'} text={'+91-9911920067'} />

        <Card flex={0.4} icon={'email'} text={'ravinashkvafs@gmail.com'} onCardPress={() => (window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ravinashkvafs@gmail.com`))} />

      </div>

    </div>
  );

}