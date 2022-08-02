module.exports = function () {
  var data = {
    todos: [
      {
        id: 1,
        date: new Date(2022, 07, 28),
        description: "Write code!",
        done: false,
      },
      {
        id: 2,
        date: new Date(2022, 07, 28),
        description: "Learn ASP .Net Core!",
        done: true,
      },
      {
        id: 3,
        date: new Date(2022, 07, 28),
        description: "Learn ASP Angular!",
        done: false,
      },
    ],
  };
  return data;
};
