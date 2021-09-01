import React from 'react';

const FlipCard = () => {
  return (
    <>
      <section className="seccion " style={{
        background: 'background: rgb(67,41,131)',
        background: 'linear-gradient(56deg, rgba(67,41,131,1) 37%, rgba(177,23,23,1) 79%, rgba(217,162,84,1) 100%)'
      }}>

        <div className="container">
          <h2 className="noo-sh-title" style={{
            color: '#fff',
            fontSize: '50px',
            textAlign: 'left'
          }}>
            
          </h2>
          <div className="boxesContainer row">
            <div className="cardBox  wow fadeInUp wow fadeInUp" >
              <div className="card">
                <div className="front">
                  {/* <h3>Card One</h3> */}
                  <p style={{ fontSize: '15px', }}></p>
                  <ul>
                    <li style={{ fontSize: '12px', }}>
                     
                    </li>
                  </ul><br />
                  {/* <strong>↻</strong> */}
                </div>
                <div className="back">
                  <img src="" alt="">
                  </img>
                  <h3 className="noo-sh-title"></h3>
                  <p></p>
                  <div className="actions  wow fadeInLeft">
                    <a href="../our-services">
                      Servicios!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardBox  wow fadeInUp col-4">
              <div className="card">
                <div className="front">
                  {/* <h3>Card Two</h3> */}
                  <p style={{ fontSize: '15px', }}>
                  </p>
                  <ul>
                    <li style={{ fontSize: '12px', }}>
                     
                    </li>
                  </ul><br />

                  {/* <strong>↻</strong> */}
                </div>
                <div className="back">
                  <img src="" alt="">
                  </img>
                  <h3 className="noo-sh-title"></h3>
                  <p></p>
                  <div className="actions  wow fadeInLeft">
                    <a href="../our-services">
                      Servicios!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="cardBox  wow fadeInUp">
                    <div className="card">
                        <div className="front">
                            <h3>Card Three</h3>
                            <p>Hover to flip</p>
                            <strong>↻</strong>
                        </div>
                        <div className="back">
                            <h3>Back Side Three</h3>
                            <p>Content in card three</p>
                            <a href="#">Button 3</a>
                        </div>
                    </div>
                </div> */}
            <div className="cardBox  wow fadeInUp col-4">
              <div className="card">
                <div className="front">
                  {/* <h3>Card Four</h3> */}
                  <p style={{ fontSize: '15px', }}></p>
                  <ul>
                    <li style={{ fontSize: '12px', }}>
                      
                    </li>
                  </ul><br />
                  {/* <strong>↻</strong> */}
                </div>
                <div className="back">
                  <img src="" alt="" />
                  <h3 className="noo-sh-title"></h3>
                  <p></p>
                  <div className="actions  wow fadeInLeft">
                    <a href="../our-services">
                      Servicios!
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/*.boxesContainer*/}
        </div>
        <style jsx>{`
       body {
        color: #333;
        font-family: Arial, Helvetica, serif;
        font-weight: normal;
        margin: 0;
        padding: 0;
        // background: url(https://josetxu.com/img/fondo_blanco.png) repeat 0 0 #fff;
      }
      
      h1 {
        background: #333;
        color: #fff;
        text-align: center;
        margin: 0 0 5% 0;
        padding: 0.5em;
        margin: 0 0 5% 0;
      }
      
      .cardBox {
        // float: right;
        font-size: 1.1em;
        margin: 1% 0 0 1%;
        perspective: 800px;
        transition: all 0.3s ease 0s;
        width: 30%;
      }
      
      .cardBox:hover .card {
        transform: rotateY( 180deg);
      }
      
      .card {
        background: #222;
        cursor: default;
        height: 300px;
        transform-style: preserve-3d;
        transition: transform 0.4s ease 0s;
        width: 100%;
        -webkit-animation: giro 1s 1;
        animation: giro 1s 1;
      }
      
      .card p {
        margin-bottom: 1.08em;
        color: #fff;
      }
      
      .card .front,
      .card .back {
        backface-visibility: hidden;
        box-sizing: border-box;
        color: white;
        display: block;
        font-size: 1.2em;
        height: 100%;
        padding: 0.8em;
        position: absolute;
        text-align: center;
        width: 100%;
      }
      
      .card .front strong {
        background: #fff;
        border-radius: 100%;
        color: #222;
        font-size: 1.5em;
        line-height: 30px;
        padding: 0 7px 4px 6px;
      }
      
      .card .back {
        transform: rotateY( 180deg);
      }
      
      .card .back a {
        padding: 0.3em 0.5em;
        // background: #333;
        // color: #fff;
        text-decoration: none;
        border-radius: 1px;
        font-size: 0.9em;
        transition: all 0.2s ease 0s;
      }
      
      .card .back a:hover {
        background: #fff;
        color: #333;
        text-shadow: 0 0 1px #333;
      }
      
      .cardBox:nth-child(1) .card .back {
        background: cornflowerblue;
      }
      
      .cardBox:nth-child(2) .card .back {
        background: orange;
      }
      
      .cardBox:nth-child(3) .card .back {
        background: yellowgreen;
      }
      
      .cardBox:nth-child(4) .card .back {
        background: tomato;
      }
      
      .cardBox:nth-child(2) .card {
        -webkit-animation: giro 1.5s 1;
        animation: giro 1.5s 1;
      }
      
      .cardBox:nth-child(3) .card {
        -webkit-animation: giro 2s 1;
        animation: giro 2s 1;
      }
      
      .cardBox:nth-child(4) .card {
        -webkit-animation: giro 2.5s 1;
        animation: giro 2.5s 1;
      }
      
      @-webkit-keyframes giro {
        from {
          transform: rotateY( 180deg);
        }
        to {
          transform: rotateY( 0deg);
        }
      }
      
      @keyframes giro {
        from {
          transform: rotateY( 180deg);
        }
        to {
          transform: rotateY( 0deg);
        }
      }
      
      @media screen and (max-width: 767px) {
        .cardBox {
          margin-left: 2.8%;
          margin-top: 3%;
          width: 46%;
        }
        .card {
          height: 285px;
        }
        .cardBox:last-child {
          margin-bottom: 3%;
        }
      }
      
      @media screen and (max-width: 480px) {
        .cardBox {
          width: 94.5%;
        }
        .card {
          height: 260px;
        }
      }

      .actions {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
    .actions a {
        color: #fff;
        background: red;
        padding: 16px 24px;
        text-decoration: none;
        
        margin: 0;
        display: inline-block;
        padding: 20px;
        position: relative;
        top: -20px;
        left: -10px;
        transform: rotateZ(-5deg);
        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    }
    .actions a:hover{ 
        
        transform: scale(1.2)
    }
    .back-naranja{
        background: 'linear-gradient(to left, #965d00, #ffab00);
    }
      `}</style>
      </section>
      {/* <h1>Flip Cards Responsive</h1> */}

    </>
  );
}

export default FlipCard;
