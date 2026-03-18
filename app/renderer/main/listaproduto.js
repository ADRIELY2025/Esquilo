const table = new Datable('#tabela-produto', {
    responsive: true,
    processing: true,
    serverSide: true,
    ajax: async (data, calback) => {
       const filter ={
        term: data?.search?.value,             //Termo de pesquisa.
        limit: data?.length,                   //Limite de registros a ser selecionado do banco.
        offset: data?.start,                  //A pesquisa inicia no registro Ex: 5, 10.
        orderType: data?.order[0]?.dir,       //Tipo de ordenação.
        column: data?.order[0]?.column        //Coluna a ser filtrada.
       }
       try {
        const response = await window.electronAPI.searchProduct(filter);
       calback({
        draw: response?.draw ?? data?.draw ?? 0,
        recordsTotal: response?.recordsTotal ?? 0,
        recordsFiltered: response?.recordsFiltered ?? 0,
        data: response.data ?? []
       });
        
       } catch (error) {
        const response = await window.electronAPI.searchProduct(filter);
       calback({
        draw:  0,
        recordsTotal:  0,
        recordsFiltered:  0,
        data: response.data ?? []
       });
        
       }
       const response = await window.electronAPI.searchProduct(filter);
       calback({
        draw: response?.draw ?? data?.draw ?? 0,
        recordsTotal: response?.recordsTotal ?? 0,
        recordsFiltered: response?.recordsFiltered ?? 0,
        data: response.data ?? []
       });
    },
    column: [
        {data: 'id', title: 'código' },
        {data: 'name', title: 'Nome'},
        {data: 'price', title: 'Preço de venda'}
    ]
});
