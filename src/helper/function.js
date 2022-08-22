import { v4, validate } from "uuid";
export const uniqueId = () => {
  return v4();
};
export const validateId = (id) => {
  return validate(id);
};
