const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
    };

    try {
        const result = await window.electronAPI.saveCliente(data);
        console.log('Produto salvo com sucesso:', result);
        alert('Cliente salvo com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar produto:', error);
        alert('Erro ao salvar produto!');
    }
});