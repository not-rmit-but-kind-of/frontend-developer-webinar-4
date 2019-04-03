class Form {
  constructor(element) {
    this.element = element;
    this.emailInput = this.element.querySelector('#email');
    this.nameInput = this.element.querySelector('#fullname');
    this.feedbackInput = this.element.querySelector('#feedback');
    this.submitBtn = this.element.querySelector('.js-btn');

    this.element.addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit();
    });
  }

  async handleSubmit() {
    this.submitBtn.innerHTML = 'Submitting...';

    const data = {
      name: this.nameInput.value,
      email: this.emailInput.value,
      feedback: this.feedbackInput.value,
    };

    const response = await fetch('https://reqres.in/api/feedback?delay=2', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseJSON = await response.json();

    this.submitBtn.innerHTML = `Thank you ${responseJSON.fullName}!`;

    setTimeout(() => {
      this.submitBtn.innerHTML = `Give feedback`;
    }, 3000);
  }
}

const feedbackForm = document.querySelector('.js-feedback-form');

if (feedbackForm) {
  new Form(feedbackForm);
}
