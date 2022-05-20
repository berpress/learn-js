const mapping = {
  female: (user) => user.maidenName,
  male: (user) => user.lastName,
};

const lastNames = users.map((user) => mapping[user.gender](user));
