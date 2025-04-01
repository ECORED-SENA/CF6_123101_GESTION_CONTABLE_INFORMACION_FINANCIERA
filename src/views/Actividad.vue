<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Manejo del efectivo y sus equivalentes en la gestión contable',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conceptos clave relacionados con el manejo del efectivo, equivalentes al efectivo, políticas contables, arqueo de caja, conciliación bancaria y ajustes por diferencia en cambio según normativas internacionales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál de los siguientes elementos hace parte del efectivo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Caja general, caja menor y bancos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Caja general, caja menor y entidades financieras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Caja menor, bonos y CDT.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bancos, CDT y bonos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Según la NIC 7, un equivalente al efectivo debe:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar rendimientos altos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tener riesgo significativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser utilizado para inversiones a largo plazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser fácilmente convertible a efectivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes opciones describe mejor una inversión de renta variable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Produce siempre el mismo rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Depende del comportamiento del mercado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No genera ningún tipo de rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tiene un rendimiento garantizado por el emisor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Las políticas contables establecen:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente las normas de auditoría.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo el valor de mercado de los activos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las bases, normas y procedimientos para la presentación de los estados financieros.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El valor futuro de las inversiones de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué se debe hacer si durante un arqueo de caja se encuentra un faltante?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar el resultado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar un ajuste mediante nota contable.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solicitar préstamo bancario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cancelar el fondo de caja.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de inversión se clasifica como equivalente al efectivo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acciones con alta volatilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bonos con vencimiento a un año.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'CDT con vencimiento menor a 90 días.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Compra de maquinaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una característica de la presentación en los estados financieros?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incluir la información contable para su análisis por los usuarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar solamente cifras aproximadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Excluir notas aclaratorias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicar en revistas especializadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es uno de los objetivos de la conciliación bancaria?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar que los libros contables coincidan con el extracto bancario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Duplicar las transacciones registradas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar el saldo contable artificialmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cancelar las cuentas bancarias no conciliadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes afirmaciones sobre el efectivo es verdadera?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un activo corriente con disponibilidad inmediata.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo está compuesto por inversiones a largo plazo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No puede estar en moneda extranjera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Debe mantenerse en bóvedas únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es el objetivo de la NIC 21?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer reglas para préstamos financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Regular el tratamiento contable de las transacciones en moneda extranjera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar impuestos sobre la renta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dirigir la auditoría interna de las empresas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El fondo de caja menor se utiliza para cubrir gastos de gran cuantía.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La presentación del efectivo en los estados financieros debe seguir las políticas contables de la empresa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Un equivalente al efectivo puede tener un vencimiento superior a 90 días.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La conciliación bancaria permite identificar errores tanto del banco como de la empresa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las inversiones permanentes se clasifican como equivalentes al efectivo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
