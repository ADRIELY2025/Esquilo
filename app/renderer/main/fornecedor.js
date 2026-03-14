const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
    };

    try {
        const result = await window.electronAPI.saveFornecedor(data);
        console.log('Salvo com sucesso:', result);
        
    } catch (error) {
        console.error('Erro ao salvar:', error);
        alert('Erro ao cadastrar!');
    }
});