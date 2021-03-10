function replace(oldText, newText) {
  Array.prototype.slice
    .call(document.querySelectorAll(".ctable td"))
    .forEach((td) => {
      const text = td.innerText;
      const newTxt = text.replace(oldText, newText).replace("jjshouse", "").replace("jjhouse", "");
      td.innerText = newTxt;
    });
}

replace(oldText, newText);
