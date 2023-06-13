import Swal from "sweetalert2/dist/sweetalert2.all.js";


const useError = (count)=>{
    if(count ==10)
    Swal.fire({
        icon: "success",
        title: "Has llegado a 10",
        showConfirmButton: false,
        timer: 2500,
      });
}

export default useError