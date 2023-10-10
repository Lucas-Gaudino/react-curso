import $ from 'jquery';

import 'owl.carousel';

import '../TrendingGames.css'; 
import React ,{ useEffect } from 'react';

const TrendingGames = () => {
    useEffect(() => {
        $(".custom-carousel").owlCarousel({
            autoWidth: true,
            loop: true
        });
  
        // Manejar el clic en los items
        $(".custom-carousel .item").click(function () {
          $(".custom-carousel .item").not($(this)).removeClass("active");
          $(this).toggleClass("active");
        });
      }, []); 
  return (
    <section className="game-section">
    
        <h2 className="line-title">trending games</h2>
        <div className="owl-carousel custom-carousel owl-theme">
            <div className="item active" style={{backgroundImage: 'url(https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg)'}}>
            <div className="item-desc">
                <h3>Dota 2</h3>
                <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
                Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
            </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg)'}}>
            <div className="item-desc">
                <h3>The Witcher 3</h3>
                <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense
                of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
            </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(https://ucarecdn.com/ec1918b1-2674-452c-bf61-8f73d8cc40c6/rdr2.jpg)'}}>
            <div className="item-desc">
                <h3>RDR 2</h3>
                <p>RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
                Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
            </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(https://ucarecdn.com/6ba9052d-6105-4491-917b-e1a65b68f920/pubg.jpg)'}}>
            <div className="item-desc">
                <h3>PUBG Mobile</h3>
                <p>PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
                Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
            </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(https://ucarecdn.com/77598be3-c67f-40de-83d3-71a0f2f76c56/fortnite.jpg)'}}>
            <div className="item-desc">
                <h3>Fortnite</h3>
                <p>Battle royale where 100 players fight to be the last person standing. which was a community-created mod
                for Blizzard Entertainment's Warcraft III.</p>
            </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(https://ucarecdn.com/ed548880-32e4-42af-9d4e-632623903256/farcry5.jpg)'}}>
            <div className="item-desc">
                <h3>Far Cry 5</h3>
                <p>Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft.
                which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
            </div>
            </div>
        </div>
      
    
    </section>
);
}

export default TrendingGames;
