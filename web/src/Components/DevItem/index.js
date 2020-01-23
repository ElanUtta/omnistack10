import React from 'react'
import './styles.css'

import logo_del from "../../public/trash.png"

function DevItem({ dev }) {

    return (
        <li className='dev-item' >
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className='user-info'>
                    <strong>{dev.name}</strong>
                    <span> {dev.techs.join(', ')} </span>
                </div>
                <a href="#">
                    <img src={logo_del} alt="" />
                </a>
            </header>

            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}> Acessar Perfil</a>
        </li>
    )
}

export default DevItem