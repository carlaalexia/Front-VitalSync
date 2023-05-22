import swal from "sweetalert";

function AlertSweet(num){
     
    switch(num){
        case 1:
            swal({
                title:"Hay Campos Obligatorios (nombre)",
                icon: "warning",
                buttons:"Aceptar"
              });
        break;
        case 2:
            swal({
                title:"Hay Campos Obligatorios (apellido)",
                icon: "warning",
                buttons:"Aceptar"
              });
        break;
        case 3:
            swal({
                title:"Hay Campos Obligatorios (roles)",
                icon: "warning",
                buttons:"Aceptar"
              });
        break;
        case 4:
            swal({
                title:"Hay Campos Obligatorios (seniority)",
                icon: "warning",
                buttons:"Aceptar"
              });
        break;
        case 5:
            swal({
                title:"Hay Campos Obligatorios (linkedin)",
                icon: "warning",
                buttons:"Aceptar"
              });
        break;
        case 6:
            swal({
                title:"Hay Campos Obligatorios (skills)",
                icon: "warning",
                buttons:"Aceptar"
              });
        break;
        case 7:
            swal({
                title:"Se guardo correctamente el usuario",
                icon: "success",
                buttons:"Aceptar"
              });
        break;
        case 8:
            swal({
                title:"Error al crear el usuario",
                icon: "error",
                buttons:"Aceptar"
              });
        break;
        
        default: 
        swal({
            title:"Hay campos obligatorio",
            icon: "warning",
            buttons:"Aceptar"
          });
        
    }
    



}
export default AlertSweet;