export const eventHandler = (e) => {
  console.log(e);
  console.log(e.target.value);
};
export const useStateHandlerJs = (data) => {
  return (e) => {
    console.log(data);
  };
};

export const debouncer = (actor = () => {}, wait = 500) => {
  let delay;
  return (...arg) => {
    if (delay) window.clearTimeout(delay);
    delay = window.setTimeout(() => {
      actor(...arg);
    }, wait);
  };
};
export const throttle = (action, interval = 2000) => {
  let timecheck;
  return (...args) => {
    if (timecheck) return;
    action(...args);
    //쿨타임
    timecheck = setTimeout(() => {
      timecheck = null;
    }, interval);
  };
};
