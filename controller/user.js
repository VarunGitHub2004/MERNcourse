import User from "../Modals/users.js";
export const getAllUsers =async (req, res) => {
  const users=await User.find()
  res.status(200).send(users);
};

export const getUser = (req, res) => {
  const id = +req.params.id;
  const user = User.find((p) => p.id === id);
  res.json(user);
};
export const replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = User.findIndex((p) => p.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
export const updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = User.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(201).json();
};
export const deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = User.findIndex((p) => p.id === id);
  const user = User[userIndex];
  User.splice(userIndex, 1);
  res.status(201).json(user);
};
