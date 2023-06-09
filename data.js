module.exports = function () {
  var data = {
    authors: [
      {
        id:1,
        nameAuthor: "Luis Pérez Reyes",
        birthDateAuthor: "2000-09-10",
        emailAuthor:"lperez@gmail.com",
      },
      {
        id:2,
        nameAuthor: "Ana Díaz Reyes",
        birthDateAuthor: "1980-10-10",
        emailAuthor:"adiaz@gmail.com",
      },
      {
        id:3,
        nameAuthor: "Gerardo Santillán Reyes",
        birthDateAuthor: "2002-06-05",
        emailAuthor:"gsreyes@gmail.com",
      },
      {
        id:4,
        nameAuthor: "Juana Pérez Reyes",
        birthDateAuthor: "2000-09-10",
        emailAuthor:"jperez@gmail.com123",
      },
      {
        id:5,
        nameAuthor: "Juana Prueba",
        birthDateAuthor: "2020-08-08",
        emailAuthor:"Corre prueba",
      }
    ],
    books:[
      {
        id: 1,
        nameBook: "Las leyes",
	   nHojas: "145",
        publicationDateAuthor: "2022-09-09",
        author:
        {
          id:1,
          nameAuthor: "Luis Pérez Reyes",
          birthDateAuthor: "2000-09-10",
          emailAuthor:"lperez@gmail.com",
        }
      },
    ],
    estado: [
      {
        id: 1,
        description: "Postergado"
      },
      {
        id: 2,
        description: "Aceptado"
      },
      {
        id: 3,
        description: "Rechazado"
      }
     ],
	curso:
      [
        {
          id:1,
          nameCurso: "Matematica",
          cantCurso:"12",
        },
        {
          id:2,
          nameCurso: "Comunicacion",
          cantCurso:"17",
        },
        {
          id:3,
          nameCurso: "Personal Social",
          cantCurso:"9",
        },
        {
          id:4,
          nameCurso: "Calculo Basico",
          cantCurso:"5",
        },
        {
          id:5,
          nameCurso: "Calculo Medio",
          cantCurso:"12",
        },
        {
          id:6,
          nameCurso: "EPT",
          cantCurso:"4",
        }
      ],
      psicologos: [
        {
          id:1,
          nombrePsico: "Pedroprueba",
          apPatPsicologo: "Pérez",
          apMatPsicologo: "Reyes",
          fechaNacimiento: "2000-09-10",
          especialidad:"clinica",
        },
        {
          id:2,
          nombrePsico: "Ana",
          apPatPsicologo: "Díaz",
          apMatPsicologo: "Reyes",
          fechaNacimiento: "1980-10-10",
          especialidad:"clinica",
        },
        {
          id:3,
          nombrePsico: "Gerardo",
          apPatPsicologo: "Santillán",
          apMatPsicologo: "Reyes",
          fechaNacimiento: "2002-06-05",
          especialidad:"clinica",
        },
        {
          id:4,
          nombrePsico: "Juana",
          apPatPsicologo: "Pérez",
          apMatPsicologo: "Reyes",
          fechaNacimiento: "2000-09-10",
          especialidad:"clinica",
    }
      ],
Tutores: [
      {
        id:1,
        nombreTutor: "Aaron Moises",
        apellidoPatTutor: "Cosquillo",
        apellidoMatTutor:"Gara",
        dniTutor:"12345678",
        telefono:"992 941 621",
        email:"u201911284@upc.edu.pe",
        tipopersona:"Natural",
      },
      {
        id:2,
        nombreTutor: "Eliane Marifer",
        apellidoPatTutor: "Ramirez",
        apellidoMatTutor:"Guzman",
        dniTutor:"23456789",
        telefono:"975 171 544",
        email:"u20201b351@upc.edu.pe",
        tipopersona:"Natural",
      },
      {
        id:3,
        nombreTutor: "Pablo Daniel",
        apellidoPatTutor: "Madalengoitia",
        apellidoMatTutor:"Alayo",
        dniTutor:"34567891",
        telefono:"962 179 311",
        email:"u20201b294@upc.edu.pe",
        tipopersona:"Natural",
      },
      {
        id:4,
        nombreTutor: "Anthony Daniel",
        apellidoPatTutor: "Villavicencio",
        apellidoMatTutor:"Aguilar",
        dniTutor:"45678912",
        telefono:"943 688 132",
        email:"u20201c047@upc.edu.pe",
        tipopersona:"Natural",
	},
  {
    id:5,
    nombreTutor: "Stefano Giovanni",
    apellidoPatTutor: "Roca",
    apellidoMatTutor:"Zela",
    dniTutor:"76819043",
    telefono:"910 358 782",
    email:"u20201b461@upc.edu.pe",
    tipopersona:"Natural",
},

    ],
catCita: [
      {
        id:1,
        nombreCita: "Examen de Inicio",
        descripcionCita: "Examen academico bajo supervición psicologica para determinar los modulos de cursos a los cuales el usuario se podrá matricular",
      },
      {
        id:2,
        nombreCita: "Asesoría para tutores",
        descripcionCita: "Charla por videoconferencia en vivo con el psicologo para dar consejos sobre una educación adecuada para los jovenes con discapacidad intelectual",
      },
      {
        id:3,
        nombreCita: "Aseoría academica",
        descripcionCita: "El usuario podrá reservar horas de tutoría academica en caso de querer reforzar un teema",
      },
      {
        id:4,
        nombreCita: "Examen de Rendimiento",
        descripcionCita: "Examen academico bajo supervición psicologica para determinar los avances o mejoras que ha tenido el usuario",
      },
    ],
    estudiante:[
      {
        id: 1,
        nombreEstudiante: "Juan",
        fechaNacimientoEstudiante: "2002-09-09",
        apPatEstudiante: "Lopez",
        apMatEstudiante: "Aguilar",
        dniEstudiante: "75481648",
            Tutor:
            {
              id:1,
              nombreTutor: "Aaron Moises",
              apellidoPatTutor: "Cosquillo",
              apellidoMatTutor:"Gara",
              dniTutor:"12345678",
              telefono:"992 941 621",
              email:"u201911284@upc.edu.pe",
              tipopersona:"Natural",
            }
      },
    ],
    cita:[
      {
        id:1,
        disponible: "Sí",
        fecha: "2023-06-04",
        hora: "07:30 PM",
        catCita:{
          id:1,
        nombreCita: "Examen de Inicio",
        descripcionCita: "Examen academico bajo supervición psicologica para determinar los modulos de cursos a los cuales el usuario se podrá matricular",
        },
        Estudiante: {
          id: 1,
        nombreEstudiante: "Juan",
        fechaNacimientoEstudiante: "2002-09-09",
        apPatEstudiante: "Lopez",
        apMatEstudiante: "Aguilar",
        dniEstudiante: "75481648",
        },
        Psicologo: {
          id:1,
          nombrePsico: "Pedroprueba",
          apPatPsicologo: "Pérez",
          apMatPsicologo: "Reyes",
          fechaNacimiento: "2000-09-10",
          especialidad:"clinica",
        },
        Estado: {
          id: 1,
        description: "Postergado",
        }
      }
    ],
    evaluacion:[
      {
        id: 1,
        diagnostico: "El estudiante evaluado, muestra deficit de atención, y un promedio más bajo en los cursos de Matematica, se le habilitaran los cursos del modulo 3",
        cita:{
          id:1,
          disponible: "Sí",
          fecha: "2023-06-04",
          hora: "07:30 PM"
        }
      },
      {
        id: 2,
        diagnostico: "Se le asignaran cursos de lenguaje del modulo 2",
        cita:{
          id:3,
          disponible: "Sí",
          fecha: "2023-04-04",
          hora: "10:30 PM"
        }
      },
      {
        id: 3,
        diagnostico: "El estudiante tomara cursos de nivelación secundaria",
        cita:{
          id:2,
          disponible: "No",
          fecha: "2023-06-04",
          hora: "09:45 AM"
        }
      },
    ]


  }
  return data
}

