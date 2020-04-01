export const highlight = (project) => {
  switch (project) {
    case 'grocereaz':
      this.setState({
        grocereazIsHighlighted: true,
      });
      break;
    case 'portfolio':
      this.setState({
        portfolioIsHighlighted: true,
      });
      break;
    case 'breakFree':
      this.setState({
        breakFreeIsHighlighted: true,
      });
      break;
    case 'studyCards':
      this.setState({
        studyCardsIsHighlighted: true,
      });
      break;
    default:
      break;
  }
}
