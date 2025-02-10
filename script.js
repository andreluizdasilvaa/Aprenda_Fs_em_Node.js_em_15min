const fs = require('fs')

// assíncrono: NÃO bloqueiam a execução e usam callbacks ou Promises para lidar com os resultados.
// síncrono: bloqueiam a execução do código até que a operação seja concluída.

// ===========================
// --| Leitura de Arquivos |--
// ===========================

// Método assíncrono
fs.readFile('paraLer.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error('Erro ao ler o arquivo.', err);
        return;
    }
    console.log('Conteudo do arquivo:', data);
})

// Método síncrono
const data = fs.readFileSync('paraLer.txt', 'utf-8');
console.log('Conteudo do arquivo:', data);

// ===========================
// --| Escrita em Arquivos |--
// ===========================

// Método assíncrono
// Ele apaga todo conteudo do arquivo para escrever o que você enviar
fs.writeFile('paraEscrever.txt', 'Este é o texto dentro do arquivo agora', (err) => {
    if(err) {
        console.error('Erro ao escrever no arquivo', err);
        return;
    };
    console.log('Arquivo escrito com sucesso');
});

// Método síncrono
const data2 = fs.writeFileSync('paraEscrever.txt', 'Este é o texto escrito de maneira síncrona');
console.log('Arquivo escrito com sucesso', data2);


// ================================================
// --| Adicionar conteúdo a um arquivo (Append) |--
// ================================================

fs.appendFile('paraEscrever.txt', '\nNova linha adicionada', (err) => {
    if(err) throw err
    console.log('Conteudo adicionado com sucesso!');
})

// ========================
// --| Excluir Arquivos |--
// ========================

fs.unlink('arquivoParaExcluir.txt', (err) => {
    if(err) throw err;
    console.log('Arquivo excluido!');
})

// ===============================
// --| Criar Diretórios(Pasta) |--
// ===============================
// tambem pode especificar onde vai ficar: './MeuDiretorio/OutroDiretorio'

// Método assíncrono
fs.mkdir('MeuDiretorio', (err) => {
    if(err) throw err;
    console.log('Diretório criado com sucesso!');
});

// Método síncrono
fs.mkdirSync('OutroDiretorio');
console.log('Outro Diretorio criado!');

// ==========================
// --| Remover Diretórios |--
// ==========================

fs.rmdir('MeuDiretorio', (err) => {
    if(err) throw err;
    console.log('Diretório removido com sucesso!');
})

// =======================================
// --| Renomear Arquivos ou Diretórios |--
// =======================================

fs.rename('paraRenomear.txt', 'script2.js', (err) => {
    if(err) throw err;
    console.log('Arquivo renomeado!');
})

// ===============================================
// --| Verificar se um Arquivo/Diretório Existe |--
// ================================================

console.log(fs.existsSync('paraLer.txt')) // true( se existe ), false( se não existe )

if (fs.existsSync('paraLer.txt')) {
    console.log('O arquivo existe!');
} else {
    console.log('O arquivo não existe!');
}

// ====================================
// --| Ler Conteúdo de um Diretório |--
// ====================================

fs.readdir('.', (err, files) => {
    if(err) throw err;
    console.log('Arquivos no diretório: ', files); // retorna um array com cada nome de arquivo/pasta
});

// ===============================================
// --| Obter Informações de um Arquivo (Stats) |--
// ===============================================

fs.stat('paraLer.txt', (err, stats) => {
    if(err) throw err;
    console.log(stats); // retorna varias informações do arquivo
})

// EXERCICIOS DE FIXAÇÃO!!!( faça em um diretório separado )

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