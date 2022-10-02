function PetInfo(props) {
  const { animal, age, hasPet } = props;
  const text = hasPet
    ? `My ${animal} is ${age} years old`
    : `I don't have an animal`;

  return <h1>{text}</h1>;
}

/* return hasPet ?      - second option to return JSX
  <h2> {`My ${animal} is ${age} years old`}</h2> :
  <h3> I don't have an animal</h3> */

export default PetInfo;
