document.getElementById("btn-curriculo").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "Arquivos/Currículo.pdf";
  link.download = "Matheus_Baumhardt.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});