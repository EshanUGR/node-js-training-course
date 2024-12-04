
export  const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(url);
  const time = new Date().getFullYear();

  console.log(method, url, time);
  console.log("logger method");
  next();
};

