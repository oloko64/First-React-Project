import React from 'react'

function Formu() {
    function addToTable() {
        //console.log(1234)
        var var_album = document.getElementById("album").value
        var var_banda = document.getElementById("banda").value
        var var_musicas = document.getElementById("qtd_musicas").value
        var var_tempo = document.getElementById("tempo").value

        if (var_album !== '' && var_banda !== '' && var_musicas !== '' && var_tempo !== '') {
            var table = document.getElementById("tabela");

            var row = table.insertRow(1);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = var_album;
            cell2.innerHTML = var_banda;
            cell3.innerHTML = var_musicas;
            cell4.innerHTML = var_tempo;

            document.getElementById("clearForm").reset();
        }
        else {
            alert("Preencha todos os campos")
        }
    }

    return (
        <div id="formulario" className="rounded-lg">
            <form id="clearForm">
                <label>Nome do album</label><br/>
                <input className="form-control" id="album"></input><br/>

                <label>Nome da banda</label><br/>
                <input className="form-control" id="banda"></input><br/>

                <label>Quantidade de musicas</label><br/>
                <input className="form-control" id="qtd_musicas"></input><br/>

                <label>Tempo total</label><br/>
                <input className="form-control" id="tempo"></input><br />
            </form>
            <button type="button" onClick={addToTable} className="btn btn-light">Enviar</button>
        </div>

    )
}

export default Formu