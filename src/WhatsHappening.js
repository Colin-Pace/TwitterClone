import './WhatsHappening.css';
import React, { useState, useEffect } from 'react';


function WhatsHappening() {
  const makeCards = function(data) {
    const cards = [];
    for (let i = 0; i < 5; i++) {

      const card = <div>
                     
                   </div>
    }
  }

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
        ///console.log(response["articles"]);
        //makeCards(response);
      })

			.catch(error => {
				console.log(error);
			});
  }

  useEffect(() => {
    //getNews();
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
