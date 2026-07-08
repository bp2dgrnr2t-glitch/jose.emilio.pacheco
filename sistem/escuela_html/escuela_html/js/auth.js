// ============================================================
// AUTENTICACIÓN (login, logout, sesión con localStorage)
// ============================================================

function iniciarSesion(usuario, password) {
    const user = obtenerUsuarioPorNombre(usuario);
    if (user && user.password === password) {
        localStorage.setItem('sesion_escuela', JSON.stringify({
            id_usuario: user.id_usuario,
            usuario: user.usuario,
            rol: user.rol,
            id_maestro: user.id_maestro,
            nombre: user.nombre
        }));
        return true;
    }
    return false;
}

function cerrarSesion() {
    localStorage.removeItem('sesion_escuela');
    window.location.href = 'login.html';
}

function obtenerSesion() {
    const data = localStorage.getItem('sesion_escuela');
    return data ? JSON.parse(data) : null;
}

function estaLogueado() {
    return obtenerSesion() !== null;
}

function esAdmin() {
    const s = obtenerSesion();
    return s && s.rol === 'admin';
}

function protegerRuta() {
    if (!estaLogueado()) {
        window.location.href = 'login.html';
    }
}

function actualizarSidebarUsuario() {
    const s = obtenerSesion();
    if (s) {
        const el = document.getElementById('nombreUsuario');
        if (el) el.textContent = escaparHTML(s.usuario);
    }
}
