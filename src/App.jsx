import React, { useState, useEffect } from "react";
import { Routes } from "./routes";

const App = () => {
  // Bu kısım örnek amaçlıdır. Gerçekte yetkilendirme durumunu API çağrısı veya benzeri bir yöntemle elde edebilirsiniz.
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Örnek amaçlıdır. Gerçekte yetkilendirme kontrolü için API çağrısı yapabilir veya token kontrolü yapabilirsiniz.
  // useEffect(() => {
  //   // const checkAuthorization = async () => {
  //   //   // Örnek: Bir API endpoint'inden yetkilendirme durumu kontrol ediliyor.
  //   //   // const response = await fetch('/api/check-auth');
  //   //   // const data = await response.json();
  //   //   // setIsAuthorized(data.isAuthorized);

  //   //   // Bu örnekte sadece varsayılan olarak yetkilendirme durumu true olarak set ediliyor.
  //   //   setIsAuthorized(true);
  //   // };
  //   setIsAuthorized(true);
  //   // checkAuthorization();
  // }, []);
  //setIsAuthorized(true);
  return <Routes isAuthorized={true} />;
};

export default App;
