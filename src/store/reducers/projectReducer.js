const initState = {
  projects: [
    {
      id: 1,
      title: "Quite Smoking",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 2,
      title: "Be religious",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    {
      id: 3,
      title: "Find a good job",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;

// const initState = {}

// const projectReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'CREATE_PROJECT_SUCCESS':
//       console.log('create project success');
//       return state;
//     case 'CREATE_PROJECT_ERROR':
//       console.log('create project error');
//       return state;
//     default:
//       return state;
//   }
// };

// export default projectReducer;