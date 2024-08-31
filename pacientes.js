document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const pacientesLista = document.getElementById('pacientes-lista');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtener los valores del formulario
        const idCedula = document.getElementById('id-cedula').value;
        const nombre = document.getElementById('nombre').value;
        const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
        const genero = document.querySelector('input[name="genero"]:checked').value;
        const direccion = document.getElementById('direccion').value;
        const ciudad = document.getElementById('ciudad').value;
        const telefono = document.getElementById('telefono').value;
        const correo = document.getElementById('correo').value;
        const fechaRegistro = document.getElementById('fecha-registro').value;

        // Crear un nuevo elemento en la tabla
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${idCedula}</td>
            <td>${nombre}</td>
            <td>${fechaNacimiento}</td>
            <td>${genero}</td>
            <td>${direccion}</td>
            <td>${ciudad}</td>
            <td>${telefono}</td>
            <td>${ciudad}</td>
            <td>${correo}</td>
            <td>${fechaRegistro}</td>
            <td><button class="delete-btn">Eliminar</button></td>
        `;

        // Añadir la nueva fila a la tabla
        pacientesLista.appendChild(newRow);

        // Mostrar mensaje de registro exitoso
        alert('Registro exitoso');
        form.reset();

        // Cambiar texto del botón de enviar
        const submitButton = document.querySelector('.btn-submit');
        submitButton.value = 'Enviado';

        // Agregar evento para eliminar registro
        newRow.querySelector('.delete-btn').addEventListener('click', () => {
            newRow.remove();
        });
    });
});
