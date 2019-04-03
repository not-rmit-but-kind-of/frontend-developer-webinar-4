class Form {
  constructor(element) {
    if (!element) {
      return;
    }

    this.element = element;
    this.submitBtn = this.element.querySelector('.js-btn');

    this.element.addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit().catch(error => console.log(error));
    });
  }

  serialise() {
    const data = {};
    const formData = new FormData(this.element);

    for (const param of formData) {
      const [key, value] = param;
      data[key] = value;
    }

    return data;
  }

  async handleSubmit() {
    this.submitBtn.innerHTML = 'Submitting...';

    const data = this.serialise();

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
