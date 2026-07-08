// ============================================================
// DATOS DE LA ESCUELA (sin base de datos, sin PHP)
// ============================================================

const USUARIOS = [
    {
        id_usuario: 1,
        usuario: 'admin',
        password: 'password',
        rol: 'admin',
        id_maestro: null,
        nombre: 'Administrador'
    },
    {
        id_usuario: 2,
        usuario: 'roberto.s',
        password: 'password',
        rol: 'maestro',
        id_maestro: 1,
        nombre: 'Roberto Sánchez'
    },
    {
        id_usuario: 3,
        usuario: 'maria.g',
        password: 'password',
        rol: 'maestro',
        id_maestro: 2,
        nombre: 'María García'
    }
];

const CICLO_ESCOLAR = {
    id_ciclo: 1,
    nombre_ciclo: '2025-2026',
    fecha_inicio: '2025-08-19',
    fecha_fin: '2026-07-10',
    activo: true
};

const GRADOS = [
    { id_grado: 1, nombre_grado: '1° de Primaria', nivel: 1 },
    { id_grado: 2, nombre_grado: '2° de Primaria', nivel: 2 },
    { id_grado: 3, nombre_grado: '3° de Primaria', nivel: 3 },
    { id_grado: 4, nombre_grado: '4° de Primaria', nivel: 4 },
    { id_grado: 5, nombre_grado: '5° de Primaria', nivel: 5 },
    { id_grado: 6, nombre_grado: '6° de Primaria', nivel: 6 }
];

const GRUPOS = [
    { id_grupo: 1, id_grado: 1, nombre_grupo: 'A', turno: 'Matutino', id_maestro: 1 },
    { id_grupo: 2, id_grado: 1, nombre_grupo: 'B', turno: 'Matutino', id_maestro: 2 },
    { id_grupo: 3, id_grado: 2, nombre_grupo: 'A', turno: 'Matutino', id_maestro: 1 },
    { id_grupo: 4, id_grado: 3, nombre_grupo: 'A', turno: 'Matutino', id_maestro: 2 }
];

const MAESTROS = [
    {
        id_maestro: 1,
        nombre: 'Roberto',
        apellido_paterno: 'Sánchez',
        apellido_materno: 'López',
        email: 'roberto.s@escuela.edu.mx',
        telefono: '5512345678',
        especialidad: 'Educación Primaria / Matemáticas',
        estado: 'Activo'
    },
    {
        id_maestro: 2,
        nombre: 'María',
        apellido_paterno: 'García',
        apellido_materno: 'Hernández',
        email: 'maria.g@escuela.edu.mx',
        telefono: '5587654321',
        especialidad: 'Lenguaje y Comunicación',
        estado: 'Activo'
    },
    {
        id_maestro: 3,
        nombre: 'Carlos',
        apellido_paterno: 'Ramírez',
        apellido_materno: 'Flores',
        email: 'carlos.r@escuela.edu.mx',
        telefono: '5599887744',
        especialidad: 'Ciencias Naturales',
        estado: 'Activo'
    }
];

const TUTORES = [
    { id_tutor: 1, nombre: 'Juan', apellido_paterno: 'Pérez', apellido_materno: 'García', telefono: '5511112222', email: 'juan.perez@email.com', parentesco: 'Padre' },
    { id_tutor: 2, nombre: 'Ana', apellido_paterno: 'Martínez', apellido_materno: 'Ruiz', telefono: '5522223333', email: 'ana.mtz@email.com', parentesco: 'Madre' },
    { id_tutor: 3, nombre: 'Luis', apellido_paterno: 'Hernández', apellido_materno: 'Castro', telefono: '5533334444', email: 'luis.hdz@email.com', parentesco: 'Padre' },
    { id_tutor: 4, nombre: 'Sofía', apellido_paterno: 'López', apellido_materno: 'Díaz', telefono: '5544445555', email: 'sofia.lopez@email.com', parentesco: 'Madre' }
];

