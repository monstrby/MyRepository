var newText='Это наш новый текст, который меняется через функцию JS';
function ChangeText() {
  var oldText=document.getElementById('footerMsg');
  oldText.textContent=newText;        
}
ChangeText();