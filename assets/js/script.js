var submit=document.getElementById('submit');
submit.onclick = function()
    {
      var saisie1=document.getElementById("firstNumber").value;
      var saisie2=document.getElementById("secondNumber").value;
      result=(saisie1)/(saisie2)
      alert("Résultat:" +result);
    }
