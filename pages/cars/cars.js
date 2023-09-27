import { API_URL } from "../../settings.js";
const URL = API_URL + "/cars";
import { sanitizeStringWithTableRows, handleHttpErrors } from "../../utils.js";

export async function initCars() {
	//const cars = await fetch(URL).then((res)=>handleHttpErrors(res))
	const cars = await fetch(URL).then((res) => res.json());

	const tableRows = cars.map(
		(car) => `
  <tr>
  <td>${car.id}</td>
  <td>${car.brand}</td>
  <td>${car.model}</td>
  <td>${car.pricePrDay}</td>
  <td>${car.bestDiscount}</td>
  </tr>
  `
	);
	const tableRowsAsStr = tableRows.join("");

	document.getElementById("table-rows").innerHTML =
		sanitizeStringWithTableRows(tableRowsAsStr);
}
