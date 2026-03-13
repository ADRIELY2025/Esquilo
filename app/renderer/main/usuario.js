const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        nome: document.getElementById('nome').value,
        surname: document.getElementById('surname').value,
    };

    try {
        const result = await window.electronAPI.saveUsuario(data);
        console.log('Usuario salvo com sucesso:', result);
        alert('Usuario salvo com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar usuario:', error);
        alert('Erro ao salvar usuario!');
    }
});