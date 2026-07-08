// ============================================================
// APLICACIÓN (dashboard, ficha, filtros, modales)
// ============================================================

let estudiantesFiltrados = [];
let accionPendiente = null;
let idPendiente = null;

function construirListaEstudiantes() {
    return ESTUDIANTES.map(e => {
        const tutor = obtenerTutorPorId(e.id_tutor);
        const inscripcion = obtenerInscripcionActiva(e.id_estudiante);
        const grupo = inscripcion ? obtenerGrupoPorId(inscripcion.id_grupo) : null;
        const grado = grupo ? obtenerGradoPorId(grupo.id_grado) : null;
        return {
            ...e,
            edad: calcularEdad(e.fecha_nacimiento),
            nombre_tutor: nombreCompletoTutor(tutor),
            nombre_grado: grado ? grado.nombre_grado : null,
            nombre_grupo: grupo ? grupo.nombre_grupo : null
        };
    });
}

function aplicarFiltros(lista, busqueda, gradoFiltro, estadoFiltro) {
    let resultado = [...lista];
    
    if (busqueda) {
        const b = busqueda.toLowerCase();
        resultado = resultado.filter(e => {
            const campos = [
                e.nombre.toLowerCase(),
                e.apellido_paterno.toLowerCase(),
                e.apellido_materno.toLowerCase(),
                e.matricula.toLowerCase(),
                (e.curp || '').toLowerCase()
            ];
            return campos.some(c => c.includes(b));
        });
    }
    
    if (gradoFiltro) {
        resultado = resultado.filter(e => {
            const inscripcion = obtenerInscripcionActiva(e.id_estudiante);
            if (!inscripcion) return false;
            const grupo = obtenerGrupoPorId(inscripcion.id_grupo);
            return grupo && grupo.id_grado == gradoFiltro;
        });
    }
    
    if (estadoFiltro) {
        resultado = resultado.filter(e => e.estado === estadoFiltro);
    }
    
    return resultado;
}

function renderizarDashboard() {
    const busqueda = document.getElementById('buscarInput').value.trim();
    const gradoFiltro = document.getElementById('gradoSelect').value;
    const estadoFiltro = document.getElementById('estadoSelect').value;
    
    const todos = construirListaEstudiantes();
    estudiantesFiltrados = aplicarFiltros(todos, busqueda, gradoFiltro, estadoFiltro);
    
    // Stats
    document.getElementById('statTotal').textContent = estudiantesFiltrados.length;
    document.getElementById('statActivos').textContent = estudiantesFiltrados.filter(e => e.estado === 'Activo').length;
    
    // Tabla
    const tbody = document.getElementById('tablaAlumnos');
    if (estudiantesFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="empty-state">No se encontraron alumnos con los filtros seleccionados.</td></tr>';
        return;
    }
    
    tbody.innerHTML = estudiantesFiltrados.map(e => `
        <tr>
            <td><strong>${escaparHTML(e.matricula)}</strong></td>
            <td>
                <a href="alumno.html?id=${e.id_estudiante}" class="alumno-link">
                    ${escaparHTML(e.apellido_paterno + ' ' + e.apellido_materno + ' ' + e.nombre)}
                </a>
            </td>
            <td>${e.edad} años</td>
            <td>${escaparHTML((e.nombre_grado || '—') + ' ' + (e.nombre_grupo || ''))}</td>
            <td>${escaparHTML(e.nombre_tutor || 'Sin tutor')}</td>
            <td><span class="badge badge-${e.estado.toLowerCase()}">${e.estado}</span></td>
            <td class="actions">
                <a href="alumno.html?id=${e.id_estudiante}" class="btn-action btn-view" title="Ver detalles">👁️</a>
                <button class="btn-action btn-baja" onclick="confirmarBaja(${e.id_estudiante}, '${escaparHTML(e.nombre + ' ' + e.apellido_paterno)}')" title="Dar de baja">🚫</button>
                <button class="btn-action btn-delete" onclick="confirmarEliminar(${e.id_estudiante}, '${escaparHTML(e.nombre + ' ' + e.apellido_paterno)}')" title="Eliminar">🗑️</button>
            </td>
        </tr>
    `).join('');
}

function confirmarBaja(id, nombre) {
    accionPendiente = 'baja';
    idPendiente = id;
    document.getElementById('modalTitle').textContent = 'Confirmar baja';
    document.getElementById('modalMessage').textContent = `¿Estás seguro de dar de baja a ${nombre}?`;
    document.getElementById('modal').classList.add('active');
}

function confirmarEliminar(id, nombre) {
    accionPendiente = 'eliminar';
    idPendiente = id;
    document.getElementById('modalTitle').textContent = 'Confirmar eliminación';
    document.getElementById('modalMessage').textContent = `¿Estás seguro de eliminar permanentemente a ${nombre}?`;
    document.getElementById('modal').classList.add('active');
}

