class Page {
  constructor(props) {
    this.props = props;
  }

  render(content) {
    const section = document.createElement('section');
    const controllerBlock = document.createElement('div');
    const contentBlock = document.createElement('div');
    const backButton = document.createElement('button');

    backButton.innerText = 'Back';
    backButton.addEventListener('click', () => {
      this.props.browserHistory.goBack();
    });

    controllerBlock.appendChild(backButton);
    contentBlock.appendChild(content);

    section.appendChild(controllerBlock);
    section.appendChild(contentBlock);

    return section;
  }
}

export default Page;
