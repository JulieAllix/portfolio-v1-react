import React from 'react';
// import { Icon } from 'semantic-ui-react';
import otherData from 'src/assets/data/otherData';
import OtherPagesStyled from 'src/components/OtherPagesStyled';

const data = otherData[0];

// eslint-disable-next-line react/prefer-stateless-function
class Oclock extends React.Component {
  render() {
    return (
      <OtherPagesStyled>
        <section className="presentation-section">
          <div className="presentation-section-second-level">
            <div className="picture-mobile-wrapper">
              <img
                src={data.image}
                alt={data.alt}
                className="picture-mobile"
              />
              <h2 className="mobile-page-name">
                {data.title}
              </h2>
            </div>
            <div className="presentation-wrapper">
              <div className="presentation-part">
                <h1 className="presentation-title">
                  {data.title}
                </h1>
                {data.content.map((dataBlock) => (
                  <div key={dataBlock.id} className="presentation-paragraph">
                    <h2 className="presentation-section-title">{dataBlock.title}</h2>
                    {dataBlock.paragraphs.map((dataParagraph) => (
                      <p key={dataParagraph.id} className="data-paragraph">
                        {dataParagraph.text}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              <div className="buttons">
                <a href={data.url} className="button" type="button">
                  Learn more about this training (FR)
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="picture-section">
          <div className="picture-desktop-wrapper">
            <img
              src={data.image}
              alt={data.alt}
              className="picture-desktop"
            />
            <div className="pin" />
          </div>
        </section>
      </OtherPagesStyled>
    );
  }
}

export default Oclock;