function ejecutarAccion() {
    if (accionPendiente === 'baja' && idPendiente) {
        const idx = ESTUDIANTES.findIndex(e => e.id_estudiante === idPendiente);
        if (idx !== -1) {
            ESTUDIANTES[idx].estado = 'Baja';
            renderizarDashboard();
        }
    } else if (accionPendiente === 'eliminar' && idPendiente) {
        const idx = ESTUDIANTES.findIndex(e => e.id_estudiante === idPendiente);
        if (idx !== -1) {
            ESTUDIANTES.splice(idx, 1);
            // También eliminar calificaciones e inscripciones
            for (let i = CALIFICACIONES.length - 1; i >= 0; i--) {
                if (CALIFICACIONES[i].id_estudiante === idPendiente) CALIFICACIONES.splice(i, 1);
            }
            for (let i = INSCRIPCIONES.length - 1; i >= 0; i--) {
                if (INSCRIPCIONES[i].id_estudiante === idPendiente) INSCRIPCIONES.splice(i, 1);
            }
            renderizarDashboard();
        }
    }
    cerrarModal();
}

function cerrarModal() {
    document.getElementById('modal').classList.remove('active');
    accionPendiente = null;
    idPendiente = null;
}

function cargarFichaAlumno() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 0;
    
    const alumno = obtenerEstudiantePorId(id);
    if (!alumno) {
        window.location.href = 'dashboard.html';
        return;
    }
    
    const tutor = obtenerTutorPorId(alumno.id_tutor);
    const inscripcion = obtenerInscripcionActiva(id);
    const grupo = inscripcion ? obtenerGrupoPorId(inscripcion.id_grupo) : null;
    const grado = grupo ? obtenerGradoPorId(grupo.id_grado) : null;
    const edad = calcularEdad(alumno.fecha_nacimiento);
    const calificaciones = obtenerCalificacionesPorEstudiante(id);
    
    // Header
    document.getElementById('fichaTitulo').textContent = escaparHTML(alumno.apellido_paterno + ' ' + alumno.apellido_materno + ' ' + alumno.nombre);
    document.getElementById('fichaMatricula').textContent = 'Matrícula: ' + escaparHTML(alumno.matricula);
    document.getElementById('fichaEstado').textContent = alumno.estado;
    document.getElementById('fichaEstado').className = 'badge badge-' + alumno.estado.toLowerCase();
    document.getElementById('fichaAvatar').textContent = (alumno.nombre[0] + alumno.apellido_paterno[0]).toUpperCase();
    
    // Datos personales
    document.getElementById('datoCurp').textContent = alumno.curp || 'No registrado';
    document.getElementById('datoNacimiento').textContent = alumno.fecha_nacimiento;
    document.getElementById('datoEdad').textContent = edad + ' años';
    document.getElementById('datoSexo').textContent = alumno.sexo === 'M' ? 'Masculino' : 'Femenino';
    document.getElementById('datoDireccion').textContent = alumno.direccion || 'No registrada';
    document.getElementById('datoTelefono').textContent = alumno.telefono_contacto || 'No registrado';
    document.getElementById('datoRegistro').textContent = alumno.fecha_registro;
    
    // Escolar
    document.getElementById('datoGrado').textContent = grado ? grado.nombre_grado : 'No inscrito';
    document.getElementById('datoGrupo').textContent = grupo ? grupo.nombre_grupo : '—';
    document.getElementById('datoTurno').textContent = grupo ? grupo.turno : '—';
    document.getElementById('datoCiclo').textContent = CICLO_ESCOLAR.nombre_ciclo || '—';
    
    // Tutor
    document.getElementById('datoTutor').textContent = nombreCompletoTutor(tutor);
    document.getElementById('datoParentesco').textContent = tutor ? tutor.parentesco : '—';
    document.getElementById('datoTelTutor').textContent = tutor ? tutor.telefono : '—';
    document.getElementById('datoEmailTutor').textContent = tutor ? tutor.email : '—';
    
    // Calificaciones
    const tbody = document.getElementById('tablaCalificaciones');
    if (calificaciones.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-text">No hay calificaciones registradas.</td></tr>';
    } else {
        tbody.innerHTML = calificaciones.map(c => `
            <tr>
                <td>${escaparHTML(c.nombre_materia)}</td>
                <td>${escaparHTML(c.clave_materia)}</td>
                <td><strong>${c.calificacion}</strong></td>
                <td>${c.faltas}</td>
                <td>${obtenerDesempeno(c.calificacion)}</td>
            </tr>
        `).join('');
    }
    
    // Acciones
    document.getElementById('btnBaja').onclick = function() {
        confirmarBajaFicha(id, alumno.nombre + ' ' + alumno.apellido_paterno);
    };
    document.getElementById('btnEliminar').onclick = function() {
        confirmarEliminarFicha(id, alumno.nombre + ' ' + alumno.apellido_paterno);
    };
}

function confirmarBajaFicha(id, nombre) {
    accionPendiente = 'baja';
    idPendiente = id;
    document.getElementById('modalTitle').textContent = 'Confirmar baja';
    document.getElementById('modalMessage').textContent = '¿Estás seguro de dar de baja a ' + nombre + '?';
    document.getElementById('modal').classList.add('active');
}

function confirmarEliminarFicha(id, nombre) {
    accionPendiente = 'eliminar';
    idPendiente = id;
    document.getElementById('modalTitle').textContent = 'Confirmar eliminación';
    document.getElementById('modalMessage').textContent = '¿Estás seguro de eliminar permanentemente a ' + nombre + '?';
    document.getElementById('modal').classList.add('active');
}

function llenarSelectGrados() {
    const sel = document.getElementById('gradoSelect');
    if (!sel) return;
    sel.innerHTML = '<option value="">Todos los grados</option>' + 
        GRADOS.map(g => `<option value="${g.id_grado}">${escaparHTML(g.nombre_grado)}</option>`).join('');
}
