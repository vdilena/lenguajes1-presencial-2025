
/**
 * HAY QUE AGREGAR USO DE VARIABLES, PROMPT, CONSOLE.LOG Y TIPO DE DATOS
 */

// Semana 1 — JS básico (sin DOM)
console.log("✅ JS cargado — Semana 1");

// Variables con const y let
const curso = "Lenguajes 1"; // string
// curso = "Lenguajes 11" Es erroneo en la interpretacion
let semana = 1; // number mutable
const esOnline = true; // boolean

// Arrays y objetos simples (mock de datos)
const categorias = ["Ciencia de Datos", "Desarrollo Web", "Otros"];

const usuario = {
  nombre: "Ana",
  email: "ana@example.com",
  categoria: "Ciencia de Datos",
};

// Mostrar en consola los valores como si vinieran del DOM
console.log("Curso:", curso);
console.log("Semana:", semana);
console.log("Es online:", esOnline);
console.log("Categorías disponibles:", categorias);
console.log("Usuario (mock):", usuario);

// Operaciones básicas con los mocks
semana = semana + 1;
console.log("La próxima semana será:", semana);

const mensaje = `Bienvenida ${usuario.nombre} al curso ${curso}.`; // template string
const otroMensaje = "Este es otro ejemplo de " + semana + " para el curso " + curso
console.log(mensaje);
console.log(otroMensaje)