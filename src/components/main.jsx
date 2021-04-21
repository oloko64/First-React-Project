import React from 'react'

function Main() {
    return (
        <div>
            <table id="tabela" className="table">
                <tbody>
                    <tr>
                        <th>Nome do album</th>
                        <th>Banda</th>
                        <th>Quantidade de musicas</th>
                        <th>Tempo total</th>
                    </tr>
                    <tr>
                        <td>Joaozinho pé de pano</td>
                        <td>Jeffs Hits</td>
                        <td>50</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Main