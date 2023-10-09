import React from "react";
import bannerPrincipal from '../../assets/principal.jpg';
import styled from "styled-components";
/* article class="hero-image">
        <div>
            <h1>Tienda en línea con Flexbox</h1>
        </div>
    </article>


*/
const ArticleHero = styled.article`
  min-height: 60vh;
  background-image: url(${bannerPrincipal});
  background-repeat: no-repeat;
  color: #fff;
  background-position: center;
  background-size: cover;
`;

const Herodiv = styled.div`
min-height: inherit;
display: grid;
justify-content: center;
align-items: center;
background-color: #0000009c;
text-align: center;
`;

const Heroh1=styled.h1`
font: size 5rem;
`;

function Banner() {
    return (
        <ArticleHero>
            <Herodiv>
                <Heroh1>
                    Titulo Banner
                </Heroh1>

            </Herodiv>

        </ArticleHero>

    )
}

export default Banner;