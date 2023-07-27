import React from 'react'
import bacrouns from './../photos/BAC2.jpg'
import './About.css'
import Video from './Video'

const About = () => {
  return (
    <div className='about'>
      <div className='abouttop' style={{backgroundImage: `url(${ bacrouns})` }} >
        <div className='aboutbottom'>
          <h1>About Us</h1>
          <p>La plongée sous-marine est une activité consistant à rester sous l'eau, soit en apnée dans le cas de la plongée libre, soit en respirant à l'aide d'un narguilé (tuyau apportant de l'air depuis la surface) ou le plus souvent en s'équipant d'une bouteille de plongée dans le cas de la plongée en scaphandre autonome.

Le matériel spécifique commun aux différentes formes de plongée se compose généralement d'une combinaison isothermique, d'un masque, de palmes (qui peut être une monopalme dans le cas de la plongée libre), et d'un lestage porté sur une ceinture. Dans le cas spécifique de la plongée en scaphandre autonome ce dernier peut être intégré dans un gilet stabilisateur équipé d'un direct system, le plongeur sera également muni d'une bouteille de plongée contenant généralement de l'air comprimé autour de 200 bars. Le gaz respiré par le plongeur en scaphandre autonome est apporté via un détendeur. Des instruments de mesure sont utilisés pour contrôler la plongée : ordinateur de plongée mais aussi manomètre (pression dans la bouteille) pour les plongeurs en scaphandre. Les ordinateurs de plongée calculent en temps réel les paramètres de plongée et optimisent les plongées par rapport à l'utilisation traditionnelle d'une montre (temps de plongée) et d'un profondimètre (profondeur de plongée), un paramètre correspondant aux tables de décompression (tableaux donnant les temps maximum en fonction des profondeurs et temps d'immersion) est ajouté pour les plongeurs en scaphandre. Malgré les ordinateurs, ces derniers doivent être en mesure de contrôler en permanence leurs paramètres de plongée et être en mesure de calculer leurs paliers de décompression par les moyens traditionnels. Les pratiquants de la plongée libre n'ont eux pas besoin d'utiliser ces paliers. Le troisième type de plongée, la plongée à l'aide d'un narguilé est plutôt pratiquée par les professionnels, elle nécessite un équipement plus particulier et est beaucoup plus rare que la plongée libre ou la plongée en scaphandre autonome, ces deux formes de plongée étant davantage pratiquées en tant que loisir.</p>

  <Video/>
        </div>
      </div>
    </div>
  )
}

export default About