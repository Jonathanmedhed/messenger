export const getRandom = (mn, mx) => {
  return Math.floor(Math.random() * (mx - mn) + mn);
};

export const idGenerator = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};

export const createUsers = (pics) => {
  let usersPrev = [];

  const statusList = [
    "inactive",
    "offline",
    "busy",
    "blocked",
    "away",
    "online",
  ];

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  for (let index = 0; index < 100; index++) {
    const name = userGenerator();
    usersPrev.push({
      email: `${name}@gmail.com`,
      img: pics[Math.floor(getRandom(1, pics.length)) - 1],
      msg: text.substring(0, getRandom(1, 150)),
      name: name,
      status: statusList[Math.floor(getRandom(1, statusList.length)) - 1],
    });
  }
  //add friends
  let usersUpdated = [];
  for (let index = 0; index < usersPrev.length - 1; index++) {
    let userToUpdate = usersPrev[index];
    userToUpdate.followers = usersPrev.slice(
      getRandom(55, 61),
      getRandom(62, 66)
    );
    userToUpdate.following = usersPrev.slice(
      getRandom(55, 61),
      getRandom(62, 66)
    );
    usersUpdated.push(userToUpdate);
  }
  return usersUpdated;
};

export const userGenerator = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };

  var a = [
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "Sophia",
    "Isabella",
    "Mia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Evelyn",
    "Abigail",
    "Emily",
    "Elizabeth",
    "Sofia",
    "Madison",
    "Avery",
    "Ella",
    "Scarlett",
    "Grace",
    "Chloe",
    "Victoria",
    "Riley",
    "Aria",
    "Lily",
    "Aubrey",
    "Penelope",
    "Zoey",
    "Nora",
    "Hannah",
    "Layla",
    "Lillian",
    "Addison",
    "Eleanor",
    "Natalie",
    "Luna",
    "Samantha",
    "Mila",
    "Brooklyn",
    "Anna",
    "Leah",
    "Zoe",
    "Stella",
    "Hazel",
    "Ellie",
    "Paisley",
    "Audrey",
    "Skylar",
    "Violet",
  ];
  const b = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
    "Perez",
    "Thompson",
    "White",
    "Harris",
    "Sanchez",
    "Clark",
    "Ramirez",
    "Lewis",
    "Robinson",
    "Walker",
    "Young",
    "Allen",
    "King",
    "Wright",
    "Scott",
    "Torres",
    "Nguyen",
    "Hill",
    "Flores",
    "Green",
    "Adams",
    "Nelson",
    "Baker",
    "Hall",
    "Rivera",
    "Campbell",
    "Mitchell",
    "Carter",
    "Roberts",
  ];

  const rA = Math.floor(Math.random() * a.length);
  const rB = Math.floor(Math.random() * b.length);
  const name = a[rA] + " " + b[rB];
  return name;
};
