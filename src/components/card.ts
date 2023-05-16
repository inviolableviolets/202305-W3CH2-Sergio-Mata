import { allCharacters } from '../data/charactersList';
import { Component } from './component';

export class Card extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `      <li class="character col">
        <div class="card character__card">
          <img src="/images/joffrey.jpg" alt="Joffrey Baratheon" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${allCharacters[0].name} ${allCharacters[0].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${allCharacters[0].age} años</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: ${allCharacters[0].kingYears}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji">👑</i>
        </div>
      </li>`;
  }
}
