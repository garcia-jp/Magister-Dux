function trocarBotao(elemneto){
    var disciplina = document.getElementById('disciplina').value
    var nivel = document.getElementById('nivel').value
    
    let downloadPath = '';
    let nameDownload = '';

    if (disciplina === 'matematica' && nivel === 'basico') {
        downloadPath = 'downloads\\matematica_basico.pdf';
        nameDownload = 'lista_matematica_basico.pdf';
    } else if (disciplina === 'matematica' && nivel === 'medio') {
        downloadPath = 'downloads\\matematica_medio.pdf';
        nameDownload = 'lista_matematica_medio.pdf';
    } else if (disciplina === 'portugues' && nivel === 'basico') {
        downloadPath = 'downloads\\portugues_basico.pdf';
        nameDownload = 'lista_portugues_basico.pdf';
    } else if (disciplina === 'portugues' && nivel === 'medio') {
        downloadPath = 'downloads\\portugues_medio.pdf';
        nameDownload = 'lista_portugues_medio.pdf';
    }

    document.getElementById('download-button').href = downloadPath;
    document.getElementById('download-button').download = nameDownload;
}