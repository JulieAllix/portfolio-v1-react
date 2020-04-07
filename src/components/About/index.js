import React from 'react';
import { Icon } from 'semantic-ui-react';
import otherData from 'src/assets/data/otherData';
import OtherPagesStyled from 'src/components/OtherPagesStyled';

const data = otherData[1];

// eslint-disable-next-line react/prefer-stateless-function
class About extends React.Component {
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
            </div>
            <div className="presentation-wrapper">
              <div className="presentation-part">
                <h1 className="presentation-title">
                  {data.title}
                </h1>
                <div className="icon-wrapper-left">
                  <Icon name="quote left" size="big" color="grey" />
                </div>
                {data.content.map((dataBlock) => (
                  <div key={dataBlock.id} className="presentation-paragraph-about">
                    <div className="presentation-section-title-wrapper">
                      <h2 className="presentation-section-title-about">{dataBlock.title}</h2>
                    </div>
                    {dataBlock.paragraphs.map((dataParagraph) => (
                      <p key={dataParagraph.id} className="data-paragraph">
                        <div dangerouslySetInnerHTML={ {__html: dataParagraph.text } }/>
                      </p>
                    ))}
                  </div>
                ))}
                <div className="icon-wrapper-right">
                  <Icon name="quote right" size="big" color="grey" />
                </div>
              </div>
              <div className="buttons">
                <a href={data.url} className="button" type="button">
                  {data.buttonContent}
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

export default About;
