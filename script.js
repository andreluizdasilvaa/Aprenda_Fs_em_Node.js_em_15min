// Assim que importa o modulo fs
const fs = require('fs')

// assíncrono: NÃO bloqueiam a execução do código. Eles utilizam callbacks ou Promises para lidar com os resultados, permitindo que outras operações aconteçam enquanto esperam pela conclusão.
// síncrono: bloqueiam a execução do código até que a operação seja concluída, ou seja, o código só avança quando a operação termina.


// ===========================
// --| Leitura de Arquivos |--
// ===========================

// Método assíncrono
fs.readFile('paraLer.txt', 'utf-8', (err, data) => {
    // Se ocorrer um erro ao ler o arquivo, ele é passado para o callback e podemos tratá-lo aqui.
    if(err) {
        console.error('Erro ao ler o arquivo.', err);
        return;
    }
    // Caso contrário, o conteúdo do arquivo é exibido no console.
    console.log('Conteúdo do arquivo:', data);
})

// Método síncrono
// A leitura síncrona bloqueia o código até que a leitura do arquivo seja concluída.
const data = fs.readFileSync('paraLer.txt', 'utf-8');
console.log('Conteúdo do arquivo:', data);


// ===========================
// --| Escrita em Arquivos |--
// ===========================

// Método assíncrono
// O método writeFile apaga o conteúdo do arquivo e escreve o novo texto.
fs.writeFile('paraEscrever.txt', 'Este é o texto dentro do arquivo agora', (err) => {
    if(err) {
        console.error('Erro ao escrever no arquivo', err);
        return;
    };
    // Caso não haja erro, confirma que o arquivo foi escrito com sucesso.
    console.log('Arquivo escrito com sucesso');
});

// Método síncrono
// O método writeFileSync também escreve no arquivo, mas de forma síncrona, ou seja, o código aguarda a conclusão da operação para seguir.
const data2 = fs.writeFileSync('paraEscrever.txt', 'Este é o texto escrito de maneira síncrona');
console.log('Arquivo escrito com sucesso', data2);


// ================================================
// --| Adicionar conteúdo a um arquivo (Append) |--
// ================================================

// O método appendFile adiciona um conteúdo ao final do arquivo sem sobrescrever o que já está lá.
fs.appendFile('paraEscrever.txt', '\nNova linha adicionada', (err) => {
    if(err) throw err
    // Se não ocorrer erro, a adição de conteúdo foi bem-sucedida.
    console.log('Conteúdo adicionado com sucesso!');
})


// ========================
// --| Excluir Arquivos |--
// ========================

// O método unlink remove o arquivo especificado. Se o arquivo não existir ou houver outro erro, ele será passado para o callback.
fs.unlink('arquivoParaExcluir.txt', (err) => {
    if(err) throw err;
    // Caso o arquivo seja excluído com sucesso, uma mensagem é exibida.
    console.log('Arquivo excluído!');
})


// ===============================
// --| Criar Diretórios(Pasta) |--
// ===============================

// O método mkdir cria um diretório de forma assíncrona. Se o diretório já existir ou ocorrer algum erro, o erro é passado para o callback.
fs.mkdir('MeuDiretorio', (err) => {
    if(err) throw err;
    // Se não houver erro, o diretório foi criado com sucesso.
    console.log('Diretório criado com sucesso!');
});

// Método síncrono
// O método mkdirSync cria o diretório, mas o código só avança quando a operação for completada.
fs.mkdirSync('OutroDiretorio');
console.log('Outro Diretório criado!');


// ==========================
// --| Remover Diretórios |--
// ==========================

// O método rmdir remove um diretório, mas somente se ele estiver vazio. Caso contrário, um erro será lançado.
fs.rmdir('MeuDiretorio', (err) => {
    if(err) throw err;
    // Se o diretório for removido com sucesso, uma mensagem será exibida.
    console.log('Diretório removido com sucesso!');
})


// =======================================
// --| Renomear Arquivos ou Diretórios |--
// =======================================

// O método rename permite alterar o nome de um arquivo ou diretório.
fs.rename('paraRenomear.txt', 'script2.js', (err) => {
    if(err) throw err;
    // Caso não haja erro, o arquivo foi renomeado com sucesso.
    console.log('Arquivo renomeado!');
})


// ===============================================
// --| Verificar se um Arquivo/Diretório Existe |--
// ================================================

// O método existsSync retorna um valor booleano, indicando se o arquivo ou diretório existe ou não.
console.log(fs.existsSync('paraLer.txt')) // true (se existe), false (se não existe)

// Usando o método existsSync para verificar a existência do arquivo 'paraLer.txt'.
if (fs.existsSync('paraLer.txt')) {
    console.log('O arquivo existe!');
} else {
    console.log('O arquivo não existe!');
}


// ====================================
// --| Ler Conteúdo de um Diretório |--
// ====================================

// O método readdir lê o conteúdo de um diretório e retorna um array com os nomes de arquivos e subdiretórios.
fs.readdir('.', (err, files) => {
    if(err) throw err;
    // Exibe o conteúdo do diretório atual (todos os arquivos e pastas).
    console.log('Arquivos no diretório: ', files);
});


// ===============================================
// --| Obter Informações de um Arquivo (Stats) |--
// ===============================================

// O método stat retorna várias informações sobre o arquivo ou diretório, como o tamanho, tipo, permissões, etc.
fs.stat('paraLer.txt', (err, stats) => {
    if(err) throw err;
    // Exibe o objeto stats, que contém informações detalhadas sobre o arquivo.
    console.log(stats);
})


// EXERCÍCIOS DE FIXAÇÃO!!! (faça em um diretório separado)

/*
    1️⃣ Crie um arquivo chamado **"meuArquivo.txt"** e escreva a frase: `"Este é um arquivo de teste"` nele.

    2️⃣ Leia e exiba no console o conteúdo do **"meuArquivo.txt"**.

    3️⃣ Adicione a frase `"Nova linha adicionada!"` ao arquivo **"meuArquivo.txt"**.

    4️⃣ Renomeie **"meuArquivo.txt"** para **"arquivoRenomeado.txt"**.

    5️⃣ Verifique se o arquivo **"arquivoRenomeado.txt"** existe e exiba uma mensagem apropriada.

    6️⃣ Exclua o arquivo **"arquivoRenomeado.txt"**.

    7️⃣ Crie um diretório chamado **"meuDiretorio"**.

    8️⃣ Dentro de **"meuDiretorio"**, crie um arquivo chamado **"teste.txt"** com o conteúdo `"Arquivo dentro do diretório"`.

    9️⃣ Liste todos os arquivos e pastas dentro do diretório **"meuDiretorio"**.

    🔟 Exclua o arquivo **"teste.txt"** e depois remova o diretório **"meuDiretorio"**.

✔️ Dica: Faça tudo utilizando os métodos assíncronos para não travar a execução do código! 🚀
*/