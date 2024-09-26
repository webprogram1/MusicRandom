let visitorInfo; // Declare visitorInfo outside the fetch block

fetch('https://api.ipgeolocation.io/ipgeo?apiKey=f65680e1f7f94198b7ba017d06e3f4bf')
  .then(response => response.json())
  .then(data => {
    visitorInfo = {
      IP: data.ip,
      Country: data.country_name,
      City: data.city,
      ISP: data.isp,
      Latitude: data.latitude,
      Longitude: data.longitude
    };

    console.log("Visitor's Personal Information (Automatically Fetched):");
    console.log(visitorInfo);

    // Move the fetch request inside this block to ensure visitorInfo is defined
    fetch('https://mhmadab12.github.io/music-random/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(visitorInfo)
    })
    .then(response => console.log(response))
    .catch(error => console.error("Error sending data to server:", error));
  })
  .catch(error => console.error("Error fetching visitor's information:", error));
