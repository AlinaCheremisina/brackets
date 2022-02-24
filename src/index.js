module.exports = function check(str, bracketsConfig) {
  const arrFromStr = str.split('');

  const removeChecked = () => {
    bracketsConfig.forEach((config) => {
      arrFromStr.forEach((bracket, i) => {
        if (config[0] === bracket && config[1] === arrFromStr[i + 1]) {
          arrFromStr.splice(i, 2);
        };
      });
    });

    if (arrFromStr.length) {
      const results = [];

      bracketsConfig.forEach((config) => {
        arrFromStr.forEach((bracket, i) => {
          if (config[0] === bracket && config[1] === arrFromStr[i + 1]) {
            results.push(true);
          };
        });
      });

      if (results.length) {
        removeChecked();
      };
    };
  };

  removeChecked();

  if (arrFromStr.length) {
    return false;
  } else {
    return true;
  };
}
