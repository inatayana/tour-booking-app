useEffect(() => {
  fetch("http://localhost:3001/tours")
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);
