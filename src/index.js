import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Tabela from './components/main'
import Formu from './components/form'

ReactDOM.render(
    <div>   
        <Formu></Formu>
        <Tabela></Tabela>
    </div>,
    document.getElementById('root')
)