const ESTUDIANTES = [
    {
        id_estudiante: 1,
        matricula: '20250001',
        nombre: 'Luis',
        apellido_paterno: 'Pérez',
        apellido_materno: 'Martínez',
        fecha_nacimiento: '2018-03-15',
        sexo: 'M',
        curp: 'PEML180315HDFRRSA1',
        direccion: 'Calle 123, Colonia Centro',
        telefono_contacto: '5511112222',
        estado: 'Activo',
        fecha_registro: '2025-08-19',
        id_tutor: 1
    },
    {
        id_estudiante: 2,
        matricula: '20250002',
        nombre: 'Sofía',
        apellido_paterno: 'Hernández',
        apellido_materno: 'Castro',
        fecha_nacimiento: '2017-07-22',
        sexo: 'F',
        curp: 'HECS170722MDFRSNA2',
        direccion: 'Av. Reforma 456, Del. Cuauhtémoc',
        telefono_contacto: '5533334444',
        estado: 'Activo',
        fecha_registro: '2025-08-19',
        id_tutor: 3
    },
    {
        id_estudiante: 3,
        matricula: '20250003',
        nombre: 'Diego',
        apellido_paterno: 'Martínez',
        apellido_materno: 'Ruiz',
        fecha_nacimiento: '2016-11-05',
        sexo: 'M',
        curp: 'MARD161105HDFZRSD3',
        direccion: 'Calle Educación 789, Col. Escolar',
        telefono_contacto: '5522223333',
        estado: 'Activo',
        fecha_registro: '2025-08-20',
        id_tutor: 2
    },
    {
        id_estudiante: 4,
        matricula: '20250004',
        nombre: 'Valentina',
        apellido_paterno: 'López',
        apellido_materno: 'Díaz',
        fecha_nacimiento: '2018-01-10',
        sexo: 'F',
        curp: 'LODV180110MDFZPSA4',
        direccion: 'Av. Juárez 321, Col. Centro',
        telefono_contacto: '5544445555',
        estado: 'Activo',
        fecha_registro: '2025-08-21',
        id_tutor: 4
    },
    {
        id_estudiante: 5,
        matricula: '20240001',
        nombre: 'Carlos',
        apellido_paterno: 'Gómez',
        apellido_materno: 'Sánchez',
        fecha_nacimiento: '2015-05-20',
        sexo: 'M',
        curp: 'GOSC150520HDFMNRA1',
        direccion: 'Calle Flores 55, Col. Jardín',
        telefono_contacto: '5555667788',
        estado: 'Baja',
        fecha_registro: '2024-08-15',
        id_tutor: 1
    }
];

const INSCRIPCIONES = [
    { id_inscripcion: 1, id_estudiante: 1, id_grupo: 1, id_ciclo: 1, fecha_inscripcion: '2025-08-19' },
    { id_inscripcion: 2, id_estudiante: 2, id_grupo: 3, id_ciclo: 1, fecha_inscripcion: '2025-08-19' },
    { id_inscripcion: 3, id_estudiante: 3, id_grupo: 4, id_ciclo: 1, fecha_inscripcion: '2025-08-20' },
    { id_inscripcion: 4, id_estudiante: 4, id_grupo: 2, id_ciclo: 1, fecha_inscripcion: '2025-08-21' },
    { id_inscripcion: 5, id_estudiante: 5, id_grupo: 1, id_ciclo: 1, fecha_inscripcion: '2024-08-15' }
];

const MATERIAS = [
    { id_materia: 1, nombre_materia: 'Español', clave_materia: 'ESP-01' },
    { id_materia: 2, nombre_materia: 'Matemáticas', clave_materia: 'MAT-01' },
    { id_materia: 3, nombre_materia: 'Ciencias Naturales', clave_materia: 'CNA-01' },
    { id_materia: 4, nombre_materia: 'Formación Cívica y Ética', clave_materia: 'FCE-01' },
    { id_materia: 5, nombre_materia: 'Artes', clave_materia: 'ART-01' }
];

const CALIFICACIONES = [
    { id_calificacion: 1, id_estudiante: 1, id_materia: 1, calificacion: 9.5, faltas: 1 },
    { id_calificacion: 2, id_estudiante: 1, id_materia: 2, calificacion: 8.8, faltas: 0 },
    { id_calificacion: 3, id_estudiante: 1, id_materia: 3, calificacion: 9.0, faltas: 2 },
    { id_calificacion: 4, id_estudiante: 1, id_materia: 4, calificacion: 10.0, faltas: 0 },
    { id_calificacion: 5, id_estudiante: 1, id_materia: 5, calificacion: 9.2, faltas: 1 },

    { id_calificacion: 6, id_estudiante: 2, id_materia: 1, calificacion: 8.5, faltas: 2 },
    { id_calificacion: 7, id_estudiante: 2, id_materia: 2, calificacion: 7.5, faltas: 3 },
    { id_calificacion: 8, id_estudiante: 2, id_materia: 3, calificacion: 8.0, faltas: 1 },
    { id_calificacion: 9, id_estudiante: 2, id_materia: 4, calificacion: 9.0, faltas: 0 },
    { id_calificacion: 10, id_estudiante: 2, id_materia: 5, calificacion: 8.8, faltas: 1 },

    { id_calificacion: 11, id_estudiante: 3, id_materia: 1, calificacion: 9.8, faltas: 0 },
    { id_calificacion: 12, id_estudiante: 3, id_materia: 2, calificacion: 9.5, faltas: 0 },
    { id_calificacion: 13, id_estudiante: 3, id_materia: 3, calificacion: 9.2, faltas: 1 },
    { id_calificacion: 14, id_estudiante: 3, id_materia: 4, calificacion: 10.0, faltas: 0 },
    { id_calificacion: 15, id_estudiante: 3, id_materia: 5, calificacion: 9.0, faltas: 2 },

    { id_calificacion: 16, id_estudiante: 4, id_materia: 1, calificacion: 8.0, faltas: 3 },
    { id_calificacion: 17, id_estudiante: 4, id_materia: 2, calificacion: 7.0, faltas: 4 },
    { id_calificacion: 18, id_estudiante: 4, id_materia: 3, calificacion: 8.5, faltas: 1 },
    { id_calificacion: 19, id_estudiante: 4, id_materia: 4, calificacion: 9.0, faltas: 0 },
    { id_calificacion: 20, id_estudiante: 4, id_materia: 5, calificacion: 8.2, faltas: 2 }
];

