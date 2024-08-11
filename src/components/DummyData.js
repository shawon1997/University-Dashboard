// DummyData.js
export const students = [

  ];
  
  export const fields = ['Arts', 'Commerce', 'Engineering'];
  export const years=["1st","2nd","3rd","4th"]
  
  export const subjects = {
    Arts: ['History', 'Literature'],
    Commerce: ['Economics', 'Accounting'],
    Engineering: ['Math', 'Physics'],
  };

  export let streamData=[{ stream: "", subject: [""] }]

  export function updateStream(newStream) {
    streamData = newStream;
  }

  export function updateStudent(newStudent) {
    students = newStudent;
  }

  export const StudentSignUpData=[]


  