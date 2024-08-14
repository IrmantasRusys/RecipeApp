/**
 * Mūsų projekte naudojamas API receptams gauti iš edamam.com
 * edamam.com -> Recipe Search API -> Pasirenki Free planą ir spaudi "Get Started" -> Prisiregistruoji -> Accounts -> Dashboard -> Applications ->
 * Recipe Search API -> View -> Application Keys -> susigeneruoji naujus ir prisidedi Application ID ir Application KEYS.
 *
 * Mokamose versijose yra daugiau duomenų (gaminimo procesas)
 */

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const /** {String} */ APP_ID = "2ca98902";
const /** {String} */ API_KEY = "9de551d07dd277f0c19bf2f49ae04e34";
const /** {String} */ TYPE = "public";

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */

export const fetchData = async function (queries, successCallback) {
  const /** {String} */ query = queries
      ?.join("&")
      .replace(/,/g, "=")
      .replace(/ /g, "%20")
      .replace(/\+/g, "%2B");

  const /** {String} */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${
      query ? `&${query}` : ""
    }`;

  const /** {Object} */ response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  }
};
