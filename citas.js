document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const citasLista = document.getElementById('citas-lista');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtener los valores del formulario
        const idPaciente = document.getElementById('id-paciente').value;
        const fechaCita = document.getElementById('fecha-cita').value;
        const tipoTerapia = document.getElementById('tipo-terapia').value;
        const estadoCita = document.getElementById('estado-cita').value;
        const notas = document.getElementById('notas').value;

        // Validación simple para el ID de Paciente (opcional)
        if (idPaciente.trim() === '') {
            alert('Por favor, ingrese un ID de Paciente válido.');
            return;
        }

        // Crear un nuevo elemento en la tabla
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>Auto-incrementado</td>
            <td>${idPaciente}</td>
            <td>${fechaCita}</td>
            <td>${tipoTerapia}</td>
            <td>${estadoCita}</td>
            <td>${notas}</td>
            <td><button class="delete-btn">Eliminar</button></td>
        `;

        // Añadir la nueva fila a la tabla
        citasLista.appendChild(newRow);

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
