import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export default function Socials () {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/luciano-paniccia-847868232/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Luciano-Paniccia-Git" target="_blank"><BsGithub/></a>
            <a href="https://www.instagram.com/chucho.paniccia/" target="_blank"><BsInstagram/></a>
        </div>
    )
}