const EVENTOS = [
    { titulo: 'Inicio de Clases', fecha: '2025-08-19', descripcion: 'Bienvenida a todos los estudiantes y padres de familia.' },
    { titulo: 'Día del Maestro', fecha: '2025-05-15', descripcion: 'Celebración y reconocimiento a nuestros docentes.' },
    { titulo: 'Exámenes de Medio Ciclo', fecha: '2025-10-20', descripcion: 'Evaluaciones bimestrales para todos los grados.' },
    { titulo: 'Festival de Primavera', fecha: '2026-03-20', descripcion: 'Presentaciones artísticas, música y danza tradicional.' },
    { titulo: 'Clausura del Ciclo', fecha: '2026-07-10', descripcion: 'Ceremonia de graduación y entrega de reconocimientos.' }
];

// ============================================================
// FUNCIONES AUXILIARES
// ============================================================

function obtenerUsuarioPorNombre(usuario) {
    return USUARIOS.find(u => u.usuario === usuario) || null;
}

function obtenerMaestrosActivos() {
    return MAESTROS.filter(m => m.estado === 'Activo');
}

function obtenerGrados() {
    return GRADOS;
}

function obtenerGrupoPorId(id) {
    return GRUPOS.find(g => g.id_grupo === id) || null;
}

function obtenerGradoPorId(id) {
    return GRADOS.find(g => g.id_grado === id) || null;
}

function obtenerTutorPorId(id) {
    return TUTORES.find(t => t.id_tutor === id) || null;
}

function obtenerEstudiantePorId(id) {
    return ESTUDIANTES.find(e => e.id_estudiante === id) || null;
}

function obtenerInscripcionActiva(idEstudiante) {
    return INSCRIPCIONES.find(i => i.id_estudiante === idEstudiante && i.id_ciclo === CICLO_ESCOLAR.id_ciclo) || null;
}

function obtenerCalificacionesPorEstudiante(idEstudiante) {
    return CALIFICACIONES
        .filter(c => c.id_estudiante === idEstudiante)
        .map(c => {
            const mat = MATERIAS.find(m => m.id_materia === c.id_materia);
            return { ...c, nombre_materia: mat ? mat.nombre_materia : 'Desconocida', clave_materia: mat ? mat.clave_materia : '—' };
        });
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nac.getFullYear();
    const m = hoy.getMonth() - nac.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nac.getDate())) edad--;
    return edad;
}

function nombreCompletoTutor(tutor) {
    if (!tutor) return 'Sin tutor';
    return tutor.nombre + ' ' + tutor.apellido_paterno + ' ' + tutor.apellido_materno;
}

function nombreCompletoMaestro(maestro) {
    return maestro.nombre + ' ' + maestro.apellido_paterno + ' ' + maestro.apellido_materno;
}

function escaparHTML(texto) {
    if (!texto) return '';
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

function obtenerDesempeno(promedio) {
    if (promedio >= 9) return '<span class="badge badge-excelente">Excelente</span>';
    if (promedio >= 8) return '<span class="badge badge-bueno">Bueno</span>';
    if (promedio >= 7) return '<span class="badge badge-regular">Regular</span>';
    return '<span class="badge badge-baja">Necesita Apoyo</span>';
}

function formatearMes(fechaStr) {
    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const d = new Date(fechaStr + 'T00:00:00');
    return meses[d.getMonth()];
}

function formatearDia(fechaStr) {
    const d = new Date(fechaStr + 'T00:00:00');
    return String(d.getDate()).padStart(2, '0');
}

function obtenerAnio() {
    return new Date().getFullYear();
}
