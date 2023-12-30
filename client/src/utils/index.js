import { PersonIcon } from "../icon";

export const apiImages = "http://localhost:8080/images";
export const api = "http://localhost:8080";
export const token = localStorage.getItem("token") || undefined;
export function formatNumber(number) {
  let formattedNumber = number.toLocaleString("en-US");
  formattedNumber = formattedNumber.replace(/,/g, ",");
  return formattedNumber;
}
export function displayPerson(number) {
  if (Number.isInteger(number) && number >= 1 && number <= 10) {
    const icons = Array.from({ length: number }, (_, index) => (
      <PersonIcon key={index} />
    ));
    return icons;
  } else {
    return null;
  }
}
