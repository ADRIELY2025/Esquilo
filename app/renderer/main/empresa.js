const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        name: document.getElementById('name').value,
        cpf_cnpj: document.getElementById('cpf_cnpj').value,
        telefone: document.getElementById('telefone').value
    };

    try {
        const result = await window.electronAPI.saveEmpresa(data);
        Swal.fire({
            title: "Empresa cadastrada com sucesso!",
            icon: "success",
            draggable: true
        });
        console.log('Empresa cadastrada com sucesso:', result);
    } catch (error) {
        Swal.fire({
            title: "Erro ao cadastrar empresa:",
            text:  error,
            icon: "error"
        });
        console.error('Erro ao cadastrar empresa:', error);
    }
});