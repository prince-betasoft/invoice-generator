import Swal from "sweetalert2";
// Toast config
const Toaster = {
  success(message, variant) {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: variant,
      title: message,
      showConfirmButton: true,
      timerProgressBar: true,
      timer: 5000,
    });
  },
  error(message, variant) {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: variant,
      title: message,
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 5000,
    });
  },
};

export default Toaster;
