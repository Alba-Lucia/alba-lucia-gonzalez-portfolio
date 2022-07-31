import React from 'react'
import {Carousel} from 'react-bootstrap'
import styles from './testimonial.module.scss'
import { FormattedMessage } from 'react-intl';

const Testimonial = () => {
      return (
        <section className={` ${styles.testimonial}`}>
        <h2 className={styles.testimonial__title}>
          <FormattedMessage 
            id="testimonial.saludo" 
            defaultMessage="Testimonial" 
          />
        </h2>
        <Carousel className={styles.testimonial}>
          <Carousel.Item className={styles.testimonial__item}>
                <img 
                  className={styles.testimonial__image}
                  src='/img/Nathan.png' 
                  alt="Photo testimonial Nathan" 
                />
                <div className={styles.testimonial__text}>
                  <p>{'"'}I have hired Alba for two separate projects and came away 
                    impressed by her level of expertise and efficiency each time. 
                    She was always there to help and to correct any changes that 
                    were necessary. I am confident to recommend her to others and 
                    I won{"'"}t hesitate to ask for her assistance in a variety of 
                    matters. Thanks Alba!.{'"'}
                  </p>
                  <p className={styles.testimonial__text_name}>
                    Teacher Nathan
                  </p>
                </div>
              </Carousel.Item>

              <Carousel.Item className={styles.testimonial__item}>
                <img 
                  className={styles.testimonial__image}
                  src='/img/CafeMercado.png' 
                  alt="Foto testimonial cafe del mercado" 
                />
                <div className={styles.testimonial__text}>
                  <p>{'"'}Alba González es una excelente profesional diseño y puso en 
                    marcha nuestra pagina web tucafedelmercado.com la cual nos 
                    ayudó a mejorar las ventas hasta en un 50%, es una página muy 
                    fácil de entender, con un manejo de diseño muy versátil el 
                    cual hace que nuestros clientes no tengan dudas al hacer una 
                    compra.{'"'}
                  </p>
                  <p className={styles.testimonial__text_name}>
                    Café del Mercado
                  </p>
                </div>
              </Carousel.Item>
             
              <Carousel.Item className={styles.testimonial__item}>
                <img 
                  className={styles.testimonial__image}
                  src='/img/Logo-historia.png' 
                  alt="Foto testimonial cafe del mercado" 
                />
                <div className={styles.testimonial__text}>
                  <p>{'"'}Alba is an extremely hard worker and dedicated to
                    helping you craft any kind of design. She helped me 
                    create a new web design for my company and I could not
                    be more satisfied with her work. She always has a 
                    positive attitude when speaking with her and even expanded on my own ideas, so it was easy to work on the 
                    project together. Alba is passionate about her clients 
                    and truly cares about making them happy. I absolutely 
                    recommend Alba for your future projects!{'"'}
                  </p>
                  <p className={styles.testimonial__text_name}>
                    Historia
                  </p>
                </div>
              </Carousel.Item>
          </Carousel>
        </section>
      )
  }
export default Testimonial