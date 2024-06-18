import Swal from 'sweetalert2';

export function showAlert(icon: any, title: string, text: string) {
  Swal.fire({ icon, title, text });
}
