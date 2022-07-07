import React from "react";


  // Metodo Cambiar Fecha
  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:'numeric'};
    return new Date(string).toLocaleDateString([],options);
}

export default formatDate