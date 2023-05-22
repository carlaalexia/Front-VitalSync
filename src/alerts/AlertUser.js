import swal from "sweetalert";

function AlertSweet(num){
     
    switch(num){
        case 1:
            swal("¡Bienvenido!", "Disfrute su visita");
        break;
        case 2:
            swal({
                icon: 'error',
                title: 'Oops...',
                text: 'El mail no existe',
              })
        break;
        case 3:
            swal({
                icon: 'warning',
                title: 'Oops...',
                text: 'Email incorrecto y/o clave no coincide',
              })
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