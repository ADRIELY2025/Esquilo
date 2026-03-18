const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        name: document.getElementById('name').value,
        cnpj: document.getElementById('cnpj').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
    };

    try {
        const result = await window.electronAPI.saveEmpresa(data);
        console.log('Empresa cadastrada com sucesso:', result);
        alert('Empresa cadastrada com sucesso!');
    } catch (error) {
        console.error('Erro ao cadastrar Empresa:', error);
        alert('Erro ao cadastrar Empresa!');
    }
});