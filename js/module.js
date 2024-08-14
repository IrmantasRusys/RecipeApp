/**
 *
 * @param {Number} minute
 * @returns {Object}
 */

export const getTime = (minute) => {
  const /** {Number} */ time = day || hour || minute;

  const /** {Number} */ unitIndex = [day, hour, minute].lastIndexOf(time);
  const /** {String} */ timeUnit = ["days", "hours", "minutes"][unitIndex];

  return { time, timeUnit };
};
