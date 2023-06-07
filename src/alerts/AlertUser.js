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
                title:"Error",
                icon: "warning",
                buttons:"Aceptar"
              });
        break;
        case 5:
            swal({
                title:"Se edito exitosamente",
                icon: "success",
                buttons:"Aceptar"
              });
        break;
        case 6:
            swal({
                title:"Se guardo correctamente el profesional",
                icon: "success",
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
                title:"Ya existe un usuario con el mail ingresado",
                icon: "error",
                buttons:"Aceptar"
              });
        break;
        case 9:
            swal({
                title: "¿Estas seguro de eliminar a este profesional?",
                text: "Una vez eliminado, se borraran todos sus datos",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((confirmed) => {
                if (confirmed) {
                  swal("Eliminado", {
                    icon: "success",
                  });
                } else {
                  swal("Que tenga un buen dia");
                }
              });
         break;
         case 10:
            swal({
                title:"Perfecto!",
                icon: "success",
                buttons:"Aceptar"
              });
        break;
        case 11:
            swal({
                title:"Error!",
                icon: "warning",
                buttons:"Aceptar"
              });
        break;
        case 12:
            swal({
                title:"Perfecto!",
                icon: "success",
                buttons:"Aceptar"
              });
        break;
        case 13:
            swal({
                title:"Comentario eliminado",
                icon: "success",
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