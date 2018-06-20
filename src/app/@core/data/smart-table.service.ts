import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    username: '@twitter',
    email: 'twitter@outlook.com',
    age: '18',
  }];

  questions_data = [{
    id: 1,
    question: 'What is XYZ?',
    answer: 'A',
  }, {
    id: 2,
    question: 'How is ABC',
    answer: 'B',
  }, {
    id: 3,
    question: 'Why is PQR?',
    answer: 'D',
  }];


  shows_data = [{
    id : 'kbc01',
    name: '<a href="/#/pages/tables/questions">KBC</a>',
    channel: 'sony',
    start_time: '8:00 pm'
  }, {
    id : 'big01',
    name: 'Big Boss',
    channel: 'colors',
    start_time: '8:00 pm'
  }, {
    id : 'dus01',
    name: 'Dus Ka Dum',
    channel: 'sony',
    start_time: '8:00 pm'
  }];

  getData() {
    return this.data;
  }

  getShows() {
    return this.shows_data;
  }

  getQuestions() {
    return this.questions_data;
  }

}
