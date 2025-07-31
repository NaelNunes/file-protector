const btnSelectFile = document.getElementById('btnSelectFile');
const filePathElem = document.getElementById('filePath');
const inputPassword = document.getElementById('inputPassword');
const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.getElementById('btnDecrypt');
const statusElem = document.getElementById('status');

let selectedFile = null;

btnSelectFile.addEventListener('click', async () => {
  // Aqui você chama a API para abrir dialogo de arquivo
  // ex: const file = await window.electronAPI.selectFile();
  // selectedFile = file;
  // filePathElem.textContent = file || 'Nenhum arquivo selecionado';
  // habilitar os botões se tiver arquivo
});

btnEncrypt.addEventListener('click', async () => {
  // pegar senha
  // chamar API para encriptar
  // mostrar resultado no statusElem
});

btnDecrypt.addEventListener('click', async () => {
  // pegar senha
  // chamar API para descriptar
  // mostrar resultado no statusElem
});
