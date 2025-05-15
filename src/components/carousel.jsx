import React from 'react';
import { Carousel } from 'antd';
import imageemsi from '../assets/imageemsi.jpeg';

// Styles pour le carrousel
const styles = {
  slideContainer: {
    position: 'relative',
    height: '200px', // Hauteur augmentée pour plus d'espace
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'blur(5px)', // Effet de flou
    transform: 'scale(1.1)', // Zoom léger pour éviter les bords flous
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay légèrement plus sombre
    zIndex: 1,
  },
  textContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column', // Titre et paragraphe alignés verticalement
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    width: '80%', // Largeur réduite pour éviter les bords
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '10px', // Espacement entre titre et paragraphe
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)', // Ombre pour lisibilité
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)',
    maxWidth: '600px', // Limite la largeur du paragraphe
  },
  placeholderSlide: {
    height: '200px',
    color: '#fff',
    lineHeight: '200px',
    textAlign: 'center',
    background: '#364d79',
  },
};

const Infocarousel = () => (
  <Carousel autoplay autoplaySpeed={5000}>
    {/* Première diapositive avec image et texte */}
    <div>
      <div style={styles.slideContainer}>
        <img src={imageemsi} alt="Votre réclamation en toute sécurité" style={styles.image} />
        <div style={styles.overlay}></div>
        <div style={styles.textContainer}>
          <h2 style={styles.title}>Votre réclamation en toute sécurité</h2>
          <p style={styles.paragraph}>
            Notre plateforme vous offre un moyen simple et sécurisé de soumettre vos demandes.
            Suivez les étapes et bénéficiez d'un service rapide et efficace.
          </p>
        </div>
      </div>
    </div>
    {/* Deuxième diapositive (placeholder) */}
    <div>
      <div style={styles.slideContainer}>
        <img src={imageemsi} alt="Votre réclamation en toute sécurité" style={styles.image} />
        <div style={styles.overlay}></div>
        <div style={styles.textContainer}>
          <h2 style={styles.title}>Emsi.ma</h2>
        </div>
      </div>
    </div>
  </Carousel>
);

export default Infocarousel;