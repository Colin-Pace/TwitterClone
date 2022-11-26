import './WhatsHappening.css';
import React, { useState, useEffect } from 'react';


function WhatsHappening() {
  //API key = eec40e4ada8b4a55a1259ccd6274af14

  const getNews = function() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=eec40e4ada8b4a55a1259ccd6274af14";

		fetch(url)
			.then(response => {
				if (response.ok) {
          return response.json();
				} else {
					throw new Error("An error occurred");
				}
			})

      .then(response => {
        console.log(response);
      })

			.catch(error => {
				console.log(error);
			});
  }

  useEffect(() => {
    getNews();
  });

  return (
    <div className="WhatsHappening">
      <div id = 'whatsHappening'>
        <p id = 'wHTitle'>What's happening</p>

      </div>
    </div>
  );
}

export default WhatsHappening;
